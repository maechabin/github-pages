import * as React from 'react';

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
      fontSize: '80px',
      color: '#fff',
    },
  };
  return (
    <main>
      <div style={style.hero}>
        <h1 style={style.title}>maechabin.com</h1>
      </div>
    </main>
  );
}
