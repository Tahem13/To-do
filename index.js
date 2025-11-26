// Variables
const submit = document.getElementById("submit");
const textBox = document.getElementById("text");
const div = document.getElementById("to-do");
const counter = document.getElementById("counter");

let i = 1;
let no = 0;
let complete = 0;

// Submit button clicked
submit.onclick = function() {
    no += 1;
    let text = textBox.value;
    const list = document.createElement("li"); // Create list element
    const newList = document.createElement("div"); // Create div element
    const textSpan = document.createElement("span");
    textSpan.innerHTML = text; // Change its text to the value of what you typed
    newList.appendChild(textSpan);
    list.appendChild(newList);
    div.appendChild(list);
    i++;
    list.setAttribute("id", i);
    textBox.value = "";

    let button = document.createElement("button");
    button.innerHTML = "X";
    newList.appendChild(button);
    button.onclick = function() {
        list.remove()
    }

    let button1 = document.createElement("button");
    button1.id = "button1";
    button1.innerHTML = "✔";
    newList.appendChild(button1);

    button1.onclick = function() {
        textSpan.style.textDecoration = "line-through";
        textSpan.style.textDecorationThickness = "3px";
        textSpan.style.textDecorationColor = "black";
        button1.remove(); // Delete ✔ button after clicking
        complete += 1;
        counter.innerHTML = complete + "/" + no;
    };
    counter.innerHTML = complete + "/" + no;
}