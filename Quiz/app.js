const questions = [
    {
        'que':"What wood is Harry's wand made of?",
        'A':"Birch",
        'B':"Holly",
        'C':"Ash",
        'D':"Oak",
        'correct':"B"
    },
    {
        'que':"What is Ron's middle name?",
        'A':"Bilius",
        'B':"Arthur",
        'C':"Barnabus",
        'D':"Percy",
        'correct':"A"
    },
    {
        'que':"How does Fleur Delacour breathe underwater in the second task?",
        'A':"Partial transfiguration",
        'B':"Gillyweed",
        'C':"Bubble head charm",
        'D':"She doesn't, that's why Harry had to save her sister",
        'correct':"C"
    },
    {
        'que':"What is the incantation for the Dark Mark?",
        'A':"Morsmoder",
        'B':"Morsmorder",
        'C':"Mormordre",
        'D':"Morsmordre",
        'correct':"D"
    },
    {
        'que':"Who was the Potters' secret keeper a week before they were killed?",
        'A':"Sirius Black",
        'B':"Peter Pettigrew",
        'C':"Remus Lupin",
        'D':"Severus Snape",
        'correct':"A"
    },
    {
        'que':"What is the code for the visitors' entrance at the Ministry?",
        'A':"62142",
        'B':"62442",
        'C':"57832",
        'D':"57332",
        'correct':"B"
    },
    {
        'que':"What is the Hogwarts' motto?",
        'A':"Help will always be provided to those who ask for it",
        'B':"Home of the champions",
        'C':"Never tickle a sleeping dragon",
        'D':"Magic is all around you",
        'correct':"C"
    },
    {
        'que':"Who is Percy Weasley's girlfriend in The Chamber of Secrets?",
        'A':"Penelope Clearwater",
        'B':"Cho Chang",
        'C':"Pansy Parkinson",
        'D':"Parvati Patil",
        'correct':"A"
    },
    {
        'que':"When is Hermione's birthday?",
        'A':"23rd December",
        'B':"4th June",
        'C':"1st April",
        'D':"19th September",
        'correct':"D"
    },
    {
        'que':"Which country does Voldemort hide in in The Goblet of Fire?",
        'A':"Macedonia",
        'B':"Switzerland",
        'C':"Albania",
        'D':"Kosovo",
        'correct':"C"
    },
    {
        'que':"Which fruit do you tickle in a painting to get into the Hogwarts kitchens?",
        'A':"Pear",
        'B':"Banana",
        'C':"Apple",
        'D':"Orange",
        'correct':"A"
    },
    {
        'que':"Who did Voldemort plant to kill Dumbledore?",
        'A':"Seamus Finnigan",
        'B':"Draco Malfoy",
        'C':"Peter Pettigrew",
        'D':"Dobby",
        'correct':"B"
    },
    {
        'que':"What does the spell Avis do?",
        'A':"Opens locks",
        'B':"Makes things fly",
        'C':"Makes fireworks",
        'D':"Summons birds",
        'correct':"D"
    },
    {
        'que':"When Hermione brews her first batch of Polyjuice Potion, what does she turn into?",
        'A':"Dog",
        'B':"Cat",
        'C':"Bird",
        'D':"Mouse",
        'correct':"B"
    },
    {
        'que':"Who is the developer of this quiz?",
        'A':"Harry Styles",
        'B':"Donald Duck",
        'C':"Khushi Singhania",
        'D':"JK Rowling",
        'correct':"C"
    }
]
 
let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesbox=document.getElementById("quesbox")
const quesnum=document.getElementById("quesnum")
const optionInputs=document.querySelectorAll(".options")

const loadQuestion = () => {
    if(index === total) {
        return endQuiz();
    }
    reset();
    const data=questions[index];
    console.log(data)
    quesnum.innerText=`Question ${index+1}`
    quesbox.innerText=`${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.A;
    optionInputs[1].nextElementSibling.innerText=data.B;
    optionInputs[2].nextElementSibling.innerText=data.C;
    optionInputs[3].nextElementSibling.innerText=data.D;

}


const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}


const getAnswer = () => {
    let answer;  
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}


const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked=false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = ` <div style="text-align:center "> <h3> Thank you for playing! </h3>
    <h4> ${right} / ${total} are correct <br> Answers: 
    1) Holly
    2) Bilius
    3) Bubble head charm
    4) Morsmordre
    5) Sirius Black
    6) 62442
    7) Never tickle a sleeping dragon
    8) Penelope Clearwater
    9) 19th September
    10) Albania
    11) Pear
    12) Draco Malfoy
    13) Summons birds
    14) Cat
    15) Khushi Singhania
    </h4> </div>`
}


loadQuestion();