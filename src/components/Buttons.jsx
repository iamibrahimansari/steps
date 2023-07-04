import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    border: none;
    padding: 0.5rem 1rem;
    background-color: #7950f2;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
`

export const Buttons = ({step, setStep}) =>{
    const handleOnClick = text =>{
        if(text === 'Next' && step < 3){
            setStep(previousStep => previousStep + 1);    
        }else if(text === 'Previous' && step > 1){
            setStep(previousStep => previousStep - 1);
        }
    }
    return <Container>
        {
            ['Previous', 'Next'].map(btnText => {
                return <Button key={btnText} onClick={() => handleOnClick(btnText)}>
                    {btnText}
                </Button>
            })
        }
    </Container>
}