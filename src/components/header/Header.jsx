import React from 'react';
import styleSheet from "./header.module.css"
import plane from "../../img/plane.png"

const Header = () => {
    return (
        <div className={styleSheet.header}>
            <img src={plane} alt={'самолет'}/>
        </div>
    );
};

export default Header;