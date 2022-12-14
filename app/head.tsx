import React from 'react';

export default function Head(): JSX.Element {
  return (
    <>
      <meta name="viewport" lang="ru" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest"></link>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Тестирующая система</title>
    </>
  );
}
