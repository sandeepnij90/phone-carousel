import React from 'react';
import { render } from 'react-dom';
import Demo from './components/Demo'
const App = () => {
    return (
        <Demo />
    ) 
}

render(<App />, document.getElementById('root'))