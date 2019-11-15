import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Buffer = props => {
  return (
    <Container>
      ...
    </Container>
  )
}

Buffer.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Buffer.defaultProps = {
  props: {},
};

export default Buffer
