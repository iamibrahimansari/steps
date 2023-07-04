import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Circle = styled.span`
    width: 3rem;
    height: 3rem;
    background-color: #eee;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
`
const styleCircle = {
    backgroundColor: '#7950f2',
    color: '#fff'
}

const initialCircleStyle = {
    backgroundColor: '#eee',
    color: 'inherit'
}

export const Circles = ({step, setStep}) =>{

    return <Container>
        {
            [1, 2, 3].map(circle => <Circle key={circle} style={step >= circle ? styleCircle : initialCircleStyle}>{circle}</Circle>)
        }
    </Container>
}