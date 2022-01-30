const container = document.querySelector('.fireworks-example')
const fireworks = new Fireworks(container, {
      rocketsPoint: 50,
      hue: { min: 0, max: 360 },
      delay: { min: 15, max: 30 },
      speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 50,
      trace: 3,
      explosion: 5,
      autoresize: true,
      brightness: { 
        min: 50, 
        max: 80,
        decay: { min: 0.015, max: 0.03 }
      },
      mouse: { 
        click: false, 
        move: false, 
        max: 3 
      },
      boundaries: { 
        x: 50, 
        y: 50, 
        width: container.clientWidth, 
        height: container.clientHeight 
      },
      sound: {
        enable: true,
        files: [
          'explosion0.mp3',
          'explosion1.mp3',
          'explosion2.mp3'
        ],
        volume: { min: 1, max: 2 },
      }
});

let form = document.querySelector("form")
let inputs = form.querySelectorAll("input")
let h4 = document.querySelector("h4")
let userError = document.querySelector("#userError")
let ageError = document.querySelector("#ageError")

let resume = (node, elem, text) => {
    let para = document.createElement(elem);
    para.innerHTML = text;
    document.querySelector(node).appendChild(para);
}

let bodyColor = () => {
    let valueColor = document.querySelector("#validationServer02").value
    let walpaper = document.querySelector("body")
    walpaper.style.backgroundColor = valueColor;
}

let dataVerif = (e) => {
    e.preventDefault();
    let username = inputs[0];
    let age = inputs[1];
    let success = [];
    if(username.value.length < 3) {
        username.classList.remove("is-valid")
        username.classList.add("is-invalid")
        userError.classList.add("invalid-feedback")
        userError.classList.remove("valid-feedback")
        userError.textContent = "Must be 3 letters minimum"
        usernameSuccess = false;
    } else {
        username.classList.remove("is-invalid")
        username.classList.add("is-valid")
        userError.classList.remove("invalid-feedback")
        userError.classList.add("valid-feedback")
        userError.textContent = "Look good !"
        usernameSuccess = true;
    }
    if(age.value < 18) {
        age.classList.add("is-invalid")
        age.classList.remove("is-valid")
        ageError.classList.add("invalid-feedback")
        ageError.classList.remove("valid-feedback")
        ageError.textContent = "Too young for this content"
        ageSuccess = false;
    } else {
        age.classList.remove("is-invalid")
        age.classList.add("is-valid")
        ageError.classList.remove("invalid-feedback")
        ageError.classList.add("valid-feedback")
        ageError.textContent = "Look good !"
        ageSuccess = true;
    }
    success.push(usernameSuccess, ageSuccess)
    if(success.includes(false)) {
        console.log("error");
    } else {
        fireworks.start();
        form.style.display = "none"
        bodyColor()
        h4.innerHTML = "Thanks for your submit " + username.value.toUpperCase()
        console.log(age.value)
        resume("#div1", "p", "You are allow to access to this site, because you are " + age.value + " years old")
        resume("#div1", "p", "You favorite color " + inputs[2].value + " is now on walpaper !")
        resume("#div2", "a", "Restart")
        let restart = document.querySelector("#div2 a")
        restart.classList.add("btn")
        restart.classList.add("btn-primary")
        restart.href = window.location.href
    }
}

form.addEventListener("submit", dataVerif)