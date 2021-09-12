import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LogIn from "./LogIn";
import SignUp from './SignUp';
import { useState } from 'react';
import InicialPage from './InicialPage';

export default function App(){
    
    const [token, setToken] = useState("");
    console.log(token);
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <LogIn 
                            setToken={setToken}
                        />
                    </Route>
                    <Route path="/cadastro" exact>
                        <SignUp />
                    </Route>
                    <Route path="/hoje">
                        <InicialPage/>
                    </Route>
                    

                </Switch>
            </BrowserRouter>
        </div>
    );
}