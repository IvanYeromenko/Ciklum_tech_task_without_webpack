function myFunction() {
    //Getting input info
    var inputEventName = document.querySelector(".event-name").value;
    var chosenPerson = document.querySelector(".select-participants").value;
    var chosenDay = document.querySelector(".select-days").value;
    var chosenTime = document.querySelector(".select-time").value;

    array = JSON.parse(localStorage.getItem("schedule"));
    if (array[chosenDay][chosenTime] != false) {
        alert('Эта дата уже занята')
    } else {
        array[chosenDay][chosenTime] = [chosenPerson, inputEventName];
        localStorage.setItem("schedule", JSON.stringify(array));
    }

    alert(`newEvent ={
    event: "${inputEventName}",
    person: "${chosenPerson}",
    day: "${chosenDay}",
    time: "${chosenTime}"}`);
    window.open('./index.html');

}