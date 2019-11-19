import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
/* Hooks */
import { useCover } from '../../hooks';
/* Style Components */
import { Container } from './styled';
/* Const */
import { wait } from '../../config/const';

const Buffering = ({ buffer }) => {
  const [ loaded, setLoaded] = useState(0);
  const { isPlay } = useCover();

  const updateBuffer = useCallback(() => {
    setLoaded(loaded => loaded + 1);
  }, []);

  const updateBuffer2 = useCallback(async () => {
    await wait(3000);
    setLoaded(loaded => loaded + 1);
}, []);

  useEffect(() => {
    console.log("useEffect Buffering 1", isPlay, loaded);
    if(isPlay && loaded === 0 ) {
      updateBuffer();
    } else if(loaded === 1 || loaded === 2 ) {
      updateBuffer2();
    } else if(!isPlay) {
      setLoaded(0);
    }
  }, [isPlay, updateBuffer, updateBuffer2, loaded]);

  return (
    <Container className={`${loaded === 1 ? 'load' : ''}`}>
      {buffer}
    </Container>
  )
}

Buffering.propTypes = {
  props: PropTypes.string,
}

Buffering.defaultProps = {
  props: 'Loading...',
};

export default Buffering
