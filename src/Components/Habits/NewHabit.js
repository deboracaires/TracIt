import { useContext, useState } from "react";
import styled from "styled-components";
import DaysHabits from "./DaysHabits";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function NewHabit({cancelarAdd, renderHabits}){
    
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const [textSave, setTextSave] = useState("Salvar");
    
    
    const listDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    const user = useContext(UserContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function saveDay(dia){
        const dias = [...days, dia];
        setDays(dias);
        
    }
    function removeDay(dia){
        const filteredDays = days.filter((day) => day !== dia);
        setDays(filteredDays);
    }

    function saveHabit(){
        setTextSave(<Loader type="ThreeDots" color="#FFFFFF" height={45} width={45} />);
        
        if(name !== "" && days.length !== 0){
            const body = {name, days};
            const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);

            requisicao
                .then(res => console.log(res.data.id));
            
            cancelarAdd();
            renderHabits();
            renderHabits();

        }else{
            alert("Dados incompletos");
            setTextSave("Salvar");
        }
    }
    
    function cancelar(){
        cancelarAdd();
    }
    return(
        <ContainerNewHabit>
            <input 
            type="text"
            placeholder="nome do habito"
            onChange={e=> setName(e.target.value)}
            ></input>
            
            <CheckDay>
                {listDays.map((day, index) => <DaysHabits key={index} id={index} day={day} saveDay={saveDay} removeDay={removeDay}/>)}
            </CheckDay>    
            

            <CancelOrSave>
                <button className="cancelar" onClick={cancelar}>Cancelar</button>
                <button className="salvar" onClick={saveHabit}>{textSave}</button>
            </CancelOrSave>
            
        </ContainerNewHabit>
    );
}
const ContainerNewHabit = styled.div `
    box-sizing: border-box;
    margin-left: 30px;
    margin-top: 38px;

    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        padding-left: 5px;
        border: 1px solid #d5d5d5;
        font-family: 'Lexend Deca', sans-serif;
    }

    input::placeholder {
        color: #dbdbdb;
        font-size: 20px;
    }


`;

const CheckDay = styled.div `
    display: flex;
`;



const CancelOrSave = styled.div `
    margin-top: 29px;
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    margin-right: 36px;

    button {
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #fff;
        
    }

    .cancelar {
        color: #52b6ff;
        margin-right: 23px;
    }

    .salvar {
        background-color: #52B6FF;
        color: #fff;
    }
`;