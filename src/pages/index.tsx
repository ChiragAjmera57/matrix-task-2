import Image from "next/image";
import navLogo from '../../public/navLogo.png'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="HeroSection">
        <div className="NavBar">
          <div className="navLogo">
            <div className="Logo">
              <Image alt="BITVERSE" src={navLogo} width="56" height="56" />
            </div>
            {/* <div className="LogoName"> */}
            <div className={" LogoFirst zcool-kuaile-regular"}>Saviour</div>

            {/* </div> */}
          </div>

          <div className="navbarText">
            <ul>
              <li className={"navbarText-about zcool-kuaile-regular"}>Home</li>
              <li className="navbarText-ido zcool-kuaile-regular">IDO</li>
              <li className="navbarText-token zcool-kuaile-regular">
                Tokenomics
              </li>
              <li className="navbarText-roadmap zcool-kuaile-regular">
                Roadmap
              </li>
              <li className="navbarText-comingsoon zcool-kuaile-regular">
                Coming Soon
              </li>
            </ul>
          </div>
          <button className="cntwlt">Connect Wallet</button>
        </div>
        <div className=" HomeText ">
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </div>
      </div>

      <div className="introductionPage">
        <div className=" intro-text">
          <div className="text-5xl heading">Introduction</div>
          <div className="paragraph">
            We`ve all been in the mud once, and now we`ve decided to fight it
            out. Pay tribute to those pioneers of WEB3 and the warriors who
            dedicated their love to the blockchain. Save the lucky ones alive,
            join us to save the future! Our mission is to empower everyone to
            share wealth and succeed. read more...
          </div>
          <button className="cntwlt"> Documents </button>
        </div>
        <div className="intro-image">
          <Image
            className="intro-img"
            src="/introductionPage.png"
            width="120"
            height="120"
            alt={""}
          />
        </div>
      </div>

      <div className="ido">
        <div className="heading">Participate in our IDO Event!</div>
        <div className="idoInfo">
          <div className="idoInfo-1"></div>
          <div className="idoInfo-2"></div>
        </div>
      </div>
      <div className="bg-cover card-1">
        
      </div>
      <div className="bg-cover fotor">
        
      </div>
    </main>
  );
}
