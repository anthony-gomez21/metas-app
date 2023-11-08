import React from 'react';
import styles from './styles/header.module.css';
import { ReactComponent as LogoSVG } from '../../img//logo.svg';
import { ReactComponent as PerfilSVG } from '../../img/perfil.svg';
import Vinculo from './Vinculo';

const Header = () => {
  return (
    <header className={styles.encabezado}>
      <div className={styles.contenedor}>
        <LogoSVG className={styles.logo} />
        <a className={styles.titulo} href="/">
          Metas App
        </a>
      </div>

      <nav className="flex">
        <Vinculo href="/perfil" Icono={PerfilSVG} />
      </nav>
    </header>
  );
};

export default Header;
