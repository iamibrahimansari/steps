import React, {useState} from 'react';
import styled from 'styled-components';
import {Circles} from './components/Circles';
import {Text} from './components/Text';
import {Buttons} from './components/Buttons';

const Container = styled.main`
  padding: 2rem;
  border-radius: 10px;
  background-color: #f7f7f7;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 2rem;
`

const Cross = styled.div`
  font-size: 2rem;
  color: darkblue;
  position: absolute;
  top: 3rem;
  right: 3rem;
  cursor: pointer;
`

const App = () =>{
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  return(
    <>
      <Container isOpen={isOpen}>
        <Circles step={step} setStep={setStep} />
        <Text step={step} setStep={setStep} />
        <Buttons step={step} setStep={setStep} />
      </Container>
      <Cross onClick={() => setIsOpen(!isOpen)}>X</Cross>
    </>
  )
}

export default App;