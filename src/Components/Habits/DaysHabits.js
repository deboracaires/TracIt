import { useState } from "react";
import styled from "styled-components";

export default function DaysHabits({day, saveDay, id, removeDay}){
    
    const [classes, setClasses] = useState("");
    
    function selectDay(){
        if(classes === ""){
            setClasses("selected");
            saveDay(id);
        }else if(classes === "selected"){
            setClasses("");
            removeDay(id);
        }

    }

    return(
        <ContainerDays>
            <button className={classes} onClick={selectDay}>{day}</button>
        </ContainerDays>
    );
}

const ContainerDays = styled.div  `
    box-sizing: border-box;

    button {
        width: 30px;
        height: 30px;
        color: #dbdbdb;
        margin-right: 4px;
        margin-top: 8px;
        border: 1px solid #d5d5d5;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
    }

    .selected {
        background-color: #cfcfcf;
        border: 1px solid #cfcfcf;
        color: #fff;
    }

`;
