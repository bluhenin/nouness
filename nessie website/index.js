/*
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";

  el.style.opacity = 0;
  setTimeout(function() {
      el.parentNode.removeChild(el);
  }, speed);
}

removeFadeOut(document.getElementById('inmain-div1'), 14000);
*/

const form = document.getElementById("txtboxName");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    form.submit();
  }
  
  
});

const form2 = document.getElementById("txtboxAge");
form2.addEventListener("submit", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    form2.submit();
  }
  
  
});

const envelopebtn = document.getElementById("envelopeBtn");
envelopebtn.addEventListener('click', function() {
  var popupContainer = document.getElementById('popup-container');
  var popupBox = document.createElement('div');
  var popupButton = document.createElement('button');
  var closeButton = document.createElement('span');
  
  popupBox.className = 'popup-box';
  popupBox.innerHTML = '<div class = "popup-content"></div>';
  popupButton.className = 'popup-button';
  closeButton.className = 'close-btn';
  closeButton.innerHTML = '&times;';
  
  popupBox.appendChild(closeButton);
  popupBox.appendChild(popupButton);
  popupContainer.appendChild(popupBox);
  
  closeButton.addEventListener('click', function() {
    popupContainer.removeChild(popupBox);
  
  });
  
  popupButton.addEventListener('click', function() {
    location.href = 'home.html';
  
  });
  
  });

function validateName() {
  let x = document.forms["txtboxName"]["name"].value;
  
  if (x == "Youness" || x == "youness") {
    //FADE IN AGE FORM
    const d2 = document.getElementById("inmain-div2");
    const d3 = document.getElementById("inmain-div3");
    
    d2.style.animationName = 'fadeout';
    d2.style.animationDelay = '0s';

    d3.style.animationName = 'fadein';
    d3.style.animationDelay = '1.5s';
    d3.style.display = 'block';

  }

  else {
    alert("get out, this isn't for you");
    return false;
  }
}

function validateAge() {
  let x = document.forms["txtboxAge"]["age"].value;
  
  if (x == "20" || x == "twenty" || x == "Twenty") {
    //  FADE IN LETTER BUTTON
    const d3 = document.getElementById("inmain-div3");
    const ltrDiv = document.getElementById("letter-div");
    
    d3.style.animationName = 'fadeout';
    d3.style.animationDelay = '0s';

    ltrDiv.style.animationName = 'fadein';
    ltrDiv.style.animationDelay = '3s';
    ltrDiv.style.display = 'flex';
    ltrDiv.style.justifyContent = 'center';


  }

  else if (x == "19" || x == "nineteen" || x == "Nineteen" ) {
    alert("but it's your birthday!");
    return false;
  }

  else {
    alert("damn");
    return false;
  }
}

