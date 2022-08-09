import React from 'react';
import {useContextState} from "../../StateProvider/allStatesProvider";
import styleSheet from './ticketsComponent.module.css'
import LeftTicketMenu from "./leftTicketMenu/LeftTicketMenu";
import Item from "./item/Item";

const TicketsComponent = () => {


const {resultTickets} = useContextState()


    return (
        <div className={styleSheet.wrapper}>
          <LeftTicketMenu />
          <div className={styleSheet.ticketsCol}>
              {resultTickets.sort((a, b) => a['price'] > b['price'] ? 1 : -1).map((el, i) => <Item key={i} data={el}/>)}
          </div>
        </div>
    );
};

export default TicketsComponent;