let num1=document.querySelector(".num1");
let num2=document.querySelector(".num2");
let showOperator=document.querySelector(".showOperator");
let result=document.querySelector(".result");
let number=document.querySelectorAll(".num");
let operator=document.querySelectorAll(".operator");
let clearall=document.querySelector(".ac");
let clear=document.querySelector(".del");
let equalTo=document.querySelector(".isEqual");

number.forEach((value)=>{
    value.addEventListener("click",()=>{
        if (!showOperator.innerText) {
            num1.innerText+=value.innerText;
        } else {
            num2.innerText+=value.innerText;
        }
    });
});

operator.forEach((key)=>{
    key.addEventListener("click",()=>{
        if (!showOperator.innerText && num1.innerText) {
            showOperator.innerText=key.innerText;            
        }
        else if(result.innerText)
        {
            num1.innerText=result.innerText;
            showOperator.innerText=key.innerText;
            result.innerText="";
            num2.innerText="";
        }
    });
});

clearall.addEventListener("click",()=>{
    num1.innerText="";
    num2.innerText="";
    showOperator.innerText="";
    result.innerText="";
});

equalTo.addEventListener("click",()=>{
    if(!result.innerText){
        let up=num1.innerText;
        let middel=showOperator.innerText;
        let below=num2.innerText;
        result.innerText=eval(up + middel + below);
    }
    else{
        showOperator.innerText="";
        num2.innerText="";
        num1.innerText=result.innerText;
        result.innerText="";
    }
    });
    
clear.addEventListener("click",()=>{
    let str="";
    let arr=[];
    if(num2.innerText)
    {
        str=num2.innerText;
        arr=str.split('');
        arr.pop();
        num2.innerText=arr.join('');
    }
    else if(showOperator.innerText)
    showOperator.innerText="";
    else{
        str=num1.innerText;
        arr=str.split('');
        arr.pop();
        num1.innerText=arr.join('');
    }
    result.innerText="";
});