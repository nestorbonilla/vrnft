import { useWalletInfo } from "@components/hooks/web3";
import { useWeb3 } from "@components/providers";

export default function WalletBar() {

  const { requireInstall } = useWeb3();
  const { account, network } = useWalletInfo();
    return (
      <section className="text-white bg-polygonBlack-default rounded-md">
        <div className="p-7 font-jost">
          <h1 className="text-2xl text-white-default">Hello, <span className="text-polygonPurple-default">{account.data}</span></h1>
          <h2 className="subtitle mb-5 text-xl text-white-default">Let's upgrade your NFT with Virtual Reality!</h2>
          <div className="flex justify-between items-center">
            <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                  Learn how it works
                </a>
              </div>
            </div>
            <div >
              { network.hasInitialResponse && !network.isSupported && 
                <div className="bg-celoRed-default p-4 rounded-md">
                  <div>Connected to the wrong network</div>
                  <div>
                    Connect to: {``}
                    <strong className="text-2xl">
                      {network.target}
                    </strong>
                  </div>
                </div>
              }
              {
                requireInstall &&
                <div className="bg-yellow-500 p-4 rounded-lg">
                  Cannot connect to network. Please install Metamask.
                </div>
              }
              { network.data &&
                <div>
                  <span>Currently on </span>
                  <strong className="text-2xl">{network.data}</strong>
              </div>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }