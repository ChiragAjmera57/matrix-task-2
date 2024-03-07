import Image from "next/image";
import Logo from "../app/asset/logo.png";
import introLogo from "../app/asset/introductionPage.png";
import card1 from "../app/asset/card1.png";
import card2 from "../app/asset/card2.png";
import card3 from "../app/asset/card3.png";
import card4 from "../app/asset/card4.png";
import faq from '../app/asset/faq.png';
import ConnectButton from "./config/WalletButton";
export default function Home() {
  return (
    <div className="body">
      <div className="hero bg-cover bg-center  bg-no-repeat flex flex-col flex-wrap">
        <div className="nav flex flex-row justify-evenly align-middle items-center pt-3 flex-wrap">
          <div className="flex flex-row flex-wrap">
            <Image className="" alt="dfvd" src={Logo} width={80} />
            <p className="mt-5 font-ZCOOL font-normal text-lg text-white">
              Saviour
            </p>
          </div>
          <div className="font-ZCOOL flex-wrap flex flex-row w-1/3 justify-between items-center bg-gray-800 text-white p-2 px-3 rounded-2xl">
            <p>Home</p>
            <p>IDO</p>
            <p>Tokenomics</p>
            <p>Roadmap</p>
            <p>Coming Soon</p>
          </div>
          <div>
            
            <button className="outline-none border-nonerounded-full text-white text-xs font-semibold">
            <ConnectButton />
            </button>
          </div>
        </div>
        <div className="title mt-48 font-normal w-1/2  self-center">
          <p className=" text-5xl text-center text-white font-Lobster">
            Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap p-2 self-center align-middle justify-center  bg-black text-white ">
        <div className="w-1/2 self-center align-middle justify-center">
          <p className="text-4xl text-red-500 font-semibold font-Shojumaru">
            Introduction
          </p>
          <div className="text-lg w-1/2 mt-3">
            We`ve all been in the mud once, and now we`ve decided to fight it
            out. Pay tribute to those pioneers of WEB3 and the warriors who
            dedicated their love to the blockchain. Save the lucky ones alive,
            join us to save the future! Our mission is to empower everyone to
            share wealth and succeed.{" "}
            <span className="text-green-50">read more...</span>
          </div>
          <button className="outline-none border-none p-3 mt-6 bg-red-500 rounded-full text-white text-xs font-semibold">
            <p className="mx-3">Documtents</p>
          </button>
        </div>
        <div>
          <Image src={introLogo} alt="" />
        </div>
      </div>
      <div className="roadmap  bg-no-repeat flex-wrap  bg-cover flex flex-col  ">
        <div>
          <p className="text-4xl text-red-500 font-semibold font-Shojumaru text-center pt-9">
            Road Map
          </p>
        </div>
        <div className="flex gap-40 justify-center mt-32 flex-wrap">
          <div className="card1 text-white p-5 flex flex-wrap ">
            <div>
              <div className="font-bold">Phase 1</div>
              <div className="text-gray-500">
                Technical Readiness and Smart Contract Audit
              </div>
            </div>
            <div className="mt-auto"></div>
          </div>

          <div className="card2 text-white p-5 flex flex-wrap">
            {" "}
            <div>
              <div className="font-bold">Phase 2</div>
              <div className="text-gray-500">
                Technical Readiness and Smart Contract Audit
              </div>
            </div>
          </div>
          <div className="card3 text-white p-5 flex flex-wrap">
            {" "}
            <div>
              <div className="font-bold">Phase 3</div>
              <div className="text-gray-500">
                Technical Readiness and Smart Contract Audit
              </div>
            </div>
          </div>
          <div className="card4 text-white p-5 flex flex-wrap">
            {" "}
            <div>
              <div className="font-bold">Phase 4</div>
              <div className="text-gray-500">
                Technical Readiness and Smart Contract Audit
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="faq bg-black flex justify-around flex-wrap">

        <div className="mr-8">
          <Image src={faq} alt="" />
        </div>

        <div className="text-white pr-32 mt-20 w-1/2 flex flex-wrap flex-col " style={{alignItems:'center'}}>
            <div className="text-4xl text-red-500 font-semibold font-Shojumaru text-center ">FAQ</div>
            <div className="flex flex-wrap border-2 p-2  border-red-500 rounded-lg  mb-3  text-center mt-7">
              <div className="mx-6">1</div>
              <p className="mx-8">Why choose `Savior`?</p>
            </div>
            <div className="flex flex-wrap border-2 p-2  border-red-500 rounded-lg  mb-3  text-center">
              <div className="mx-6">2</div>
              <p className="mx-8">Why is the IDO duration so long?</p>
            </div>
            <div className="flex flex-wrap border-2 p-2  border-red-500 rounded-lg  mb-3  text-center">
              <div className="mx-6">3</div>
              <p className="mx-8">When will trading go live?</p>
            </div>
            <div className="flex flex-wrap border-2 p-2  border-red-500 rounded-lg    text-center">
              <div className="mx-6">4</div>
              <p className="mx-8">When can we claim the tokens?</p>
            </div>
        </div>
            <div>

            </div>
      </div>
      <div className="bg-cover fotor w-full bg-black">

      </div>
    </div>
  );
}
