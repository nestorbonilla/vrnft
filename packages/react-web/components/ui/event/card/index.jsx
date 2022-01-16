import Image from "next/image"
import Link from "next/link"

export default function Card({event, disabled, Footer}) {
  return (

    <div
      className="bg-white shadow-sm hover:shadow-md overflow-hidden md:max-w-2xl">
      <div className="h-full">
        <div className="">
          <Image
            className={`object-cover ${disabled && "filter grayscale"}`}
            src={event.coverImage}
            layout="responsive"
            width="200"
            height="100"
            alt={event.title}
          />
        </div>
        <div className="p-4">
          <Link href={`/events/${event.slug}`}>
            <a
              className=" block mt-1 mb-2 text-lg text-polygonBlack-default font-garamond font-bold hover:underline">
              {event.title}
            </a>
          </Link>
          <div
            className="tracking-wide text-sm text-polygonPurple-default font-semibold font-jost">
            {event.date}
          </div>
          <div
            className="mt-2 text-gray-500 font-jost">
            {event.location}
          </div>
          <div
            className="mt-2 text-gray-500 font-jost">
            {event.organization}
          </div>
          { Footer &&
            <Footer />
          }
        </div>
      </div>
    </div>
  )
}