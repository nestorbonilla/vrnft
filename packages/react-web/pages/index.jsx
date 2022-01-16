import { EventList, EventCard } from "@components/ui/event";
import { BaseLayout } from "@components/ui/layout";
import { getAllEvents } from "@content/events/fetcher";
import { useWalletInfo } from "@components/hooks/web3";
import { Button } from "@components/ui/common";
import { OrderModal } from "@components/ui/order";
import { useState } from "react";
import { MarketHeader } from "@components/ui/marketplace";

export default function Home({events}) {

  const [selectedEvent, setSelectedEvent] = useState(null);
  const { canPurchaseEvent } = useWalletInfo();

  return (
    <>
      <div className="py-4">
        <MarketHeader />
      </div>
      <EventList
        events={events}
      >
      {event =>
        <EventCard
          key={event.id}
          event={event}
          disabled={!canPurchaseEvent}
          Footer={() => 
            <div className="mt-4 flex flex-col">
              <Button
                className="mb-3"
                onClick={() => setSelectedEvent(event)}
                disabled={!canPurchaseEvent}
                variant="green"
              >
                Buy
              </Button>
              <Button
                onClick={() => setSelectedEvent(event)}
                disabled={!canPurchaseEvent}
                variant="gold"
              >
                Read more
              </Button>
            </div>
          }
        />
      }
      </EventList>
      { selectedEvent &&
        <OrderModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      }
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllEvents()
  return {
    props: {
      events: data
    }
  }
}

Home.Layout = BaseLayout