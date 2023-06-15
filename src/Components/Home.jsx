import React,{useEffect,useState,useContext} from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/ilustration.png";
import AssetCard from "./AssetCard";
import { data } from "../utils/assets";
import * as Kilt from '@kiltprotocol/sdk-js';
import WalletPopup from "./WalletPopup";

const Home = () => {
  const [did, setDid] = useState('');
  useEffect(() => {
    const resolveWeb3Name = async () => {
      let res = await Kilt.init({ address: "wss://spiritnet.kilt.io:443" });
      let did = await Kilt.Did.Web3Names.queryDidForWeb3Name('john_doe');
      setDid(did || 'unknown'); 
      console.log(did);
    };
    resolveWeb3Name();
  },[]);
 
  return (
    <>
      
      <div className="flex justify-center flex-col  items-center h-auto">
        <div className="w-2/3 p-4 text-center mt-[3rem] flex justify-center items-center flex-col rounded-lg sm:p-8 ">
          <img src={illustration} className=" illustration" alt="Ilustration"/>
          <h5 className="mb-2 text-4xl font-bold text-gray-900 heading dark:text-white">
          Welcome TO THE LARGEST GLOBAL WEB3 REAL ESTATE INVESTOR COMMUNITY 
          </h5>
          <p className="home-para text-base text-gray-800 sm:text-lg mt-3 dark:text-gray-400">
          Buy, sell and trade real world rental real estate through NFTs in a trustless fully dentralized way.
          </p>
        <button type="button" class="py-2.5  px-10 mr-2 mb-2 text-sm font-medium text-black border border-black rounded"> <Link to="/market-place">Explore</Link> </button>

        </div>
        

        <div className="grid grid-cols-3 w-2/3 gap-4 mb-20 ">
          <AssetCard item={data[0]} isHome={true} company={"https://xcavate.io/assets/chase-new-homes-logo.png"} />
          <AssetCard item={data[2]} isHome={true} company={"https://xcavate.io/assets/USA_Developments_logo.png"} />
          <AssetCard item={data[3]}  isHome={true} company={"https://xcavate.io/assets/chase-new-homes-logo.png"} />
        </div>
      </div>
    </>
  );
};

export default Home;
