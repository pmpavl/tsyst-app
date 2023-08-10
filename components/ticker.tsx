/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import * as React from 'react';

import {
  getHoursFromMilliseconds,
  getMinutesFromMilliseconds,
  getSecondsFromMilliseconds,
} from '@/lib/utils';

type TickerProps = {
  hours: number
  minutes: number
  seconds: number
};

function getTickerProps(end: Date): TickerProps {
  const diff = end.getTime() - new Date().getTime();

  return {
    hours: diff > 0 ? getHoursFromMilliseconds(diff) : 0,
    minutes: diff > 0 ? getMinutesFromMilliseconds(diff) : 0,
    seconds: diff > 0 ? getSecondsFromMilliseconds(diff) : 0,
  } as TickerProps;
}

function Ticker({ end }: { end: Date }): JSX.Element {
  const [tickerProps, setTickerProps] = React.useState<TickerProps>(getTickerProps(end));

  React.useEffect(() => {
    const timer = setTimeout(() => setTickerProps(getTickerProps(end)), 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='my-auto flex gap-2'>
      {tickerProps.hours === 0 ? <></>
        : (
          <div>
            <span className='countdown font-mono text-base'>
              {/* @ts-ignore */}
              <span style={{ '--value': tickerProps.hours }} />
            </span>
            ч.
          </div>
        )}
      {tickerProps.hours === 0 && tickerProps.minutes === 0 ? <></>
        : (
          <div>
            <span className='countdown font-mono text-base'>
              {/* @ts-ignore */}
              <span style={{ '--value': tickerProps.minutes }} />
            </span>
            м.
          </div>
        )}
      <div>
        <span className='countdown font-mono text-base'>
          {/* @ts-ignore */}
          <span style={{ '--value': tickerProps.seconds }} />
        </span>
        с.
      </div>
    </div >
  );
}

export { Ticker };
