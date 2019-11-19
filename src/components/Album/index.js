import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
/* Hooks */
import { useCover } from '../../hooks';
/* Style Components */
import { Container } from './styled';
/* Components */
import Buffering from '../Buffering';

const Album = ({ buffer }) => {
  const { isPlay, trackSelected } = useCover();

  useEffect(() => {
    console.log("useEffect Album 1", isPlay, trackSelected);
  }, [isPlay, trackSelected]);

  return (
    <Container className={`${isPlay ? 'active' : ''}`}>
      {(Object.keys(trackSelected).length !== 0) ? (
        <img src={trackSelected.image} id={trackSelected.id} className={`${isPlay ? 'play active' : 'active'}`} alt="Album" />
      ) : (
        <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Amanecer_album_cover.jpg/220px-Amanecer_album_cover.jpg'} id="1" className="{'active'}" alt="Album" />
      )}
      <Buffering buffer={buffer} />
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
