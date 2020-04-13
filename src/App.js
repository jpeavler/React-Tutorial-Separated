import React from 'react';
import Game from './components/Game';

const App = (props) => {
    return (
        <main>
            <h1>{props.title}</h1>
            {<Game></Game>}
        </main>
    )
}

export default App;