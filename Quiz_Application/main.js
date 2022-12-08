// Select Element 
let questionCount = document.querySelector(".quiz-app .question-count span");
let bullets = document.querySelector(".quiz-app .bullets");
let points = document.querySelector(".quiz-app .bullets .points");
let pointsLi = document.querySelector(".quiz-app .bullets .points li");
let countDownElement = document.querySelector(".quiz-app .bullets .countdown");
let nowQuestion = document.querySelector(".quiz-app .now-question");

//Areas Questions And Answers
let questionArea = document.querySelector(".quiz-app .question-area");
let answerArea = document.querySelector(".quiz-app .answer-area");

//counter the question 
let counter = 0;
let rightAnswerBadGoodPerfect = 0;
//the var is global becouse on / off the timer
let countDownInterval;

//select Submit
let submitBtn = document.querySelector(".quiz-app .submit");






//Counter For The Questions
function createBullets(num) {
    questionCount.innerHTML = num;

    // create li inside the bullets 
    for (let i = 0; i < num; i++) {
        let li = document.createElement("li");

        if (i === 0) {
            li.className = "active";
        }
        points.appendChild(li);
        
    }
    
}


function addQuestionData(obj,count) {
   if (counter < count) {
        // console.log(obj);
        // console.log(count);


        //create question Title
        let questionTitle = document.createElement("div");
        //add class Name for div
        questionTitle.className = "question";

        //create text for question
        let questionText = document.createTextNode(obj['title']);

        questionTitle.appendChild(questionText);

        questionArea.appendChild(questionTitle);


        for (let i = 1; i <= 4; i++) {
            //create div For Answer
            let divAnswer = document.createElement("div");
            //add class For Answer
            divAnswer.className = "answer";

            let inputRadio = document.createElement("input");
            
            inputRadio.setAttribute("type","radio");
            inputRadio.setAttribute("id",`answer_${i}`);
            inputRadio.setAttribute("name","questions");
            inputRadio.dataset.answer = obj[`answer_${i}`];

            divAnswer.appendChild(inputRadio);

            let label = document.createElement("label");
            // label.className = "active";
            label.setAttribute("for",`answer_${i}`);
            let labelText = document.createTextNode(obj[`answer_${i}`]);

            // if (i === 1) {
            //     inputRadio.checked = true;
            // }

            // check if click the answer right addtion class active
            // if (obj[`answer_${i}`] === obj['right_answer']) {
            //     label.className = "active";
            // }

            label.appendChild(labelText);

            divAnswer.appendChild(label);

            answerArea.appendChild(divAnswer);

        }
   }

}

function checkAnswer(rightAnswer,count) {
    // console.log(count);

    // get All Answer For Attribute (name = questions)
    let answers = document.getElementsByName("questions");
    let theChoosenAnswer;

    for (let i = 0; i < answers.length; i++) {
        
        //check if checked ifi storage in the variable
        if (answers[i].checked) {
            //storaging assigment the checked in the theChoosenAnswer
            theChoosenAnswer = answers[i].dataset.answer;
        }
    }

    // console.log(rightAnswer);
    // console.log(theChoosenAnswer);

    if (rightAnswer === theChoosenAnswer) {
        // console.log("Good Answer");
        rightAnswerBadGoodPerfect++;
    }


}

// Addition Class Active On the Points
function addActiveOnLi() {
    let pointsLi = document.querySelectorAll(".quiz-app .bullets .points li");
    pointsLi.forEach((li,index)=>{
        // console.log(li);
        if (counter == index) {
            li.classList.add("active");
        }
        
    });
}


