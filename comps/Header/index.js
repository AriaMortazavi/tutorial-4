//font size
//text color of the header
//onMouseOver

import React from 'react';
import "./Header.css";

const Header = ({sizeoffont, color, CustomMouseOver}) => <div 
    className="header_parent"
    style={{color:color, fontSize:sizeoffont}}
    onMouseOver={CustomMouseOver}>
        Header
    </div>

function MouseOver(){
    alert('Mouse is over');
}

Header.defaultProps = {
    sizeoffont: "30px",
    color: "#000",
    onMouseOver:MouseOver
}
export default Header;