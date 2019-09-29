var myForm = document.forms.myForm;

var message = document.getElementById("message");

myForm.onsubmit = function(){

    if(myForm.name.value == ""){

        message.innerHTML = "please enter a name";
    
    }
    else{

        message.innerHTML = "";
    }


};