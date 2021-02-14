if (localStorage.getItem("schedule") == null) {
    let schedule = {
        mon: {
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: false,
            16: false,
            17: false,
            18: false
        },
        tue: {
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: false,
            16: false,
            17: false,
            18: false
        },
        wed: {
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: false,
            16: false,
            17: false,
            18: false
        },
        thu: {
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: false,
            16: false,
            17: false,
            18: false
        },
        fri: {
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: false,
            16: false,
            17: false,
            18: false
        }
    }
    localStorage.setItem("schedule", JSON.stringify(schedule));
    console.log(array);
}
array = JSON.parse(localStorage.getItem("schedule"));
for (key in array) {
    let elem = array[key];
    for (keys in elem) {
        if (elem[keys] != false) {
            document.getElementById(`${key}-${keys}`).classList.add('green');
            document.getElementById(`${key}-${keys}`).innerHTML = `${elem[keys][1]} <button class="delete-button" data-id="${key}-${keys}">X</button>`;
            deleteBtn()
        }
    }
}
console.log(array);
function allRecords() {
    for (key in array) {
        let elem = array[key];
        for (keys in elem) {
            if (elem[keys] != false) {
                document.getElementById(`${key}-${keys}`).classList.add('green');
                document.getElementById(`${key}-${keys}`).innerHTML = `${elem[keys][1]} <button class="delete-button" data-id="${key}-${keys}">X</button>`;
            }
        }
    }
}
function filterRecord(e) {
    for (key in array) {
        let elem = array[key];
        for (keys in elem) {
            if (elem[keys] != false) {
                if (elem[keys][0] == e) {
                    document.getElementById(`${key}-${keys}`).classList.add('green');
                    document.getElementById(`${key}-${keys}`).innerHTML = `${elem[keys][1]} <button class="delete-button" data-id="${key}-${keys}">X</button>`;
                }
            }
        }
    }
}
document.querySelector('.choose-name').onchange = (e) => {
    console.log(e.target.value);
    document.querySelectorAll('.green').forEach((elem) => {
        elem.classList.remove('green');
        elem.innerHTML = '';
    })
    if (e.target.value == 'all') {
        allRecords();
        deleteBtn()
    } else {
        filterRecord(e.target.value);
        deleteBtn()
    }
}

function doAll() {
    if (document.querySelector('.choose-name').value == 'all') {
        allRecords();
        deleteBtn()
    } else {
        filterRecord(document.querySelector('.choose-name').value);
        deleteBtn()
    }
}

function deleteBtn() {
    document.querySelectorAll('.delete-button').forEach((elem) => {
        elem.onclick = () => {
            const result = confirm('Вы действительно хотите удалить запись?');
            if (result) {
                let arrayDel = JSON.parse(localStorage.getItem("schedule"));
                let ourElem = elem.getAttribute('data-id');
                arrayDel[ourElem.substring(0, 3)][ourElem.substring(4)] = false;
                document.querySelector(`#${ourElem.substring(0, 3)}-${ourElem.substring(4)}`).classList.remove('green');
                document.querySelector(`#${ourElem.substring(0, 3)}-${ourElem.substring(4)}`).innerHTML = '';
                localStorage.setItem("schedule", JSON.stringify(arrayDel));
            } else {
                console.log('Вы не захотели удалять запись');
            }
        }
    })
}