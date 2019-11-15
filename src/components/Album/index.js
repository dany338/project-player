import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';

const Album = props => {
  return (
    <Container>
      ...
    </Container>
  )
}

Album.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Album.defaultProps = {
  props: {},
};


export default Album
