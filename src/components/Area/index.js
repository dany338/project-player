import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
/* Hooks */
import { useCover } from '../../hooks';
/* Style Components */
import { Container } from './styled';

const Area = props => {
  const [loaded, setLoaded] = useState(false);
  const [playProgress, setPlayProgress] = useState(0);

  const { isPlay, trackSelected, audio } = useCover();

  const initAudio = useCallback(() => {
    const { track } = trackSelected;
    audio.loop = false;
    audio.src = track;
    if(isPlay) audio.play();
    else if(!isPlay) audio.pause();
  }, [isPlay, trackSelected]);

  useEffect(() => {
    console.log("useEffect Area 1", loaded);
    initAudio();
    // setLoaded(!loaded);
  }, [loaded, isPlay, initAudio]);

  useEffect(() => {
    console.log("useEffect Area 2", playProgress);
    setPlayProgress(((audio.currentTime / audio.duration) * 100));
  }, [playProgress]);

  return (
    <Container>
      <div id="ins-time" style={{ left: playProgress + 'px', marginLeft: playProgress !== 0 ? '-21px' : '0px', display: playProgress !== 0 ? 'block' : 'none' }}>{'00:00'}</div>
      <div id="s-hover" style={{ width: playProgress + 'px'}}></div>
      <div id="seek-bar" style={{ width: playProgress + '%'}}></div>
    </Container>
  )
}

Area.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Area.defaultProps = {
  props: {},
};

export default Area
