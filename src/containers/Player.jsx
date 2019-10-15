import React, { useEffect } from 'react';
// conectar componente con Redux
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';

const Player = (props) => {

  const { id } = props.match.params;
  // se utiliza Object.key para obtener los valores de un objeto, ya que estamos regresando un objeto y no un array
  const hasPlaying = Object.keys(props.playing).length > 0;

  // transmitir un efecto para mandar a la accion
  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  // Validacion de que si existe ese video se reproduce, de lo contrario se redirecciona al 404
  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

// creamos la funcion que se va a encargar de obtner la informacion del estado inicial (State)
const mapStateToProps = (state) => {
  return {
    // obtener playing del estado inicial
    playing: state.playing,
  };
};

// crear la acion de busqueda del source
const mapDispatchToProps = {
  getVideoSource,
};

// creamos la conexion con redux
export default connect(mapStateToProps, mapDispatchToProps)(Player);
