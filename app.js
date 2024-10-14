// const BASE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies`;
// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// // const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}";
// const BASE_URL = "cur_live_SO4CJj5Uwb3W1gwZbIqkSJQy1QlZqFXTeQVUr1SN";
// const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_SO4CJj5Uwb3W1gwZbIqkSJQy1QlZqFXTeQVUr1SN&currencies=EUR%2CUSD%2CCAD";
// const BASE_URL = "cur_live_SO4CJj5Uwb3W1gwZbIqkSJQy1QlZqFXTeQVUr1SN";
// const BASE_URL = "fd3d9d728bc8486584c2839ed3bcedb9";
// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";  
  
// var builder = WebApplication.CreateBuilder(args);  
  
// builder.Services.AddCors(options =>  
// {  
//     options.AddPolicy(name, MyAllowSpecificOrigins,  
//                       policy  =>  
//                       {  
//                           policy.WithOrigins("http://localhost:127.0.0.1:50415",  
//                                               "http://www.contoso.com"); // add the allowed origins  
//                       });  
// });  
  
// // services.AddResponseCaching();  
  
// builder.Services.AddControllers();  
  
// var app = builder.Build();  
// app.UseHttpsRedirection();  
// app.UseStaticFiles();  
// app.UseRouting();  
  
// app.UseCors(MyAllowSpecificOrigins);



















const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
let msg = document.querySelector(".msg");
let amount = document.querySelector(".amount input");
let amtVal = amount.value;




const apiKey = "c32a4d224c95ade1a2bd30e3";


const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurr.value}`;




for (let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "BDT"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};
window.addEventListener("load", ()=>{
    getExchangeRate();
});
btn.addEventListener("click",async(evt) =>{
    evt.preventDefault();
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input"),
    msg = document.querySelector(".msg");
    exchangeratetxt = document.querySelector(".msg");
    let amtVal = amount.value;
    // console.log(amtVal);
    if(amtVal==""||amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    msg.innerText = "Getting exchange rate...";
    fetch(url).then(response =>response.json()).then(result=>{
        let exchangerate = result.conversion_rates[toCurr.value];
        let totalExchangeRate = (amtVal * exchangerate).toFixed(2);
        exchangeratetxt.innerText = `${amtVal} ${fromCurr.value} = ${totalExchangeRate} ${toCurr.value}`;
        console.log(exchangeratetxt);
    
    });
}
// fetch(url).then(response => response.json()).then(result => {
//     let exchangerate = result.conversion_rates[toCurr.value];
//     let totalExchange = (amtVal*exchangerate).toFixed(2);
//     exchangerate.innerText = `${amtVal} ${fromCurr.value} = ${totalExchangeRate} ${toCurr.value}`;
// })
   
    // console.log(fromCurr.value, toCurr.value);
    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}`;
    // let response = await fetch(URL);
    // let data = await response.json();
    // let rate = data[toCurr.value.toLowerCase()];

    // let finalAmount = amtVal * rate;
    // MessageChannel.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

    // console.log(response);

