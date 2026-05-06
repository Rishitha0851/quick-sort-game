let arr = [];

function createArray(){

    const input =
    document.getElementById("array-input").value;

    arr = input.split(",").map(Number);

    displayBars();
}

function displayBars(){

    const container =
    document.getElementById("array-container");

    container.innerHTML = "";

    arr.forEach(value => {

        const bar =
        document.createElement("div");

        bar.classList.add("bar");

        bar.style.height =
        value * 3 + "px";

        bar.innerHTML = value;

        container.appendChild(bar);
    });
}

async function quickSortStart(){

    if(arr.length === 0){

        alert("Please enter array!");

        return;
    }

    await quickSort(0,arr.length-1);

    document.getElementById("status").innerHTML =
    "Array Sorted Successfully!";
}

async function quickSort(low,high){

    if(low < high){

        let pi =
        await partition(low,high);

        await quickSort(low,pi-1);

        await quickSort(pi+1,high);
    }
}

async function partition(low,high){

    const bars =
    document.getElementsByClassName("bar");

    let pivot = arr[high];

    bars[high].style.background =
    "linear-gradient(to top,#facc15,#fde68a)";

    let i = low - 1;

    for(let j=low;j<high;j++){

        bars[j].style.background =
        "linear-gradient(to top,#38bdf8,#2563eb)";

        await sleep(600);

        if(arr[j] < pivot){

            i++;

            [arr[i],arr[j]] =
            [arr[j],arr[i]];

            updateBars();

            await sleep(600);
        }

        bars[j].style.background =
        "linear-gradient(to top,#2563eb,#60a5fa)";
    }

    [arr[i+1],arr[high]] =
    [arr[high],arr[i+1]];

    updateBars();

    bars[i+1].style.background =
    "linear-gradient(to top,#facc15,#fde68a)";

    return i + 1;
}

function updateBars(){

    const bars =
    document.getElementsByClassName("bar");

    for(let i=0;i<arr.length;i++){

        bars[i].style.height =
        arr[i] * 3 + "px";

        bars[i].innerHTML =
        arr[i];
    }
}

function sleep(ms){

    return new Promise(resolve =>
    setTimeout(resolve,ms));
}
