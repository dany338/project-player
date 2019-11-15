import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Area = props => {
  return (
    <Container>
      ...
    </Container>
  )
}

Area.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Area.defaultProps = {
  props: {},
};

export default Area
