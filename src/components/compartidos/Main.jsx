import React from 'react';
import './styles/main.css';
import Vinculo from './Vinculo';
import { ReactComponent as ListaSVG } from '../../img/lista.svg';
import { ReactComponent as NuevaSVG } from '../../img/nueva.svg';

function Main({ children }) {
  return (
    <div className="principal">
      <aside className="aside">
        <Vinculo
          href="/lista"
          texto="Lista de Metas"
          Icono={ListaSVG}
        ></Vinculo>
        <Vinculo href="/crear" texto="Nueva Meta" Icono={NuevaSVG} />
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}

export default Main;
