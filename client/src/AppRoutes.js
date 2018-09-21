import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Entry from "./components/Entry";
import NotFound from "./components/NotFound"
import WordGuess from "./components/WordGuess";
import Summary from "./components/Summary";

class AppRoutes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Entry} exact/>
                        <Route path="/wordguess" component={WordGuess} exact/>
                        <Route path="/summary" component={Summary} exact/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
};

export default AppRoutes;
