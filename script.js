function setColor(color){ 
    let elements = document.querySelectorAll('p, h1, h2, h3, h4, li, label');
    elements.forEach(function(element) {
        element.style.color = color;
    });

    let x = document.getElementById("IDEAndPL"); 
    x.style.borderColor = color;
}

document.getElementById("darkmode").addEventListener("click", (event)=>{ 
    event.preventDefault(); 
    let x = document.getElementsByTagName("body")[0]; 
    x.style.backgroundImage = "linear-gradient(to bottom, #000000, #333333)";

    setColor("white");
});


document.getElementById("lightmode").onclick = function(){ 
    let x = document.getElementsByTagName("body")[0]; 
    x.style.backgroundImage = "linear-gradient(to right, #FFC0CB, #E6E6FA)";
    setColor("black");
}

    

document.getElementById("submit").addEventListener("click", (event)=>{ 
    event.preventDefault();
    let x = document.getElementById("fname").value;
    let y = document.getElementById("lname").value; 
    let z = document.getElementById("check").checked; 
    let m = document.getElementById("email").value; 

    if(z){ 
        if(x.length == 0 || y.length == 0 || m.length == 0){ 
            displayErrorMessage("Fields should not be empty");
            } else if(m.indexOf("@") == -1){ 
                displayErrorMessage("Enter a valid email");
            } else { 
                window.alert("Thank you for contacting me"); 
                window.location.reload();
            }
    } else { 
        displayErrorMessage("Please check the box");
    }
});

function displayErrorMessage(message){ 
    let d = document.getElementById("demo");
    d.style.color = "red";
    d.innerHTML = message;
}

function displaySuccessMessage(message){ 
    let d = document.getElementById("demo"); 
    d.style.color = "green"; 
    d.innerHTML = message;
}

document.getElementById("ComputerSystem").addEventListener("click", (event)=>{ 
    event.preventDefault(); 
    let x = document.getElementById("p1"); 
    x.textContent = "Using the knowledge from Assembly language that I learned in class for about 3 weeks, I used the Little Men Computer to perform X^3 without using the \"mul\" function";

    let y = document.getElementById("imgCS"); 
    y.src = "Media/1120.png";
});