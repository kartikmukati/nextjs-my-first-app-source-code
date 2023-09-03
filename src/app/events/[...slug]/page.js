'use client'

import { useParams } from "next/navigation";
import { getFilteredEvents } from "../../../../dummy-data";
import EventList from "../../../../components/events/event-list";

const FilteredEvent = () => {

    const router = useParams();

    const filteredData = router.slug;
    const year = +filteredData[0];
    const month = +filteredData[1];

    const event = getFilteredEvents({
        year: year,
        month: month
    })


    return (
      
            <EventList items={event} />
      
    )
}

export default FilteredEvent;