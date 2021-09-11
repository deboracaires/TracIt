import Setas from "../assets/setas.PNG";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SignUp(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    const body = {email, name, image, password};
    
    function cadastro(){
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);

        
        requisicao.then(res=> {console.log("deu bao")})
            .catch(err=> console.log(err));

    }
    return (
        <Container>
            <img src={Setas} alt="" />
            <p>TrackIt</p>

            <input 
                type="email" 
                placeholder="email"
                onChange={e=> setEmail(e.target.value)}
                required>    
            </input>
            <input 
                type="password" 
                placeholder="senha"
                onChange={e=> setPassword(e.target.value) }
                required>
            </input>
            <input 
                type="text" 
                placeholder="nome"
                onChange={e=> setName(e.target.value) }
                required>
            </input>
            <input 
                type="url" 
                placeholder="senha"
                onChange={e=> setImage(e.target.value) }
                required>
            </input>

            <button onClick={cadastro}>Cadastrar</button>
            <Link to="/">
                <h1>Já tem uma conta? Faça login!</h1>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    border-sizing: border-box;	
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 68px;
        width: 220px;
        height: 140px;
        margin-left: 10px;
    }
    
    p {
        font-family: 'Playball', cursive;
        color: #126BA5;
        font-size: 86.23px;
        margin-bottom: 32px;
    }
    
    input {
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19.98px;
    }

    input::placeholder{
        color: #dbdbdb;
        font-size: 19.98px;
    }

    button{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        background: #52B6FF;
        color: #fff;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
    }

    h1 {
        text-decoration: underline;
        font-family: 'Lexend Deca', sans-serif;
        margin-top: 25px;
        color: #52B6FF;
        font-size: 14px;
    }

    
`;