import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Buffering = ({ buffer }) => {
  return (
    <Container>
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

export default Buffer
