import React from 'react'
import PropTypes from 'prop-types'
/* Hooks */
import { useCover } from '../../hooks';
/* Style Components */
import { Container } from './styled';
/* Components */
import Buffer from '../Buffer';

const Album = ({ buffer }) => {
  const { isPlay, trackSelected } = useCover();
  return (
    <Container className={`${isPlay ? 'active' : ''}`}>
      {(Object.keys(trackSelected).length !== 0) && (
        <img src={trackSelected.image} id={trackSelected.id} className={`${isPlay ? 'active' : ''}`} alt="Album" />
      )}
      <Buffer id="buffer-box" buffer={buffer} />
    </Container>
  )
}

Album.propTypes = {
  buffer: PropTypes.string,
}

Album.defaultProps = {
  buffer: 'Loading...',
};


export default Album
