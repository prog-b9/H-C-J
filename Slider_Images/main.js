let sliderImages = document.querySelectorAll(".container .slider img");
let sliderArray = Array.from(sliderImages);

// Counter
let currentSlider = 1;

// Get Length The Slifer Images
let sliderCounter = sliderArray.length;

// Pagenation ul li
let ul = document.querySelectorAll(".nums li");

// Count Images
let countImgItem = document.querySelector(".count-images span");

// Declere Variable Prev and Next
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

results();
nextBtn.onclick = nextSlider;
prevBtn.onclick = prevSlider;


// Create Function Next Slider
function nextSlider() {

    // Is It Available Or Not Class Active
    if (nextBtn.classList.contains("disabled")) {
        return false;
    } else {
        
        // Add 1 On Click
        currentSlider++;
        
        // Show Results
        results();   
    }
}

// Create Function Prev Slider
function prevSlider() {
    
    // Is It Available Or Not Class Active
    if (prevBtn.classList.contains("disabled")) {
        return false;
    } else {
        // Add 1 On Click
        currentSlider--;
        
        // Show Results
        results();
    }
}

// Function Results
function results() {

    // Remove All Class Active
    removeAllActive();

    // images[0]
    sliderArray[currentSlider - 1].classList.add("active");

    // Add Class Active ul[0/1/2/3] 
    ul[currentSlider - 1].classList.add("active");
    
    // Change Counter Images Item the Header the page
    countImgItem.innerHTML = "#"+currentSlider;


     // Check if On Access the Start Slider Images Stop
     if(currentSlider === 1){
        prevBtn.classList.add("disabled");
    }else{
        prevBtn.classList.remove("disabled");
    }

    // Check if On Access the End Slider Images Stop
    if(currentSlider === sliderCounter){
        nextBtn.classList.add("disabled");
    }
    else {
        nextBtn.classList.remove("disabled");
    }
}


// Function Remove All Class Active
function removeAllActive(){

    // Remove Class Active From The Slider Images display: none
    sliderArray.forEach((img)=>{
        img.classList.remove("active");
    });

     // Remove class Active li
     ul.forEach((li)=>{
        li.classList.remove("active");
    });
}
