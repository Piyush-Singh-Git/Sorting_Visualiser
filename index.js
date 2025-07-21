const arr = document.getElementById("array")
const speed = document.getElementById("speed")
const size = document.getElementById("size")
const lsi = document.getElementById("l_si")
const lsp = document.getElementById("l_sp")
const sortbtn = document.getElementById("sort")
const newbtn = document.getElementById("new")
const algo_con = document.querySelector("#algo_con")
const algo = document.querySelectorAll(".algo")

let sorting_functions =[];
let sorting_index = 0;
// code for side bar
algo.forEach(element => {
    element.addEventListener("click",(e)=>{
        sorting_index=e.target.id
        e.target.style.backgroundColor = "#341c02"
        algo_con.innerText = e.target.innerText
        createArray(size.value)
        updateUI()
        algo.forEach(element => {
            if(element!=e.target){
                element.style.backgroundColor = ""
            }
        });
        
        })
        
});

// code for speed and size slider
lsi.innerText = size.value
lsp.innerText = `${(speed.value)/1000}s`

size.addEventListener("input",(e)=>{
    lsi.innerText = e.target.value
   createArray(e.target.value)
   updateUI()
})
speed.addEventListener("input",()=>{
    lsp.innerText = `${(speed.value)/1000}s`
})

// code for array creation
const array = []
const createArray = (iter)=>{
    array.length = 0
    for (let i = 0; i < iter; i++) {
        array.push( Math.floor(Math.random()*(370-20+1)+20))
        }
}
createArray(size.value)

// new array button
newbtn.addEventListener("click",()=>{
    createArray(size.value)
    updateUI()
})



// UI updating function
const updateUI = (ind)=>{
     arr.innerHTML=""
array.forEach((ele,index)=>{
    const rec = document.createElement("div")
    rec.className = "pole"
    rec.id = `div${index}`
    rec.style.backgroundColor = ind==index ?"black" :"#800020"
    rec.style.height =`${ele}px`
    rec.style.width = array.length >22 ? "21px" : "25px"
    rec.innerText=ele
    arr.appendChild(rec)
})
}
updateUI()
// delay function 
const delay = (t)=>{
return new Promise(resolve =>{setTimeout(resolve,t)})
};
  
  const bubble = async()=>{
    // document.querySelector("#side").style.display="none"
    // document.body.style.justifyContent = "center" 
    // document.querySelector("#container").style.width="90%" 
    // document.querySelector("#container").style.transition="all 1s ease" 
    size.style.display="none"
    speed.style.display="none"
    newbtn.style.display="none"
    for(let i=0;i<array.length;i++){
        for(let j=0;j<(array.length)-i-1;j++){
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j]=array[j+1]
                array[j+1]=temp
                updateUI(j+1)
                await delay(speed.value)
        }
     }
  }
  suc_updateUI()
  size.style.display=""
  speed.style.display="" 
  newbtn.style.display="" 
//   document.body.style.justifyContent = "space-between" 
//   document.querySelector("#container").style.width="75%"
//   document.querySelector("#side").style.display=""
   
}

const insertion = async()=>{
    size.style.display="none"
    speed.style.display="none"
    newbtn.style.display="none"
    for(let i=0;i<array.length;i++){
        let key = array[i]
        let j=i-1
        while(j>=0 && array[j]>key){
            array[j+1]=array[j]
            j=j-1
            ins_updateUI(j+1)
            await delay(100)
            }
        array[j+1]=key
        ins_updateUI(j+1,i)
        await delay(speed.value)
       }
  suc_updateUI()
  size.style.display=""
  speed.style.display="" 
  newbtn.style.display=""
}
sorting_functions = [bubble,insertion,mergeSort]
// sorting algo
const ins_updateUI = (ind,ran)=>{
    arr.innerHTML=""
array.forEach((ele,index)=>{
   const rec = document.createElement("div")
   rec.className = "pole"
   rec.id = `div${index}`
   rec.style.backgroundColor = ind==index ?"black" :"#800020"
   rec.style.height =`${ele}px`
   rec.style.width = array.length >22 ? "21px" : "25px"
   rec.innerText=ele
   arr.appendChild(rec)
})
}

