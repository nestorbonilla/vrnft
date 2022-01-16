import { Message, Button } from "@components/ui/common";
import { OwnedEventCard } from "@components/ui/event";
import { BaseLayout } from "@components/ui/layout";
import { MarketHeader } from "@components/ui/marketplace";

export default function OwnedEvents() {
    return (
        <>
            <div className="py-4">
                <MarketHeader/>
            </div>
            <section className="grid grid-cols-1">
                <OwnedEventCard>
                <Message>
                    My custom message!
                </Message>
                <Button>
                    Watch the course
                </Button>
            </OwnedEventCard>
      </section>
        </>
    )
}

OwnedEvents.Layout = BaseLayout;