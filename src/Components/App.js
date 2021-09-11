import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LogIn from "./LogIn";
import SignUp from './SignUp';
import { useState } from 'react';

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
                </Switch>
            </BrowserRouter>
        </div>
    );
}