import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

export default function Menu(){
    
    const porcentagem = 0.50;
    
    return(
        <Footer>
            <button>Hábitos</button>
            <div style={{width: 91, height: 91}}>
                <CircularProgressbar 
                    value={porcentagem} 
                    maxValue={1} 
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
            <button>Histórico</button>
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

    button {
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #52b6ff;
    }
    

`;
