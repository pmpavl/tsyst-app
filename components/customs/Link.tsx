import React from 'react';
import NextLink from 'next/link';

export type LinkProps = React.PropsWithChildren<{
  href?: string
}>;

export default function Link({ href, children }: LinkProps): JSX.Element {
  if (href === undefined) {
    return (
      <>
        {children}
      </>
    );
  }

  return (
    <NextLink
      href={href}
      target={href.includes('http') ? '_blank' : '_self'}
      rel='noopener noreferrer'
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      {children}
    </NextLink>
  );
}
