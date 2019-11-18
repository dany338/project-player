import React, { useState } from 'react'
import PropTypes from 'prop-types'
/* Hooks */
import { useCover } from '../../hooks';
/* Style Components */
import { Container } from './styled';
/* Components */
import Area from '../Area';
import Time from '../Time';

const Track = props => {
  const [nameText, setNameText] = useState('');
  const [autorText, setAutorText] = useState('');
  const { trackSelected } = useCover();
  if(Object.keys(trackSelected).length !== 0) {
    const { name, autor } = trackSelected;
    setNameText(name);
    setAutorText(autor);
  }

  return (
    <Container>
      <div id="album-name">{nameText}</div>
      <div id="track-name">{autorText}</div>
      <Time />
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
