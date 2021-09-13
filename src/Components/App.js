import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LogIn from "./LogIn";
import SignUp from './SignUp';
import { useState } from 'react';
import Habits from './Habits/Habits';
import UserContext from '../contexts/UserContext';
import Today from './Today/Today';
import Historic from './Historic/Historic';

export default function App(){
    
    const [user, setUser] = useState({});
    const [porcentagem, setPorcentagem] = useState(0);

    function salvarPorcentagem(p){
        setPorcentagem(p);
    }

    return(
        <div>
            <UserContext.Provider value={user}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <LogIn 
                                setUser={setUser}
                            />
                        </Route>
                        <Route path="/cadastro" exact>
                            <SignUp />
                        </Route>
                        <Route path="/hoje" exact>
                            <Today
                            setPorcentagem = {salvarPorcentagem} />
                        </Route>
                        <Route path="/habitos">
                            <Habits
                            porcentagem={porcentagem}/>
                        </Route>
                        <Route path="/historico">
                            <Historic 
                            porcentagem={porcentagem}/>
                        </Route>
                        

                    </Switch>
                </BrowserRouter>
            </UserContext.Provider>
        </div>
    );
}