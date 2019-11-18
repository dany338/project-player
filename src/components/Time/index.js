import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
/* Hooks */
import { useCover } from '../../hooks';
/* Style Components */
import { Container } from './styled';

const Time = props => {
  const [tProgress, setTProgress] = useState('00:00');
  const [tTime, setTTime] = useState('00:00');
  const { isPlay, audio } = useCover();

  useEffect(() => {
    console.log("useEffect Time 1", tProgress, tTime);

    let curMinutes = Math.floor(audio.currentTime / 60);
    let curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
    if(curMinutes < 10)
			curMinutes = '0' + curMinutes;
		if(curSeconds < 10)
      curSeconds = '0' + curSeconds;

    setTProgress(curMinutes + ':' + curSeconds);

    let durMinutes = Math.floor(audio.duration / 60);
    let durSeconds = Math.floor(audio.duration - durMinutes * 60);

    if(durMinutes < 10)
			durMinutes = '0' + durMinutes;
		if(durSeconds < 10)
			durSeconds = '0' + durSeconds;

    setTTime(durMinutes + ':' + durSeconds);
  }, [tProgress, tTime]);

  return (
    <Container>
      <div id="current-time" className={`${isPlay ? 'active' : ''}`}>{tProgress}</div>
      <div id="track-length" className={`${isPlay ? 'active' : ''}`}>{tTime}</div>
    </Container>
  )
}

Time.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Time.defaultProps = {
  props: {},
};

export default Time
