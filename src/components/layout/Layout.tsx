import * as React from 'react';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;
  return (
    <>
      <header />
      {children}
      <footer />
    </>
  );
}
