import styled from "styled-components";

export default function Topo({imagem}){
    return(
        <Header>
            <p>TrackIt</p>
            <img src={imagem} alt="" />
        </Header>
    );
}

const Header = styled.div `
    height: 70px;
    width: 100vw;
    border-sizing: border-box;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;

    p {
        font-family: 'Playball', cursive;
        color: #fff;
        font-size: 40px;
        margin-left: 18px;
    }

    img {
        border-radius: 98.5px;
        width: 51px;
        height: 51px;
        margin-right: 18px;
    }
`;