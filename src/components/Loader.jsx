import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="spinner" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Full-screen white background */
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;    /* background color */

  .spinner {
    --size: 60px;
    --first-block-clr: #9C2327;    /* block colorchanging */
    --second-block-clr: #F2F1EF;     /* block colorchanging*/
    --clr: #111;
    width: 100px;
    height: 100px;
    position: relative;
  }

  .spinner::after,
  .spinner::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    width: var(--size);
    height: var(--size);
    top: 50%;
    left: 50%;
    background: var(--first-block-clr);
    animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  .spinner::after {
    background: var(--second-block-clr);
    top: calc(50% - var(--size));
    left: calc(50% - var(--size));
    animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  /* Keyframe animations for spinner */
  @keyframes down {
    0%, 100% {
      transform: none;
    }
    25% {
      transform: translateX(100%);
    }
    50% {
      transform: translateX(100%) translateY(100%);
    }
    75% {
      transform: translateY(100%);
    }
  }

  @keyframes up {
    0%, 100% {
      transform: none;
    }
    25% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(-100%) translateY(-100%);
    }
    75% {
      transform: translateY(-100%);
    }
  }
`;

export default Loader;
