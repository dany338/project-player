import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';
/* Components */
import Buffer from '../Buffer';

const Content = props => {
  return (
    <Container>
      <Buffer id="buffer-box" />
    </Container>
  )
}

Content.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Content.defaultProps = {
  props: {},
};


export default Content
