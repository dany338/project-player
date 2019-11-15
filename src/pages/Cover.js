import React from 'react'
/* Style Components */
import { Container } from './styled';
/* Components */
import Player from '../components/Player';

const Cover = () => {
  return (
    <Container>
      <div className="bg-artwork"></div>
      <div className="bg-layer"></div>
      <Player buffer={'Buffering ...'} />
    </Container>
  )
}

export default Cover
