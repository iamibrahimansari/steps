import styled from 'styled-components';

const Para = styled.p`
    text-align: center;
    font-size: 1.6rem;
`

const message = [
    'Learn React',
    'Apply for jobs',
    'Invest your new income'
]

export const Text = ({step, setStep}) =>{
    return <Para>Step {step}: {message[step - 1]}</Para>
}