function showResults(obj,count) {
    // if finshed the question show the right answer ( look at top the page / rightAnswerBadGoodPerfect++ / )
    if (counter === count) {

        //Remove the Elements
        questionArea.remove();
        answerArea.remove();
        submitBtn.remove();
        bullets.remove();
        nowQuestion.remove();
        
        // Access For The Results And Answers
        let resultsContainer = document.querySelector(".quiz-app .results");
        let resultSpan;
        resultsContainer.style.cssText = `
            background-color: #fff;
            margin-top: 10px;
            padding: 15px;
            min-height: 100px;
            display: flex;
            align-items:center;
            font-weight: bold;`;
            
            if (rightAnswerBadGoodPerfect === count ) {
                resultSpan =`<div><span class="perfect">perfect</span> Your Answered <span style="color:green">${rightAnswerBadGoodPerfect}</span>  form ${count}</div>`;
            }else if(rightAnswerBadGoodPerfect > (count / 2)  && rightAnswerBadGoodPerfect < count){
                resultSpan =`<div><span class="good">good</span> Your Answered  <span style="color:orange">${rightAnswerBadGoodPerfect}</span> form ${count}</div>`;
            }else{
                resultSpan =`<div><span class="bad">bad</span> Your Answered <span style="color:red">${rightAnswerBadGoodPerfect}</span> form ${count}</div>`;
            }
            
            resultsContainer.innerHTML = resultSpan;
    }
};

// CountDown Timer
function countDown(diration,count) {
    // Must be less or equal the question
    // counter = questionOfNumber.length
    // count = counter
    //diration == timer 
    if (counter < count) {
        let minutes,seconds;
        countDownInterval = 
            setInterval(() => {
                // Minutes Of Number
                minutes = parseInt(diration / 60);
                // Seconds Of Number % From THe Minutes
                seconds = parseInt(diration % 60);
                
                minutes = minutes < 10 ? `0${minutes}`: minutes;
                seconds = seconds < 10 ? `0${seconds}`: seconds;

                countDownElement.innerHTML = `${minutes}:${seconds}`

                // if less from zero stop the countDown
                if (--diration < 0) {
                    clearInterval(countDownInterval);
                    // auto click the submit if setInterval = 0
                    submitBtn.click();
                }
                // 1000 = the seconds minus one the seconds
        }, 1000);

    }
}





//Get All Data From JSON
function getQuestions() {
    
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = ()=>{
        if (myRequest.readyState === 4 && myRequest.status === 200) {

            //this print json

            // console.log(myRequest.responseText);

            //here convert file json from json to javaScript becouse i deal with her 
            let myData = JSON.parse(myRequest.responseText);
            // console.log(myData);

            let questionsOfNumber = myData.length;

            // console.log(questionsOfNumber); => 10 Q

            // this is function an accounting the Counter For The Questions
            createBullets(questionsOfNumber);


            // this function addtion question and answer
            addQuestionData(myData[counter],questionsOfNumber);

            document.querySelector(".question-number").innerHTML = counter + 1; 


            // Start CountDown without On Submit
            // 150 / 60 = no value integer
            // 150 / 60 => (take 120 / 60 = 2 minutes) (moduls from 150 to 120 = 30 seconds)
            countDown(4,questionsOfNumber);

            // Click On The Submit
            submitBtn.onclick = ()=>{
                if (counter < questionsOfNumber) {
                    // Get The Right Answer If The Click The Submit
                    let rightAnswer = myData[counter].right_answer;

                    // on click submit next the question
                    counter++;

                    checkAnswer(rightAnswer,questionsOfNumber);
                    
                    //Remove previce the question
                    questionArea.innerHTML = "";
                    answerArea.innerHTML = "";

                    // on click change the question
                    addQuestionData(myData[counter],questionsOfNumber);
                    
                    // Addition Class Active On the Points
                    addActiveOnLi();
                    //Show Result
                    showResults(myData[counter],questionsOfNumber);
                    

                    // CountDown Timer
                    clearInterval(countDownInterval);
                    countDown(4,questionsOfNumber);
                  
                    // question the Number
                    if (counter < questionsOfNumber) {
                        document.querySelector(".question-number").innerHTML = counter + 1; 
                    }
                }
            };
        };
    };



    myRequest.open("GET","html_questions.json",true);
    myRequest.send();
}

getQuestions();

// anther fetch the json

// fetch("html_questions.json")
// .then(
//     function getProperity(res) {
//         let myData = res.json();
//         return myData;
//     }
// ).then(
//     function print(res) {
//             console.log(res);
       
//     }
// )