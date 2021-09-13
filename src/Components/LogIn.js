import Logo from "../assets/setas.PNG";
import styled from "styled-components";
import { Link , useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function LogIn({setUser}){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [textLogin, setTextLogin] = useState("Entrar");
    
    

    const history = useHistory();

    function entrar(e){
        setTextLogin(<Loader type="ThreeDots" color="#FFFFFF" height={45} width={45} />);
        
        e.preventDefault();

        const body = {email: {email}, password: {password}};
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);

        requisicao
            .then(res => 
                    {   setUser(res.data)
                        history.push('/hoje')})
            .catch(err=> 
                    {   setTextLogin("Entrar")
                        alert("Algo deu errado, por favor, tente novamente")});
    }
    return (
        <Container>
            <img src={Logo} alt="" />
            <p>TrackIt</p>

            <form onSubmit={entrar}>
                <input 
                    type="email" 
                    placeholder="email"
                    onChange={e=> setEmail(e.target.value)}>   
                </input>
                <input 
                    type="password" 
                    placeholder="senha"
                    onChange={e=> setPassword(e.target.value)}>               
                </input>
                
                <button type="submit">{textLogin}</button>
            </form>

            <Link to="/cadastro">
                <h1>Não tem uma conta? Cadastre-se!</h1>
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
    form{
        display:flex;
        flex-direction: column;
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