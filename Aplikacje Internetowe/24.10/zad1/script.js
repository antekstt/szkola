function validataemail(email) {
    const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById("emailForm").onsubmit =function(event)
{event.preventDefault();
    const email=document.getElementById("emailInput").value;
    const message=document.getElementById("errorMessage");

    if (!validataemail(email)){
        message.textContent="Prosze wprowadz porawny email";
    } else{
        message.textContent="";
        window.location.href ="https://example.com/";
    }
};