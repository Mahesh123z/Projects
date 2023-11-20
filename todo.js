const inputText = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function records() {
    if (inputText.value !== '') {
        const list = document.createElement("li");
        list.classList.add("container")
        const btn1=document.createElement("Button");
        btn1.classList.add("done");
        const btn2=document.createElement("Button");
        btn2.classList.add("remove");
        btn1.innerText="Done";
        btn2.innerText="Remove";
        list.innerText=inputText.value;
        taskList.appendChild(list);
        list.appendChild(btn1);
        list.appendChild(btn2);
        
        btn1.addEventListener('click',
            function () {
                list.style.textDecoration = "line-through";
            }
        );

        btn2.addEventListener('click',
            function () {
                list.remove()
            }
        );
    }

    inputText.value = "";

}