const suc_updateUI = (ind,ran)=>{
    arr.innerHTML=""
array.forEach((ele,index)=>{
   const rec = document.createElement("div")
   rec.className = "pole"
   rec.id = `div${index}`
   rec.style.backgroundColor = ind==index ?"black" :"#228b22"
   rec.style.height =`${ele}px`
   rec.style.width = array.length >22 ? "21px" : "25px"
   rec.innerText=ele
   arr.appendChild(rec)
})
}
const  sort = async()=>{
    if(sorting_index!=2){sorting_functions[sorting_index]()}
    else{
        await mergeSort(array, 0, array.length - 1);
        console.log("After sorting: " + array);
    }
    }
    

sortbtn.addEventListener("click",sort)


// ------------------------------------------------------------------------------------------------

const merge_updateUI = (left,right)=>{
    arr.innerHTML=""
array.forEach((ele,index)=>{
   const rec = document.createElement("div")
   rec.className = "pole"
   rec.id = `div${index}`
   rec.style.backgroundColor = index>=left&&index<=right ?"black" :"#800020"
   rec.style.height =`${ele}px`
   rec.style.width = array.length >22 ? "21px" : "25px"
   rec.innerText=ele
   arr.appendChild(rec)
})
}
const supdateUI = (left,right)=>{
    arr.innerHTML=""
array.forEach((ele,index)=>{
   const rec = document.createElement("div")
   rec.className = "pole"
   rec.id = `div${index}`
   rec.style.backgroundColor = index>=left&&index<=right ?"black" :"#800020"
   rec.style.height =`${ele}px`
   rec.style.width = array.length >22 ? "21px" : "25px"
   rec.innerText=ele
   arr.appendChild(rec)
})
}

// Function to merge two sorted parts of array
async function merge(arr_m, left, middle, right) {
    
    // Length of both sorted aub arr_mays
    let l1 = middle - left + 1;
    let l2 = right - middle;
    // Create new subarr_mays
    let arr_m1 = new Array(l1);
    let arr_m2 = new Array(l2);
    
    // Assign values in subarr_mays
    for (let i = 0; i < l1; ++i) {
        arr_m1[i] = arr_m[left + i];
    }
    for (let i = 0; i < l2; ++i) {
        arr_m2[i] = arr_m[middle + 1 + i];
    }

    // To travesrse and modify main arr_may
    let i = 0,
        j = 0,
        k = left;
        
    // Assign the smaller value for sorted output
    while (i < l1 && j < l2) {
        if (arr_m1[i] < arr_m2[j]) {
            arr_m[k] = arr_m1[i];
            ++i;
            await delay(10)
            updateUI()
        } else {
            arr_m[k] = arr_m2[j];
            j++;
            await delay(10)
            updateUI()
        }
        k++;
    }
    // Update the remaining elements
    while (i < l1) {
        arr_m[k] = arr_m1[i];
        i++;
        k++;
        await delay(10)
        updateUI()
    }
    while (j < l2) {
        arr_m[k] = arr_m2[j];
        j++;
        k++;
        await delay(10)
            updateUI()
    }
}

// Function to implement merger sort in javaScript
async function mergeSort(arr_m, left, right) {
    if (left >= right) {
        return;
    }
    merge_updateUI(left,right)
    await delay(500)
    
    // Middle index to create subarr_may halves
    let middle = left + parseInt((right - left) / 2);
    
    // Apply mergeSort to both the halves
     await mergeSort(arr_m, left, middle);
     await mergeSort(arr_m, middle + 1, right);
    
    // Merge both sorted parts
    await merge(arr_m, left, middle, right);
}

// Input arr_may
// const arr_m =  [ 38, 27, 43, 10,97,180,363,299,122,28,76,170,275,299,357,368,365,342,235,348,50,297,77,240]

// Display input arr_may
console.log("Original arr_may: " + array);

// Apply merge sort function
// mergeSort(arr_m, 0, arr_m.length - 1);
// Display output
