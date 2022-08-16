document.getElementById("btn-submit").addEventListener("click", function(){
    const emailInput = document.getElementById("email-input");
    const emailValue = emailInput.value;

    const passwordvalue = document.getElementById("pass-input");
    const passvalue = passwordvalue.value;

    if (emailValue === 'sontan@baap.com' && passvalue == "baap"){
        window.location.href="bank.html";
    }
});

