document.getElementById("btn-deposit").addEventListener("click",function(){
    const depositInput = document.getElementById("deposit-input");
    const depositValue = depositInput.value;
    const depositInt = parseFloat(depositValue);
    
    const depositBalance = document.getElementById("deposit-balance");
    const depositString = depositBalance.innerText;
    const deposit = parseFloat(depositString);
    const currentBlance = depositInt + deposit;
    depositBalance.innerText =currentBlance;

    const mainBalance = document.getElementById("balance");
    const currentMainBalance= mainBalance.innerText;
    const currentMain = parseFloat(currentMainBalance);
    const mainBalanceM = currentMain + depositInt;
    mainBalance.innerText = mainBalanceM;

    depositInput.value = "";
});

document.getElementById("btn-withdaw").addEventListener("click",function(){
    const withdawInput = document.getElementById("withdaw-input");
    const withdawValue= withdawInput.value;
    const withdawInt = parseFloat(withdawValue);

    const withdawbalance = document.getElementById("withdaw-balance");
    const withdawInteger = withdawbalance.innerText;
    const withdawText = parseFloat(withdawInteger);
    withdawbalance.innerText = withdawInt + withdawText;

    const mainBalance = document.getElementById("balance");
    const currentMainBalance= mainBalance.innerText;
    const currentMain = parseFloat(currentMainBalance);
    const mainBalanceM = currentMain - withdawInt;
    mainBalance.innerText = mainBalanceM;

    withdawInput.value ="";
})


















