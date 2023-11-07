import React from 'react';

function Main({ children }) {
  return (
    <>
      <sidenav>
        <a href="/lista">Lista</a>
        <a href="/crear">Crear</a>
      </sidenav>
      <main>{children}</main>
    </>
  );
}

export default Main;
