function validate(){
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // name 

    if(name.length == 0){
        document.getElementById("error-show").innerHTML = "your name is require";
        return false;
    }else if(!name.match(/^[A-Za-z]+\s{1}[A-Za-z]{1,20}$/)){
        document.getElementById("error-show").innerHTML = "Enter your full name is require";
        return false;
    }else{
        document.getElementById("error-show").innerHTML = " ";
    }

    // number

    if(number.length == 0){

        document.getElementById("error-show").innerHTML = "your number is require";
        return false;

    }else if(!number.match(/^\d{10}$/)){

        document.getElementById("error-show").innerHTML = "Enter your valid phone number";
        return false;
    }
    else{
        document.getElementById("error-show").innerHTML = " ";
    }

    // email 

    if(email.length == 0){
        document.getElementById("error-show").innerHTML = "your email is require";
        return false;

    }else if(!email.match(/^\w{1}[a-zA-Z0-9_.-]+@[A-Za-z0-9-]+\.[a-zA-Z]{2,3}$/)){

        document.getElementById("error-show").innerHTML = "Enter valid email";
        return false;

    }else{
        document.getElementById("error-show").innerHTML = " ";
    }

    // message 

    if(message.length < 1){

        document.getElementById("error-show").innerHTML = "write message";
        return false;

    }else{

        document.getElementById("error-show").innerHTML = " ";

    }
}