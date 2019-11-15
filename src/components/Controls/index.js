import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Controls = props => {
  return (
    <Container>
      ...
    </Container>
  )
}

Controls.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Controls.defaultProps = {
  props: {},
};

export default Controls
