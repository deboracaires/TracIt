import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useHistory } from "react-router";


export default function Menu({porcentagem}){
    
    
    const history = useHistory();
    
    function redirectHabits(){
        history.push('/habitos');
    }

    function redirectToday(){
        history.push('/hoje');
    }
    function redirectHistory(){
        history.push('/historico');
    }
    return(
        <Footer>
            
            <button onClick={redirectHabits}>Hábitos</button>
            <div style={{width: 91, height: 91}} onClick={redirectToday}>
                <CircularProgressbar 
                    value={porcentagem} 
                    maxValue={100} 
                    text="Hoje"
                    background
                    backgroundPadding={7}
                    styles={
                        buildStyles({
                            backgroundColor: "#52b6ff",
                            textColor: "#ffffff",
                            pathColor: "#ffffff",
                            trailColor: "#52b6ff"
                        })
                    }
                />
            </div>
            <button onClick={redirectHistory}>Histórico</button>
        </Footer>
    );
}

const Footer = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    z-index: 10000;
    margin: 0 8px;

    button {
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #52b6ff;
    }
    

`;
