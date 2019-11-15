import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';
/* Components */
import Track from '../Track';
import Album from '../Album';
import Controls from '../Controls';

const Player = ({ buffer }) => {
  return (
    <Container>
      <div className="player-track">
        <Track />
      </div>
      <div className="player-content">
        <Album buffer={buffer}/>
        <Controls />
      </div>
    </Container>
  )
}

Player.propTypes = {
  buffer: PropTypes.string,
}

Player.defaultProps = {
  buffer: 'Loading...',
};

export default Player
