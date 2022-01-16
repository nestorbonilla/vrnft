import { useWeb3 } from "@components/providers";
import { ActiveLink, Button } from "@components/ui/common";
import { useAccount } from "@components/hooks/web3";
import { useRouter } from "next/router";

export default function Navbar() {
  const { connect, isLoading, requireInstall } = useWeb3();
  const { account } = useAccount();

  return (
    <section>
      <div className="relative pt-6">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between items-center">
            <div>
              <ActiveLink href="/" >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  VR NFT
                </a>
              </ActiveLink>
            </div>
            <div>
              { isLoading ?
                  <Button
                    disabled={true}
                    onClick={connect}>
                      Loading...
                  </Button>
                :                  
                  account.data ?
                    <Button
                      hoverable={false}
                      variant="green"
                      onClick={connect}>
                        Logged in {account.isAdmin && "admin"}
                    </Button>
                  :
                  requireInstall ?
                    <Button
                      onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                        Install Metamask
                    </Button>
                  :
                      <Button
                        onClick={connect}>
                          Connect
                      </Button>
              }
              
            </div>
          </div>
        </nav>
      </div>     
    </section>
  )
}