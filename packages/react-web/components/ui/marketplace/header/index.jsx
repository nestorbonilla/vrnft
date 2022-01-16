import { Breadcrumbs } from "@components/ui/common";
import { WalletBar } from "@components/ui/web3";

const LINKS = [{
  href: "/",
  value: "Buy"
}, {
  href: "/events/owned",
  value: "My Events"
}, {
  href: "/events/manage",
  value: "Manage Events"
}]

export default function Header() {
  return (
    <>
      <WalletBar />
      {/* <div className="flex flex-row-reverse p-4 px-4 sm:px-6 lg:px-4">
        <Breadcrumbs items={LINKS} />
      </div> */}
    </>
  )
}