import './App.css';
import React from "react";
import TicketsComponent from './components/ticketsComponent/TicketsComponent'
import {ContextProvider} from "./StateProvider/allStatesProvider"
import Header from "./components/header/Header";

function App() {
    return (
        <ContextProvider>
            <div className="App">
                <Header/>
                <TicketsComponent/>
            </div>
        </ContextProvider>
    );
}

export default App;
