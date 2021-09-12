import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LogIn from "./LogIn";
import SignUp from './SignUp';
import { useState } from 'react';
import Habits from './Habits/Habits';
import UserContext from '../contexts/UserContext';

export default function App(){
    
    const [user, setUser] = useState({});

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
                        <Route path="/habitos">
                            <Habits/>
                        </Route>
                        

                    </Switch>
                </BrowserRouter>
            </UserContext.Provider>
        </div>
    );
}