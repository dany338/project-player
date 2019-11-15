import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';
/* Components */
import Buffer from '../Buffer';

const Album = ({ buffer }) => {
  return (
    <Container>
      <Buffer id="buffer-box" buffer={buffer} />
    </Container>
  )
}

Album.propTypes = {
  buffer: PropTypes.string,
}

Album.defaultProps = {
  buffer: 'Loading...',
};


export default Album
