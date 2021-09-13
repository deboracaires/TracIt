import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Topo from "../Topo";
import Menu from "../Menu";
import styled from "styled-components";
import dayjs from "dayjs";
import TodayHabits from "./TodayHabits";
import axios from "axios";


export default function Today({setPorcentagem}){
    
    const [habits, setHabits] = useState([]);
    
    const user = useContext(UserContext);
    
    
    let dia = '';
    if(dayjs().day() === 0){
        dia = 'Domingo';
    }else if(dayjs().day() === 1){
        dia = 'Segunda';
    }else if(dayjs().day() === 2){
        dia = 'Terça';
    }else if(dayjs().day() === 3){
        dia = 'Quarta';
    }else if(dayjs().day() === 4){
        dia = 'Quinta';
    }else if(dayjs().day() === 5){
        dia = 'Sexta';
    }else if(dayjs().day() === 7){
        dia = 'Sábado';
    }

    useEffect(()=> {
        renderHabits();
    }, []);

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

   

    function renderHabits(){
        
        const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

        requisicao
            .then(res => setHabits(res.data))
            .catch(err => console.log(err));
    
        
    }

    let checkedHabits = 0;
    habits.map(habit => {habit.done ? checkedHabits = checkedHabits + 1 : checkedHabits = checkedHabits + 0})


    const p = Math.round((checkedHabits/habits.length) *100);

    function checkHabit(id, done){
        
        let url = ""
        if(done){
            url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        }
        if(!done){
            url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        }
        
        const requisicao = axios.post(url, {} ,config);

        requisicao
            .then(res => renderHabits())
            .catch(err => console.log(err));

        setPorcentagem(p);
    }

    
    
    
    
    return(
        <div>
            <Topo imagem={user.image}/>
            
            <ConteudoToday>
                <p>{dia}, {dayjs().format('DD/MM')}</p>
                { isNaN(p) ? 
                    (
                        <h1>Nenhum hábito concluído ainda</h1>
                    )
                    :
                    (
                        
                        <h2>{p}% dos hábitos concluídos</h2>
                    )
                }                   

                <Habitos>
                    {habits.length === 0 ? 
                        (
                            <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                        )
                        :
                        (
                            habits.map((habit, index) => <TodayHabits 
                                                            key={index} 
                                                            id={habit.id} 
                                                            name={habit.name} 
                                                            done={habit.done}
                                                            currentSequence={habit.currentSequence}
                                                            highestSequence={habit.highestSequence}
                                                            checkHabit={checkHabit}/> )
                        )
                 }
                </Habitos>
            </ConteudoToday>

            
            <Menu porcentagem={p}/>
           
            
        </div>
    );
}



const ConteudoToday = styled.div `
    margin: 98px 0 105px 17px;
    font-family: 'Lexend Deca', sans-serif;
    overflow-y: scroll;
    overflow-x: hidden;
    p {
        font-size: 23px;
        color: #126BA5;
    }
    h1 {
        font-size: 18px;
        color: #bababa;
        margin-top: 5px;
    }
    h2 {
        font-size: 18px;
        color: #BFC549;
        margin-top: 5px;
    }

`;

const Habitos = styled.div `
    margin-top: 28px;


    p {
        font-size: 18px;
        font-family: 'Lexend Deca', sans-serif;
        color: #666666;
        width: 338px;
    }
`;
