import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Suggested use 'animation: ${displayCardAnimation} 250ms ease-out;'
export const displayCardAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Loader = styled.div`
  margin: 0 auto;
  border: ${(props) => props.size || '0.7rem'} solid
    ${(props) => props.color || '#fff'};
  border-top: ${(props) => props.size || '0.7rem'} solid
    ${(props) => props.spinnerColor || 'black'};
  border-bottom: ${(props) => props.size || '0.7rem'} solid
    ${(props) => props.spinnerColor || 'black'};
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  animation: ${spin} ${(props) => props.time || '1'}s linear infinite;
`;
