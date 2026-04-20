const timer_text = document.getElementById("timer-text");
const question = document.getElementById("question");
const option_a = document.getElementById("option-a");
const option_b = document.getElementById("option-b");
const option_c = document.getElementById("option-c");
const option_d = document.getElementById("option-d");
 
const radio_option_a = document.getElementById("radio-option-a");
const radio_option_b = document.getElementById("radio-option-b");
const radio_option_c = document.getElementById("radio-option-c");
const radio_option_d = document.getElementById("radio-option-d");

const next_button = document.getElementById("next-button");
let timer_id = 0;
let curruntQuestionsIndex  = 0;
let score = 0;
const questionBank=

    [
  {
    id:1,
    "question": "What is the largest planet in our solar system?",
    "options": ["Mars", "Saturn", "Jupiter", "Earth"],
    "answer": "Jupiter"
  },
  {id:2,
    "question": "Which gas is most abundant in the Earth's atmosphere?",
    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    "answer": "Nitrogen"
  },
  {
    id:3,
    "question": "Who painted the 'Mona Lisa'?",
    "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    "answer": "Leonardo da Vinci"
  },
  {
    id:4,
    "question": "What is the capital city of Australia?",
    "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "answer": "Canberra"
  },
  {id:5,
    "question": "What is the chemical symbol for gold?",
    "options": ["Au", "Ag", "Fe", "Gd"],
    "answer": "Au"
  },
  {id:6,
    "question": "Which famous scientist developed the theory of relativity?",
    "options": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
    "answer": "Albert Einstein"
  },
  { id:7,
    "question": "In what year did the first man walk on the moon?",
    "options": ["1965", "1969", "1972", "1961"],
    "answer": "1969"
  },
   { id:8,
    "question": "How many continents are there in the world?",
    "options": ["5", "6", "7", "8"],
    "answer": "7"
  },
  { id:9,
    "question": "The Great Barrier Reef is located off the coast of which country?",
    "options": ["Brazil", "Mexico", "Australia", "Indonesia"],
    "answer": "Australia"
  },
  { id:10,
    "question": "What is the process by which plants make their own food?",
    "options": ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
    "answer": "Photosynthesis"
  }
]

const startTimer = ()=>{
let counter=60;
         
timer_id = setInterval(()=>{
    
    timer_text.textContent = counter;
    counter--;
    if(counter<0){
      clearInterval(timer_id);
        // stopTimer();
        if(curruntQuestionsIndex<questionBank.length){
          nextQuestions();
          console.log("true");
        }
        else{
            // alert("your score is "+score+"/10");
        }
       return;  
        
    }
},1000);
};
// const stopTimer = ()=>{
//     clearInterval(timer_id);
// };
const nextQuestions=()=>{
  // calculateResult();
  radio_option_a.checked = false;
  radio_option_b.checked = false;
  radio_option_c.checked = false;
  radio_option_d.checked = false;
  // console.log("correct");

// console.log(radio_option_a.value);
// console.log(radio_option_b.value);
// console.log(radio_option_c.value);
// console.log(radio_option_d.value);

  timer_id.textContent="0";
  clearInterval(timer_id);
  startTimer();
 question.textContent = curruntQuestionsIndex+1+". "+ questionBank[curruntQuestionsIndex].question; 
 option_a.textContent = questionBank[curruntQuestionsIndex].options [0];
 option_b.textContent = questionBank[curruntQuestionsIndex].options [1];
 option_c.textContent = questionBank[curruntQuestionsIndex].options [2];
 option_d.textContent = questionBank[curruntQuestionsIndex].options [3];
 

 if(curruntQuestionsIndex < questionBank.length-1){
  curruntQuestionsIndex++;
  // console.log("correct");
 }else{
   curruntQuestionsIndex++;
  next_button.textContent="submit";

 }
//  console.log( curruntQuestionsIndex);
 
}
const calculateResult =()=>{
  if(radio_option_a.checked){
    if(questionBank[curruntQuestionsIndex-1].answer ==
      questionBank[curruntQuestionsIndex-1].options[0]
    ){
      score++
      // console.log("true");
    }
    else{
      // score--;
    }
  }else if(radio_option_b.checked){
   
    if(questionBank[curruntQuestionsIndex-1].answer ==
      questionBank[curruntQuestionsIndex-1].options[1]
    ){
      score++
      // console.log("true");

    }
  }else if(radio_option_c.checked){
     console.log("option c selected");
    if(questionBank[curruntQuestionsIndex-1].answer ==
      questionBank[curruntQuestionsIndex-1].options[2]
    ){
      score++
      // console.log("true");

    }
  }else if(radio_option_d.checked){
    if(questionBank[curruntQuestionsIndex-1].answer ==
      questionBank[curruntQuestionsIndex-1].options[3]
    ){
      score++
      console.log("true");

    }
  }
  
}
  nextQuestions();
next_button.addEventListener("click",()=>{
  if(curruntQuestionsIndex<questionBank.length){
    calculateResult();
    nextQuestions();
  }else{
    calculateResult();
      alert("your score is "+score+"/10");
    
  }
});