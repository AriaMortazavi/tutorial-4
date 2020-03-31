import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header'
import Form from '../comps/Form'

export default {
    title:"Custom Button",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;
export const PageWithCustomButtons = () => <div>
    <Header
    sizeoffont= {"75px"}
    color = "blue"
    CustomMouseOver = {cancelClick}
    />
    <Header
    sizeoffont= {"45px"}
    color = "red"
    CustomMouseOver = {OKClick}
    />
    <CustomButton 
    color = "#999"
    text = "Cancel"
    fromclick={cancelClick} />
    <CustomButton
    color = "#3F5"
    text = "OK" 
    fromclick={OKClick}/>
    <CustomButton 
    color = "#F3F"
    text = "Submit" />
    <CustomButton text = "Menu" />
    <Form
    formHead= "header 1"
    formBackgroundColor= "green"
    />
    <Form
    formHead= "header 2"
    formBackgroundColor= "pink"
    />
</div>

function cancelClick(){
    alert('Cancel')
}

function OKClick(){
    alert('Ok')
}