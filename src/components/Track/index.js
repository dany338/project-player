import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Track = props => {
  return (
    <Container>
      ...
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
