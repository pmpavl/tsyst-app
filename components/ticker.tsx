/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import * as React from 'react';

import {
  getHoursFromMilliseconds,
  getMinutesFromMilliseconds,
  getSecondsFromMilliseconds,
} from '@/lib/utils';

interface TimeProps {
  hours: number
  minutes: number
  seconds: number
}

function TimeRender({ count, type }: { count: number, type: 'ч' | 'м' | 'с' }): JSX.Element {
  return (
    <div>
      <span className='countdown font-mono text-base'>
        {/* @ts-ignore */}
        <span style={{ '--value': count }} />
      </span>
      {`${type}.`}
    </div>
  );
}

function Time({ props }: { props: TimeProps }): JSX.Element {
  return (
    <div className='my-auto flex gap-2'>
      {props.hours === 0 ? <></>
        : <TimeRender count={props.hours} type='ч' />
      }
      {props.hours === 0 && props.minutes === 0 ? <></>
        : <TimeRender count={props.minutes} type='м' />
      }
      <TimeRender count={props.seconds} type='с' />
    </div >
  );
}

function getTimeProps(start: Date, end: Date): TimeProps {
  const diff = end.getTime() - start.getTime();

  return {
    hours: diff > 0 ? getHoursFromMilliseconds(diff) : 0,
    minutes: diff > 0 ? getMinutesFromMilliseconds(diff) : 0,
    seconds: diff > 0 ? getSecondsFromMilliseconds(diff) : 0,
  };
}

function getTimePropsFromNow(end: Date): TimeProps { return getTimeProps(new Date(), end); }

function Ticker({ end }: { end: Date }): JSX.Element {
  const [timeProps, setTimeProps] = React.useState<TimeProps>(getTimePropsFromNow(end));

  React.useEffect(() => {
    const timer = setTimeout(() => setTimeProps(getTimePropsFromNow(end)), 1000);

    return () => clearTimeout(timer);
  });

  return <Time props={timeProps} />;
}

export { Ticker, Time, getTimeProps };
