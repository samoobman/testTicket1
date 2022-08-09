import React from 'react';
import styleSheet from "./item.module.css";
import turk from "../../../img/turk.png"
import plane1 from "../../../img/plane1.png"
import {useContextState} from "../../../StateProvider/allStatesProvider";


const Item = (prop) => {

    const {dayFn, monthFn} = useContextState()

    const stops = prop.data['stops'] === 1 ? 'ПЕРЕСАДКА' : prop.data['stops'] === 0 ? 'ПЕРЕСАДОК' : 'ПЕРЕСАДКИ'
    const dateDepartureArr = prop.data["departure_date"].split('.').reverse()
    const dateArrivalArr = prop.data["arrival_date"].split('.').reverse()
    const date1 = new Date(+('20' + dateDepartureArr[0]), (+dateDepartureArr[1] - 1), (+dateDepartureArr[2] - 1))
    const date2 = new Date(+('20' + dateArrivalArr[0]), (+dateArrivalArr[1] - 1), (+dateArrivalArr[2] - 1))

    return (
        <div className={styleSheet.container}>
            <div className={styleSheet.leftSide}>
                <img src={turk} alt={'TurkishAir'}/>
                <div className={styleSheet.myButton}>Купить<br/>за {prop.data['price']}&#8381;</div>
            </div>
            <div className={styleSheet.rightSide}>
                <div></div>
                <div className={styleSheet.topContainer}>
                    <div className={styleSheet.Time}>
                        {prop.data['departure_time']}
                    </div>
                    <div className={styleSheet.lineStopsContainer}>
                        <div className={styleSheet.stops}>{prop.data['stops'] + ' ' + stops}</div>
                        <div className={styleSheet.lineContainer}>
                            <hr className={styleSheet.line}/><img src={plane1} alt={'plane'}/>
                        </div>
                    </div>
                    <div className={styleSheet.Time}>
                        {prop.data['arrival_time']}
                    </div>
                </div>
                <div className={styleSheet.bottomContainer}>
                    <div className={styleSheet.info1}>
                        <div className={styleSheet.airport}>
                            {prop.data['origin']}, {prop.data['origin_name']}
                        </div>
                        <div className={styleSheet.dateTime}>
                            {date1.getDate()} {monthFn(date1)} {date1.getFullYear()}, {dayFn(date1)}
                        </div>
                    </div>
                    <div className={styleSheet.info2}>
                        <div className={styleSheet.airport}>
                            {prop.data['destination']}, {prop.data['destination_name']}
                        </div>
                        <div className={styleSheet.dateTime}>
                            {date2.getDate()} {monthFn(date2)} {date2.getFullYear()}, {dayFn(date2)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Item;