import React from 'react';
import styles from './styles/vinculo.module.css';

function Vinculo({ Icono, texto, href }) {
  return (
    <a href={href} className={styles.vinculo}>
      <Icono className={styles.icono} />
      {texto && <span className={styles.texto}>{texto}</span>}
    </a>
  );
}

export default Vinculo;
