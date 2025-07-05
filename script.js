let count = 0;
let tasbihs = 0;
let maxCount = 100;
let goalTasbih = 10;

function setCustomSettings() {
    const maxInput = parseInt(document.getElementById("maxCountInput").value);
    const goalInput = parseInt(document.getElementById("goalTasbihInput").value);

    if (maxInput > 0) maxCount = maxInput;
    if (goalInput > 0) goalTasbih = goalInput;

    document.getElementById("max-count").innerText = maxCount;
    reset();
}

function increase() {
    count++;
    if (count > maxCount) {
        tasbihs++;
        count = 1;
    }
    updateDisplay();
}

function reset() {
    count = 0;
    tasbihs = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("counter").innerText = count;
    document.getElementById("tasbih-count").innerText = tasbihs;

    const message = document.getElementById("message");

    if (tasbihs < goalTasbih) {
        message.innerText = "In sha Allah! Keep counting to achieve your goal.";
        message.className = "orange-text";
    } else {
        message.innerText = "Mashallah! You've achieved your goal.";
        message.className = "green-text";
    }
}
