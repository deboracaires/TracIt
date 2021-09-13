import styled from "styled-components";


export default function TodayHabits({id, name, done, highestSequence, currentSequence, checkHabit}){
    

    return (
        <Container>
            <Esquerda>
                <p>{name}</p>
                <h1>Sequencia atual: {currentSequence}</h1>
                <h1>Seu recorde: {highestSequence}</h1>
            </Esquerda>

            <Direita>
                <input type="checkbox"
                    checked={done}
                    onClick={()=> checkHabit(id, done)}
                        
                    readOnly                       
                />
            
            </Direita>
        </Container>
    );
}

const Container = styled.div `
    box-sizing: border-box;
   
    margin-top: 38px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    width: 340px;
    height: 91px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Esquerda = styled.div `
    margin-left: 15px;
    
    font-family: 'Lexend Deca', sans-serif;

    
    p {
        color: #666666;
        font-size: 20px;
        margin-bottom: 8px;
    }
    h1 {
        color: #666666;
        font-size: 13px;
    }
   

`;


const Direita = styled.div `
    margin-right: 15px;
    position: absolute;
    right: 0;
    top: 8px;
    
    input {
        width: 69px;
        height: 69px;       
        
    }
    input:checked:after{
        color: red;
        
    }
`;