'use client'

import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const featuredEvents = getFeaturedEvents();

  const findEventsHandler = (year, month) => {
      const fullPath = `/events/${year}/${month}`
      router.push(fullPath)
  }
  
  return (
    <Fragment>
      <Button link="/events"><span>All Events</span></Button>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={featuredEvents}/>
   </Fragment>
  )
}
