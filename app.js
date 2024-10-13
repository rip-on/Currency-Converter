// const BASE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies`;
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}";
// const BASE_URL = "cur_live_SO4CJj5Uwb3W1gwZbIqkSJQy1QlZqFXTeQVUr1SN";
// const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_SO4CJj5Uwb3W1gwZbIqkSJQy1QlZqFXTeQVUr1SN&currencies=EUR%2CUSD%2CCAD";
// const BASE_URL = "cur_live_SO4CJj5Uwb3W1gwZbIqkSJQy1QlZqFXTeQVUr1SN";
// const BASE_URL = "fd3d9d728bc8486584c2839ed3bcedb9";
// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const url = "https://v6.exchangerate-api.com/v6/c32a4d224c95ade1a2bd30e3/latest/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

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
btn.addEventListener("click",async(evt) =>{
    evt.preventDefault();
const updateExchangeRate = async()=>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal);
    if(amtVal==""||amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    };
}
   
    console.log(fromCurr.value, toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount = amtVal * rate;
    MessageChannel.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

    console.log(response);
});
fetch(url).then(response =>response.json().then(result=>{
    console.log(result);
}))

window.addEventListener("load", ()=>{
    updateExchangeRate();
})