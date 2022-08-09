import React, {useState} from 'react';
import styleSheet from './leftTicketMenu.module.css'
import {useContextState} from "../../../StateProvider/allStatesProvider";

const LeftTicketMenu = () => {

    const {checked, changeCheckbox} = useContextState()

    const [btnState, setBtnState] = useState({
        style1: styleSheet.btnOn,
        style2: styleSheet.btn,
        style3: styleSheet.btn
    })

    const changeCheckboxState = (e) => {
        changeCheckbox(e.target.name, 0)
    }

    const changeOnlyOneBoxState = (e) => {
        changeCheckbox(e.target.id, 1)
    }

    const courseHandler = (e) => {
        e.target.name === "style1" ?
            setBtnState({
                style1: styleSheet.btnOn,
                style2: styleSheet.btn,
                style3: styleSheet.btn
            }) :
            e.target.name === "style2" ?
                setBtnState({
                    style1: styleSheet.btn,
                    style2: styleSheet.btnOn,
                    style3: styleSheet.btn
                }) :
                setBtnState({
                    style1: styleSheet.btn,
                    style2: styleSheet.btn,
                    style3: styleSheet.btnOn
                })
    }

    return (
        <div className={styleSheet.leftmenu}>
            <div className={styleSheet.topContainer}>
                <div className={styleSheet.topHeadMenu}>ВАЛЮТА</div>
                <div className={styleSheet.btnGroup}>
                    <button name={"style1"} onClick={courseHandler} className={btnState.style1}>RUB</button>
                    <button name={"style2"} onClick={courseHandler} className={btnState.style2}>USD</button>
                    <button name={"style3"} onClick={courseHandler} className={btnState.style3}>EURO</button>
                </div>
            </div>
            <div className={styleSheet.bottomContainer}>
                <div className={styleSheet.bottomHeadMenu}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <div className={styleSheet.checkBoxContainer}>
                    <div className={styleSheet.checkBox}>
                        <input type={"checkbox"} name={'ch1'} checked={checked['ch1']} onChange={changeCheckboxState}/>
                        <label>Все</label>
                        <div></div>
                    </div>
                </div>
                <div className={styleSheet.checkBoxContainer}>
                    <div className={styleSheet.checkBox}>
                        <input type={"checkbox"} name={'ch2'} checked={checked['ch2']} onChange={changeCheckboxState}/>
                        <label>Без пересадок</label>
                        <div id={'ch2'} onClick={changeOnlyOneBoxState} className={styleSheet.onlyButton}>ТОЛЬКО</div>
                    </div>
                </div>
                <div className={styleSheet.checkBoxContainer}>
                    <div className={styleSheet.checkBox}>
                        <input type={"checkbox"} name={'ch3'} checked={checked['ch3']} onChange={changeCheckboxState}/>
                        <label>1 пересадка</label>
                        <div id={'ch3'} onClick={changeOnlyOneBoxState} className={styleSheet.onlyButton}>ТОЛЬКО</div>
                    </div>
                </div>
                <div className={styleSheet.checkBoxContainer}>
                    <div className={styleSheet.checkBox}>
                        <input type={"checkbox"} name={'ch4'} checked={checked['ch4']} onChange={changeCheckboxState}/>
                        <label>2 пересадки</label>
                        <div id={'ch4'} onClick={changeOnlyOneBoxState} className={styleSheet.onlyButton}>ТОЛЬКО</div>
                    </div>
                </div>
                <div className={styleSheet.checkBoxContainer}>
                    <div className={styleSheet.checkBox}>
                        <input type={"checkbox"} name={'ch5'} checked={checked['ch5']} onChange={changeCheckboxState}/>
                        <label>3 пересадки</label>
                        <div id={'ch5'} onClick={changeOnlyOneBoxState} className={styleSheet.onlyButton}>ТОЛЬКО</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LeftTicketMenu;