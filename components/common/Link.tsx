import React from 'react';
import Link from 'next/link';

export type LinkProps = React.PropsWithChildren<{ href?: string }>;

export default function Linkq({ href, children }: LinkProps): JSX.Element {
  if (href === undefined) {
    return <>{children}</>;
  }

  return (
    <Link
      href={href}
      target={href.includes('http') ? '_blank' : '_self'}
      rel='noopener noreferrer'
      style={{ display: 'contents', color: 'inherit', textDecoration: 'none' }}
    >
      {children}
    </Link>
  );
}
