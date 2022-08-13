import dayjs from "dayjs";
import RelativeTime from 'dayjs/plugin/relativeTime.js';
import IsBetween from 'dayjs/plugin/isBetween.js';
import Utc from 'dayjs/plugin/utc.js';
import TimeZone from 'dayjs/plugin/timezone.js';

dayjs.extend(RelativeTime);
dayjs.extend(IsBetween);
dayjs.extend(Utc);
dayjs.extend(TimeZone);

const d1 = dayjs();
console.log(d1);
console.log(d1.year(), d1.month(), d1.date(), d1.hour(), d1.minute());

const d2 = dayjs('1986-11-25');
console.log(d2);
console.log(d2.year(), d2.month(), d2.date());

console.log(d2.format('DD, MMMM YY'));

console.log(`I was born ${d2.fromNow()}`);


const bp1 = dayjs('2022-08-10');
console.log(bp1);
console.log(`this blog post was written ${bp1.fromNow()}`);

console.log(d1.diff(d2, 'year'));
console.log(d1.diff(d2, 'month'));
console.log(d1.diff(d2, 'week'));

const twoWeeksFromNow = d1.add(2, 'w');
console.log(twoWeeksFromNow);

const oneMonthPast = d1.subtract(1, 'M');
console.log(oneMonthPast);

console.log(d1.isBefore(d2));

const policyStartPeriod = dayjs('2022-01-05');
const policyEndPeriod = dayjs('2022-08-12');

console.log(d1.isBetween(policyStartPeriod, policyEndPeriod));

const d10 = dayjs('2022-08-12');
console.log(d10.isBetween(policyStartPeriod, policyEndPeriod, null, '[]'));

console.log(twoWeeksFromNow.isBetween(policyStartPeriod, policyEndPeriod, null, '[]'));

console.log(d1.tz('America/New_York'));