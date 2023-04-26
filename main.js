import { fetchData, postData, deleteData, updateData } from "./src/crud.js";

const textInput = document.querySelector("#task");
const descriptionInput = document.querySelector("#description");
const dateInput = document.querySelector("#date");
let editMode = false;

function displayData(tasks) {
    const taskContainer = document.querySelector(".tasks");
    let taskDiv = "";
    tasks.forEach(task => {
        taskDiv +=
        `<div id="${task.id}" class="task_div">
        <div class="options">
            <i data-bs-toggle="modal" data-bs-target="#exampleModal" class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>
        </div>
            <h2>${task.text}</h2>
            <h3>${task.date}</h3>
            <p>${task.description}</p>

        </div>`
    });

    taskContainer.innerHTML = taskDiv;

    const deleteIcons = document.querySelectorAll(".fa-trash-alt");
    deleteIcons.forEach(icon => {
        icon.onclick = (event) => {
            event.preventDefault();
            const id = event.target.parentElement.parentElement.id;
            deleteData(id).then(item => displayData(item))
        }
    })

    const updateIcons = document.querySelectorAll(".fa-edit");
    updateIcons.forEach(icon => {
        icon.onclick = (event) => {
            event.preventDefault();
            editMode = true;
            const task = event.target.parentElement.parentElement;
            textInput.value = task.children[0].textContent;
            dateInput.value = task.children[1].textContent;
            descriptionInput.value = task.children[2].textContent;        
            const modalId = document.querySelector('.modal-title');
            modalId.innerHTML = `Edit Task <span>${task.id}</span>`
        }
    })

}

const formEl = document.querySelector("form");
formEl.onsubmit = async (event) => {
    event.preventDefault();
    if (textInput.value === "") {
        const errorDiv = document.querySelector(".error");
        errorDiv.textContent = "Privalomas laukas";
    } else {
        if(!editMode){
            const data = {
                text: textInput.value,
                date: dateInput.value,
                description: descriptionInput.value,
                id: Math.floor(Math.random() * 1000 + 1),
            }
            postData(data).then(item => displayData(item))
        } else {
            editMode = false;
            const id = document.querySelector('.modal-title > span').textContent;
            const updatedData = {
                text: textInput.value,
                date: dateInput.value,
                description: descriptionInput.value,
                id: id,
            }
            updateData(updatedData).then(item => displayData(item))
        }
        
    }
}

(() => { fetchData().then(data => displayData(data)) })();