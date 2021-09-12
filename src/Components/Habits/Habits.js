import Topo from "../Topo";
import Menu from "../Menu";
import NewHabit from "./NewHabit";
import Habit from "./Habit";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import styled from "styled-components";
import axios from "axios";


export default function Habits(){
    
    const [habits, setHabits] = useState([]);
    const [addHabit, setAddHabit] = useState([]);
    
    const user = useContext(UserContext);
    
    
    useEffect(()=> {
        renderHabits();
    }, []);

    function renderHabits(){
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        requisicao
            .then(res => setHabits(res.data))
            .catch(err => console.log(err));
    }
    
    function adicionarHabito(){
        setAddHabit(<NewHabit renderHabits={renderHabits} cancelarAdd={cancelarAdd}/>);
    }
    function cancelarAdd(){
        setAddHabit([]);
    }
    return(
        <div>
            <Topo imagem = {user.image}/>
            <Conteudo>
            <MenuHabitos> 
                <div>
                    <p>Meus hábitos</p> 
                    <button onClick = {adicionarHabito}>+</button>   
                </div>
                
            </MenuHabitos>

            {addHabit}

            {habits.length === 0 ? 
                (<TextNoHabits>
                    <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </TextNoHabits>)
                :
                (
                    habits.map((habit, index)=> <Habit key={index} id={habit.id} name={habit.name} days={habit.days} renderHabits={renderHabits}/>)
                )
            }
            </Conteudo>            
            
            <Menu />
        </div>
    );
}

const MenuHabitos = styled.div`
    margin: 98px 18px 0 18px;
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    p {
        font-size: 23px;
        color: #126BA5;
        font-family: 'Lexend Deca', sans-serif;
    }
    button {
        width: 40px;
        height: 35px;
        border-radius: 5px;
        border: 1px solid #fff;
        background-color: #52b6ff;
        color: #fff;
        font-size: 27px;
    }
`;

const TextNoHabits = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 28px;

    p {
        font-size: 18px;
        font-family: 'Lexend Deca', sans-serif;
        color: #666666;
        width: 338px;
    }
`;

const Conteudo = styled.div `
    margin-bottom: 100px;
`;

