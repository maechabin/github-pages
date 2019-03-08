import * as React from 'react';
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
      fontSize: '64px',
      margin: '0 40px',
    } as React.CSSProperties,
  };
  return (
    <main>
      <div style={style.hero}>
        <h1 style={style.title}>maechabin</h1>

        <p style={style.paragraph}>
          Welcom! I'm a web front end engineer.
          <br />I like TypeScript, React, and Angular...
        </p>

        <div>
          <a href="https://mae.chab.in" target="_blank" style={style.icon}>
            <FontAwesomeIcon icon={['fab', 'wordpress']} color="#fff" />
          </a>
          <a href="https://github.com/maechabin" target="_blank" style={style.icon}>
            <FontAwesomeIcon icon={['fab', 'github']} color="#fff" />
          </a>
          <a href="https://twitter.com/maechabin" target="_blank" style={style.icon}>
            <FontAwesomeIcon icon={['fab', 'twitter']} color="#fff" />
          </a>
        </div>
      </div>
    </main>
  );
}
