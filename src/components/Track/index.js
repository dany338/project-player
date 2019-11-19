import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
/* Hooks */
import { useCover } from '../../hooks';
/* Style Components */
import { Container } from './styled';
/* Components */
import Area from '../Area';
import Time from '../Time';

let audio = new Audio();

const Track = props => {
  const [nameText, setNameText] = useState('');
  const [autorText, setAutorText] = useState('');
  const [playProgress, setPlayProgress] = useState(0);
  const [tProgress, setTProgress] = useState('00:00');
  const [tTime, setTTime] = useState('00:00');
  const { isPlay, trackSelected } = useCover();

  const updateValues = useCallback(() => {
    if(Object.keys(trackSelected).length !== 0) {
      const { name, autor } = trackSelected;
      setNameText(name);
      setAutorText(autor);
    }
  }, [trackSelected]);

  const initAudio = useCallback(() => {
    const { track } = trackSelected;
    audio.loop = false;
    audio.src = track;
    if(isPlay) audio.play();
    else if(!isPlay) audio.pause();
  }, [isPlay, trackSelected]);

  useEffect(() => {
    console.log("useEffect Track 1", isPlay);
    if(isPlay) {
      updateValues();
    }
  }, [isPlay, updateValues]);

  useEffect(() => {
    console.log("useEffect Track 2");
    initAudio();
  }, [initAudio]);

  useEffect(() => {
    console.log("useEffect Track 3", playProgress);
    setPlayProgress(((audio.currentTime / audio.duration) * 100));
  }, [playProgress]);

  useEffect(() => {
    console.log("useEffect Track 4", tProgress, tTime);

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
      <div id="album-name">{nameText}</div>
      <div id="track-name">{autorText}</div>
      <Time tProgress={tProgress} tTime={tTime} />
      <Area playProgress={playProgress} />
    </Container>
  )
}

Track.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Track.defaultProps = {
  props: {},
};

export default Track
