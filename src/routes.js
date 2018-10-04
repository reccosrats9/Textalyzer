import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Barchart from './Components/Barchart'
import List from './Components/List'
import Piechart from './Components/Piechart'

export default function routes(analysis, keys) {
    return(
    <Switch>
            <Route exact path='/' render={() => <List analysis={analysis} keys={keys} />}/>
        <Route path='/bar' render={()=> <Barchart  analysis={analysis} keys={keys} />} />
        <Route path='/pie' render={() => <Piechart  analysis={analysis} keys={keys} />} />
        {/* <Route path='/bar' component={Barchart}/> */}
        </Switch>
    )    
}