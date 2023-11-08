import React from 'react';
import Meta from './Meta';

const listaMock = [
  {
    id: '1',
    detalles: 'Correr por 30 minutos',
    periodo: 'dia',
    eventos: 1,
    icono: '🏃‍♂️',
    meta: 365,
    plazo: '2030 - 01 - 01',
    completado: 100,
  },

  {
    id: '2',
    detalles: 'Leer libros',
    periodo: 'dia',
    eventos: 1,
    icono: '📚',
    meta: 365,
    plazo: '2030 - 01 - 01',
    completado: 300,
  },

  {
    id: '3',
    detalles: 'Viajar',
    periodo: 'dia',
    eventos: 1,
    icono: '✈️',
    meta: 365,
    plazo: '2030 - 01 - 01',
    completado: 200,
  },
];

function Lista() {
  return (
    <div>
      {listaMock.map((meta) => {
        return <Meta key={meta.id} {...meta} />;
      })}
    </div>
  );
}

export default Lista;
