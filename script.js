function calculateBMI() {
        let weight = document.getElementById("weight").value;
        let height = document.getElementById("height").value;

        if (weight === "" || height === "") {
            alert("Please enter weight and height");
            return;
        }

        height = height / 100;
        let bmi = (weight / (height * height)).toFixed(2);

        let status = "";

        if (bmi < 18.5) status = "Underweight";
        else if (bmi < 24.9) status = "Normal";
        else if (bmi < 29.9) status = "Overweight";
        else status = "Obese";

        document.getElementById("result").innerText =
            `BMI: ${bmi} (${status})`;
    }

    function addTask() {
        let input = document.getElementById("taskInput");
        let taskText = input.value.trim();

        if (taskText === "") {
            alert("Enter a task");
            return;
        }

        let li = document.createElement("li");
        li.innerText = taskText;

        let delBtn = document.createElement("button");
        delBtn.innerText = "X";
        delBtn.className = "delete-btn";

        delBtn.onclick = function () {
            li.remove();
            checkEmpty();
        };

        li.appendChild(delBtn);
        document.getElementById("taskList").appendChild(li);

        input.value = "";
        checkEmpty();
    }

    function checkEmpty() {
        let list = document.getElementById("taskList");
        let msg = document.getElementById("emptyMsg");

        if (list.children.length === 0) {
            msg.style.display = "block";
        } else {
            msg.style.display = "none";
        }
    }