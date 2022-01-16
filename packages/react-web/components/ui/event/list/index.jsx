export default function List({events, children}) {
    return (
      <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 mb-5">
        { events.map(event => children(event))}
      </section>
    )
  }