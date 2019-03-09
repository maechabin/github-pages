import * as React from 'react';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Main(): JSX.Element {
  const style = {
    hero: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#00838F',
      display: 'flex' /* 要素をflexboxに対応させる */,
      alignItems: 'center' /* 縦方向の中央揃え */,
      justifyContent: 'center' /* 横方向の中央揃え */,
      flexDirection: 'column',
    } as React.CSSProperties,
    title: {
      margin: 0,
      fontSize: '80px',
      color: '#fff',
    } as React.CSSProperties,
    paragraph: {
      margin: '48px auto',
      fontSize: '20px',
      color: '#fff',
    } as React.CSSProperties,
    icon: {
      margin: '0 40px',
    },
  };
  return (
    <main>
      <div style={style.hero}>
        <h1 style={style.title}>maechabin</h1>

        <p style={style.paragraph}>
          Welcome! I'm a web front end engineer.
          <br />I like TypeScript, React, and Angular...
        </p>

        <div>
          <a href="https://mae.chab.in" target="_blank" css={css(style.icon)}>
            <FontAwesomeIcon icon={['fab', 'wordpress']} color="#fff" size="4x" />
          </a>
          <a href="https://github.com/maechabin" target="_blank" css={css(style.icon)}>
            <FontAwesomeIcon icon={['fab', 'github']} color="#fff" size="4x" />
          </a>
          <a href="https://twitter.com/maechabin" target="_blank" css={css(style.icon)}>
            <FontAwesomeIcon icon={['fab', 'twitter']} color="#fff" size="4x" />
          </a>
        </div>
      </div>
    </main>
  );
}
