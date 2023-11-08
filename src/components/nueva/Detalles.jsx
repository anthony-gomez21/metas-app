import React from 'react';

function Detalles() {
  const opcionesDeFrecuencia = ['dia', 'semana', 'mes', 'año'];

  const iconos = ['✈️', '🏃', '🖥️', '📚', '💲'];

  return (
    <div>
      <form action="">
        <label htmlFor="">
          Descibe tu meta
          <input placeholder="ej. Correr 30 minutos diarios" />
        </label>
        <label htmlFor="">
          ¿Con que frecuencia deaseas cumplir tu meta?{' '}
          <span>(ej. 1 vez a la semana)</span>
          <div>
            <input type="number" />
            <select name="" id="">
              {opcionesDeFrecuencia.map((opcion) => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
        <label htmlFor="">
          ¿Cuantas veces deaseas completar esta meta?
          <input type="number" />
        </label>
        <label htmlFor="">
          ¿Tienes una fecha limite?
          <input type="date" />
        </label>
        <label htmlFor="">
          ¿Cuantas veces haz completado ya esta meta?
          <input type="number" />
        </label>
        <label htmlFor="">
          Escoge el icono para la meta
          <select name="" id="">
            {iconos.map((icono) => (
              <option value={icono}>{icono}</option>
            ))}
          </select>
        </label>
      </form>
      <div>
        <button>Cancelar</button>
        <button>Crear</button>
      </div>
    </div>
  );
}

export default Detalles;
