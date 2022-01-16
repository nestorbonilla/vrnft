

import events from "./data.json"

export const getAllEvents = () => {
  return {
    data: events,
    eventMap: events.reduce((a, c, i) => {
      a[c.id] = c
      a[c.id].index = i
      return a
    }, {})
  }
}
