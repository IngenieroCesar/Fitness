import React from 'react';
//De esta manera es como importamos reactrouter.
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExerciseNew from '../pages/ExerciseNew'
import NotFound from '../pages/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            {/* Este componente se encarga de renderear el ui del componente que digamos */}
            <Route exact path="/exercise" component={Exercises} />
            <Route exact path="/exercise/new" component={ExerciseNew} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

// function App(){
//     return(
//         <BrowserRouter>
//             <Switch>
//                  {/* Este componente se encarga de renderear el ui del componente que digamos */}
//                 <Route exact path="/exercise" component={Exercises} />
//                 <Route exact path="/exercise/new" component={ExerciseNew} />
//                 <Route component={NotFound} />
//             </Switch>
//         </BrowserRouter>
//     )
// }

export default App;