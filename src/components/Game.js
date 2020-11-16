import React from 'react';
// Styling and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ name, released, image }) => {
  return (
    <GameStyles>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </GameStyles>
  );
};

const GameStyles = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: contain;
  }
`;

export default Game;
