import React from 'react';
import styles from './detalles.module.css';

function Detalles() {
  const opcionesDeFrecuencia = ['dia', 'semana', 'mes', 'año'];

  const iconos = ['✈️', '🏃', '🖥️', '📚', '💲'];

  return (
    <div className="tarjeta">
      <form action="" className="p-4">
        <label className="label" htmlFor="">
          Descibe tu meta
          <input
            className="input"
            placeholder="ej. Correr 30 minutos diarios"
          />
        </label>
        <label className="label" htmlFor="">
          ¿Con que frecuencia deaseas cumplir tu meta?{' '}
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input className="input mr-6" type="number" />
            <select name="" id="" className="input">
              {opcionesDeFrecuencia.map((opcion) => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
        <label className="label" htmlFor="">
          ¿Cuantas veces deaseas completar esta meta?
          <input className="input" type="number" />
        </label>
        <label className="label" htmlFor="">
          ¿Tienes una fecha limite?
          <input className="input" type="date" />
        </label>
        <label className="label" htmlFor="">
          ¿Cuantas veces haz completado ya esta meta?
          <input className="input" type="number" />
        </label>
        <label className="label" htmlFor="">
          Escoge el icono para la meta
          <select name="" id="" className="input">
            {iconos.map((icono) => (
              <option value={icono}>{icono}</option>
            ))}
          </select>
        </label>
      </form>
      <div className={styles.botones}>
        <button className="boton boton--negro">Crear</button>
        <button className="boton boton--gris">Cancelar</button>
      </div>
    </div>
  );
}

export default Detalles;
