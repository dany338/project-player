import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';
/* Components */
import Area from '../Area';

const Track = props => {
  return (
    <Container>
      <div className="album-name"></div>
      <div className="track-name"></div>
      <div className="track-time"></div>
      <Area />
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
