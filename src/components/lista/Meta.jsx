import React from 'react';
import styles from './meta.module.css';

function Meta({ icono, eventos, periodo, detalles, completado, meta }) {
  return (
    <div className={styles.meta + ' tarjeta'}>
      <div className="flex items-center">
        <div className={styles.icono}>{icono}</div>
        <p className="text-xl ml-5 mr-10">
          {eventos}
          <sub className="text-xs text-gray-500 ml-1">/ {periodo}</sub>
        </p>
        <p>{detalles}</p>
      </div>
      <div className="flex">
        <div className="relative m-2 mx-5">
          <p className="text-center">
            {completado} de {meta}
          </p>
          <div className={styles.barra1}>
            <div
              style={{
                width: `${Math.round((completado / meta) * 100)}%`,
              }}
              className={styles.barra2}
            ></div>
          </div>
        </div>
        <button className="boton boton--gris">Completado</button>
      </div>
    </div>
  );
}

export default Meta;
