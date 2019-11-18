import React, { useState } from 'react'
import PropTypes from 'prop-types'
/* Hooks */
import { useCover } from '../../hooks';
/* Style Components */
import { Container } from './styled';
/* Components */
import Track from '../Track';
import Album from '../Album';
import Controls from '../Controls';

const Player = ({ buffer }) => {
  const { isPlay } = useCover();

  return (
    <Container>
      <div id="player-track" className={`${isPlay ? 'active' : ''}`}>
        <Track />
      </div>
      <div id="player-content">
        <Album buffer={buffer} />
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
