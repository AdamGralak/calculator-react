import { Form } from './Form';
import React from 'react';
import { StyledDiv } from './styled';
import { GlobalStyle } from '../global.styled';

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        <Form />
      </StyledDiv>
    </>
  );
}

export default App;