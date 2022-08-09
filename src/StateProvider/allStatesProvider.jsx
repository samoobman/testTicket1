import React, {useState, useContext, useEffect} from "react";

const MyContext = React.createContext()

export const useContextState = () => {
    return useContext(MyContext)
}

export function ContextProvider({children}) {

    const dayFn = (date) =>
        date.getDay() === 0 ? 'Пн' :
            date.getDay() === 1 ? 'Вт' :
                date.getDay() === 2 ? 'Ср' :
                    date.getDay() === 3 ? 'Чт' :
                        date.getDay() === 4 ? 'Пт' :
                            date.getDay() === 5 ? 'Сб' : 'Вс'

    const monthFn = (date) =>
        date.getMonth() === 0 ? 'янв' :
            date.getMonth() === 1 ? 'фев' :
                date.getMonth() === 2 ? 'мар' :
                    date.getMonth() === 3 ? 'апр' :
                        date.getMonth() === 4 ? 'мая' :
                            date.getMonth() === 5 ? 'июн' :
                                date.getMonth() === 6 ? 'июл' :
                                    date.getMonth() === 7 ? 'авг' :
                                        date.getMonth() === 8 ? 'сен' :
                                            date.getMonth() === 9 ? 'окт' :
                                                date.getMonth() === 10 ? 'ноя' : 'дек'

    const [checked, setChecked] = useState({
        'ch1': true,
        'ch2': false,
        'ch3': false,
        'ch4': false,
        'ch5': false
    });

    const changeCheckbox = (name, id) => {
        if (id === 0) {
            if (name === 'ch1' && checked['ch1'] === false) {
                setChecked({
                    'ch1': true,
                    'ch2': false,
                    'ch3': false,
                    'ch4': false,
                    'ch5': false
                })
            } else if (name === 'ch2' && checked['ch2'] === false) {
                setChecked({
                    ...checked,
                    'ch1': false,
                    'ch2': true
                })
            } else if (name === 'ch3' && checked['ch3'] === false) {
                setChecked({
                    ...checked,
                    'ch1': false,
                    'ch3': true
                })
            } else if (name === 'ch4' && checked['ch4'] === false) {
                setChecked({
                    ...checked,
                    'ch1': false,
                    'ch4': true
                })
            } else if (name === 'ch5' && checked['ch5'] === false) {
                setChecked({
                    ...checked,
                    'ch1': false,
                    'ch5': true
                })
            } else {
                setChecked({
                    ...checked,
                    [name]: false
                })
            }

        } else {
            if (name === 'ch2') {
                setChecked({
                    'ch1': false,
                    'ch2': true,
                    'ch3': false,
                    'ch4': false,
                    'ch5': false
                })
            } else if (name === 'ch3') {
                setChecked({
                    'ch1': false,
                    'ch2': false,
                    'ch3': true,
                    'ch4': false,
                    'ch5': false
                })
            } else if (name === 'ch4') {
                setChecked({
                    'ch1': false,
                    'ch2': false,
                    'ch3': false,
                    'ch4': true,
                    'ch5': false
                })
            } else {
                setChecked({
                    'ch1': false,
                    'ch2': false,
                    'ch3': false,
                    'ch4': false,
                    'ch5': true
                })
            }
        }

    }


    useEffect(() => {

        if (checked['ch1']) {
            setResultTickets([...tickets['tickets']])
        } else {setResultTickets([])}

        if (checked['ch2']) {
            setResultTickets(prev => [...prev, ...tickets['tickets'].filter(el => el['stops'] === 0)])
        }
        if (checked['ch3']) {
            setResultTickets(prev => [...prev, ...tickets['tickets'].filter(el => el['stops'] === 1)])
        }
        if (checked['ch4']) {
            setResultTickets(prev => [...prev, ...tickets['tickets'].filter(el => el['stops'] === 2)])
        }
        if (checked['ch5']) {
            setResultTickets(prev => [...prev, ...tickets['tickets'].filter(el => el['stops'] === 3)])
        }
        if (!checked['ch1'] && !checked['ch2'] && !checked['ch3'] && !checked['ch4'] && !checked['ch5']) {
            changeCheckbox('ch1', 0)
        }

    }, [checked])


    const [tickets, setTickets] = useState(
        {
            "tickets": [{
                "origin": "VVO",
                "origin_name": "Владивосток",
                "destination": "TLV",
                "destination_name": "Тель-Авив",
                "departure_date": "12.05.18",
                "departure_time": "16:20",
                "arrival_date": "12.05.18",
                "arrival_time": "22:10",
                "carrier": "TK",
                "stops": 3,
                "price": 12400
            }, {
                "origin": "VVO",
                "origin_name": "Владивосток",
                "destination": "TLV",
                "destination_name": "Тель-Авив",
                "departure_date": "12.05.18",
                "departure_time": "17:20",
                "arrival_date": "12.05.18",
                "arrival_time": "23:50",
                "carrier": "S7",
                "stops": 1,
                "price": 13100
            }, {
                "origin": "VVO",
                "origin_name": "Владивосток",
                "destination": "TLV",
                "destination_name": "Тель-Авив",
                "departure_date": "12.05.18",
                "departure_time": "12:10",
                "arrival_date": "12.05.18",
                "arrival_time": "18:10",
                "carrier": "SU",
                "stops": 0,
                "price": 15300
            }, {
                "origin": "VVO",
                "origin_name": "Владивосток",
                "destination": "TLV",
                "destination_name": "Тель-Авив",
                "departure_date": "12.05.18",
                "departure_time": "17:00",
                "arrival_date": "12.05.18",
                "arrival_time": "23:30",
                "carrier": "TK",
                "stops": 2,
                "price": 11000
            }, {
                "origin": "VVO",
                "origin_name": "Владивосток",
                "destination": "TLV",
                "destination_name": "Тель-Авив",
                "departure_date": "12.05.18",
                "departure_time": "12:10",
                "arrival_date": "12.05.18",
                "arrival_time": "20:15",
                "carrier": "BA",
                "stops": 3,
                "price": 13400
            }, {
                "origin": "VVO",
                "origin_name": "Владивосток",
                "destination": "TLV",
                "destination_name": "Тель-Авив",
                "departure_date": "12.05.18",
                "departure_time": "9:40",
                "arrival_date": "12.05.18",
                "arrival_time": "19:25",
                "carrier": "SU",
                "stops": 3,
                "price": 12450
            }, {
                "origin": "VVO",
                "origin_name": "Владивосток",
                "destination": "TLV",
                "destination_name": "Тель-Авив",
                "departure_date": "12.05.18",
                "departure_time": "17:10",
                "arrival_date": "12.05.18",
                "arrival_time": "23:45",
                "carrier": "TK",
                "stops": 1,
                "price": 13600
            }, {
                "origin": "VVO",
                "origin_name": "Владивосток",
                "destination": "TLV",
                "destination_name": "Тель-Авив",
                "departure_date": "12.05.18",
                "departure_time": "6:10",
                "arrival_date": "12.05.18",
                "arrival_time": "15:25",
                "carrier": "TK",
                "stops": 0,
                "price": 14250
            }, {
                "origin": "VVO",
                "origin_name": "Владивосток",
                "destination": "TLV",
                "destination_name": "Тель-Авив",
                "departure_date": "12.05.18",
                "departure_time": "16:50",
                "arrival_date": "12.05.18",
                "arrival_time": "23:35",
                "carrier": "SU",
                "stops": 1,
                "price": 16700
            }, {
                "origin": "VVO",
                "origin_name": "Владивосток",
                "destination": "TLV",
                "destination_name": "Тель-Авив",
                "departure_date": "12.05.18",
                "departure_time": "6:10",
                "arrival_date": "12.05.18",
                "arrival_time": "16:15",
                "carrier": "S7",
                "stops": 0,
                "price": 17400
            }]
        }
    )

    const [resultTickets, setResultTickets] = useState([...tickets["tickets"]])

    return (
        <MyContext.Provider value={
            {
                checked, changeCheckbox,
                resultTickets,
                dayFn, monthFn
            }
        }>
            {children}
        </MyContext.Provider>
    );
}