let arr = [];

function generateArray(){

    arr = [];

    const container =
    document.getElementById("array-container");

    container.innerHTML = "";

    for(let i=0;i<12;i++){

        let value =
        Math.floor(Math.random()*100)+10;

        arr.push(value);

        const bar =
        document.createElement("div");

        bar.classList.add("bar");

        bar.style.height =
        value * 3 + "px";

        bar.innerHTML = value;

        container.appendChild(bar);
    }
}

async function quickSortStart(){

    await quickSort(arr,0,arr.length-1);
}

async function quickSort(arr,low,high){

    if(low < high){

        let pi =
        await partition(arr,low,high);

        await quickSort(arr,low,pi-1);

        await quickSort(arr,pi+1,high);
    }
}

async function partition(arr,low,high){

    let pivot = arr[high];

    const bars =
    document.getElementsByClassName("bar");

    bars[high].style.background =
    "linear-gradient(to top,#ff512f,#dd2476)";

    let i = low - 1;

    for(let j=low;j<high;j++){

        bars[j].style.background =
        "linear-gradient(to top,#f7971e,#ffd200)";

        await sleep(500);

        if(arr[j] < pivot){

            i++;

            [arr[i],arr[j]] =
            [arr[j],arr[i]];

            updateBars(bars);

            await sleep(500);
        }

        bars[j].style.background =
        "linear-gradient(to top,#00f260,#0575e6)";
    }

    [arr[i+1],arr[high]] =
    [arr[high],arr[i+1]];

    updateBars(bars);

    bars[i+1].style.background =
    "linear-gradient(to top,#00ff87,#60efff)";

    return i + 1;
}

function updateBars(bars){

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

generateArray();
