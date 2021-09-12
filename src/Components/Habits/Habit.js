import styled from "styled-components";

export default function Habit({name, days}){
    
    let class0 = "";
    let class1 = "";
    let class2 = "";
    let class3 = "";
    let class4 = "";
    let class5 = "";
    let class6 = "";

    if(days.includes(0)){
        class0 = "selected";
    }
    if(days.includes(1)){
        class1 = "selected";
    }
    if(days.includes(2)){
        class2 = "selected";
    }
    if(days.includes(3)){
        class3 = "selected";
    }
    if(days.includes(4)){
        class4 = "selected";
    }
    if(days.includes(5)){
        class5 = "selected";
    }
    if(days.includes(6)){
        class6 = "selected";
    }

    
    return(
        <HabitContainer>
            <p>{name}</p>
            
            <ContainerDays>
                <button className={class0}>D</button>
                <button className={class1}>S</button>
                <button className={class2}>T</button>
                <button className={class3}>Q</button>
                <button className={class4}>Q</button>
                <button className={class5}>S</button>
                <button className={class6}>S</button>
            </ContainerDays>
        </HabitContainer>
    );
}

const HabitContainer = styled.div `
    box-sizing: border-box;
    margin-left: 15px;
    margin-top: 38px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    width: 340px;
    height: 91px;

    p {
        color: #666666;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        margin-top: 13px;
        margin-left: 15px;
    }
    

`;

const ContainerDays = styled.div  `
    box-sizing: border-box;
    margin-left: 15px;

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