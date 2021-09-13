import Topo from "../Topo";
import Menu  from "../Menu";
import { useContext } from "react/cjs/react.development";
import UserContext from "../../contexts/UserContext";
import styled from "styled-components";


export default function Historic({porcentagem}){
    
   
    const user = useContext(UserContext);

    return (
        <div>
            <Topo imagem = {user.image}/>
            <ConteudoHistorico>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </ConteudoHistorico>
            <Menu porcentagem={porcentagem}/>
        </div>
    );
}

const ConteudoHistorico = styled.div ` 
    margin-top: 98px;
    font-family: 'Lexend Deca', sans-serif;
    margin-left: 17px;

    h1 {
        font-size: 23px;
        color: #126BA5;
    }

    p {
        margin-top: 17px;
        font-size: 18px;
        color: #666666;
    }

`;