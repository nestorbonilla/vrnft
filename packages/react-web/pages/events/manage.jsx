import { Button } from "@components/ui/common";
import { EventFilter, OwnedEventCard } from "@components/ui/event";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";

export default function ManageEvents() {
  return (
    <>
      <div className="py-4">
        <MarketHeader />
        <EventFilter />
      </div>
      <section className="grid grid-cols-1">
        <OwnedEventCard>
          <div className="flex mr-2 relative rounded-md">
            <input
              type="text"
              name="account"
              id="account"
              className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
              placeholder="0x2341ab..." />
            <Button>
              Verify
            </Button>
          </div>
        </OwnedEventCard>
      </section>
    </>
  )
}
ManageEvents.Layout = BaseLayout