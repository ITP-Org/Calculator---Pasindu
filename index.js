
const display=document.getElementById("display");
const display2=document.getElementById("Secondory_display");

//Calling Function
function AppendToDisplay(input){

    if(display2.value=="" || display2.value==null){

        if(display.value.includes('+') | display.value.includes('-') | display.value.includes('*') | display.value.includes('/') && input==='+' || input==='-' || input==='*' || input==='/'){
            display2.value+=display.value;
            display.value=Calc();
        }
        display.value+=input;       
    }
    else{
        if(display.value.includes('+') | display.value.includes('-') | display.value.includes('*') | display.value.includes('/') && input==='+' || input==='-' || input==='*' || input==='/'){
            display2.value=display.value;
            display.value=Calc();
        }
        display.value+=input;  

    }

}

//General Function
function Calc(){
    let cal_value=0;
    try{
        cal_value=eval(display.value);      
    }
    catch(error)
    {  
        cal_value="eww !!!"
    }
    return cal_value
}

//Calling Function
function Calculate(){
    display2.value=display.value;
    display.value=Calc();
}

//Calling Function
function Clear(){
    display.value="";
    display2.value="";
}

