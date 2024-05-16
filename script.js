const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");

buttonEl.addEventListener("click", ()=>{
  diceEl.classList.add("roll-animation");
  setTimeout(()=>{
    diceEl.addEventListener.remove("roll-animation");
  }, 1000)
});