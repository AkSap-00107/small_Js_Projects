const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg =document.querySelector(".msg");
for (let select of dropdowns) {
  for (currCode in countryList) {
    // console.log(currCode, countryList[code]);
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
  let currCode = element.value;
  let countyrCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countyrCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
const updateExchangeRate = async()=>{
  
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  // console.log(amtVal);
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data =await response.json();
  // console.log(data);
  let rate =data[toCurr.value.toLowerCase()];
  let outputValue=amtVal*rate;
  msg.innerText=`${amtVal} ${fromCurr.value} = ${outputValue} ${toCurr.value}`;
};
button.addEventListener("click",  (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});
window.addEventListener("load",()=>{
updateExchangeRate();
});