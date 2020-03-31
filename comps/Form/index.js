import React from 'react';
import "./Form.css";

const Form = ({formHead, formBackgroundColor}) => <form 
    className="form_div">
       <label type="submit">{formHead}</label><br></br>
       <input 
       style={{backgroundColor: formBackgroundColor}}
       type="text"></input>
    </form>

Form.defaultProps = {
    formHead: "First name:",
    formBackgroundColor: "#000",
}
export default Form;