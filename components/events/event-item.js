
import Link from 'next/link';

import classes from './event-item.module.css'
import Button from '../ui/button';
import ArrowRightIcon from '../icons/arrow-right-icon';

const EventItem = (props) => {

    const {id, title, image, location, date} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(',', '\n');

    const exploreLink = `/events/${id}`

    return (
        <li key={id} className={classes.item}>
        <img src={'/'+image} alt={id}></img>
        <div className={classes.content}>
          <div className={classes.summary}>
            <h1>{title}</h1>
          </div>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>
        Explore Event
            </span>
            <span className={classes.icon}>
                <ArrowRightIcon/>
            </span>
          </Button>
        </div>
      </li>
    )
}

export default EventItem;