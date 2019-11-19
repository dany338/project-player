import React from 'react'
import PropTypes from 'prop-types'
/* Hooks */
import { useCover } from '../../hooks';
/* Style Components */
import { Container } from './styled';

const Time = ({ tProgress, tTime }) => {
  const { isPlay } = useCover();

  return (
    <Container>
      <div id="current-time" className={`${isPlay ? 'active' : ''}`}>{tProgress}</div>
      <div id="track-length" className={`${isPlay ? 'active' : ''}`}>{tTime}</div>
    </Container>
  )
}

Time.propTypes = {
  tProgress: PropTypes.string,
  tTime: PropTypes.string,
}

Time.defaultProps = {
  tProgress: '00:00',
  tTime: '00:00',
};

export default Time
