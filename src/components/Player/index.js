import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Player = props => {
  return (
    <Container>
      ...
    </Container>
  )
}

Player.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Player.defaultProps = {
  props: {},
};

export default Player
