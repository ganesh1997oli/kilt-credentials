const apiWindow = window;
function documentReadyPromise(creator) {
  return new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve(creator());
    } else {
      window.addEventListener("load", () => resolve(creator()));
    }
  });
}

export function getExtensions() {
  apiWindow.kilt = apiWindow.kilt || {};
  return documentReadyPromise(() => apiWindow.kilt);
}

export async function getSession(provider) {
  if (!provider) {
    throw new Error("No provider");
  }

  const { dAppEncryptionKeyUri, challenge, sessionId } =
    await getSessionValues();
  const dAppName = "Xcavate";

  const session = await provider.startSession(
    dAppName,
    dAppEncryptionKeyUri,
    challenge
  );

  const { encryptionKeyUri, encryptedChallenge, nonce } = session;
  await checkSession(
    {
      encryptionKeyUri,
      encryptedChallenge,
      nonce,
    },
    sessionId
  );

  const { name } = provider;

  return { ...session, sessionId, name };
}
