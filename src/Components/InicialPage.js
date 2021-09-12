import Topo from "./Topo";
import Menu from "./Menu";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function InicialPage(){
    
    const user = useContext(UserContext);
    console.log(user);

    return(
        <div>
            <Topo imagem = {user.image}/>
            <Menu />
        </div>
    );
}