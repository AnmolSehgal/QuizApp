var count =0;
var numQuestion = 0 ; 

var questions = [
    {
        question : "A complete graph can have",
        option1:"n2 spanning trees",
        option2:"n2-spanning trees",
        option3:"n2-spanning trees",
        option4:"n2-spanning trees",
        answer:"n2 spanning trees"

    },
    {
        question : "What is the full form of CSS",
        option1:"Javascript",
        option2:"Java",
        option3:"HTML",
        option4:"None of these",
        answer:"None of these"

    },
    {
        question : "How to include javascript in HTML document",
        option1:"body",
        option2:"p",
        option3:"script",
        option4:"None of these",
        answer:"script"

    },
    {
        question : "How to declare variable in javascript",
        option1:"var",
        option2:"int",
        option3:"float",
        option4:"string",
        answer:"var"

    },
    {
        question : "What => means in javascript",
        option1:"Normal Function",
        option2:"Arrow Function",
        option3:"Anonymous Function",
        option4:"None of these",
        answer:"Arrow Function"

    },
    {
        question : "Which of thes is not a javascript framework",
        option1:"Django",
        option2:"react",
        option3:"angular",
        option4:"Node",
        answer:"Django"

    },
    {
        question : "How do we define objects in js",
        option1:"[]",
        option2:"{}",
        option3:"()",
        option4:"<>",
        answer:"{}"

    },
    {
        question : "Which of these is not a valid js version",
        option1:"EX19",
        option2:"ES5",
        option3:"ES6",
        option4:"All of the above",
        answer:"EX19"

    },
    {
        question : "Whats the output of '2'+2",
        option1:"NaN",
        option2:"4",
        option3:"22",
        option4:"None of the above",
        answer:"22"

    },
    {
        question : "Whats the output of '2'-1",
        option1:"21",
        option2:"3",
        option3:"NaN",
        option4:"None of the above",
        answer:"3"

    },
    {
        question : "How to check if a value is NaN in javascript",
        option1:"isNaN(val)",
        option2:"isNaN()",
        option3:"Both",
        option4:"None of the above",
        answer:"isNaN(val)"

    },
];
function startQuiz()
{
     var a= document.getElementsByTagName("button");
     var id="",val="";
     document.getElementById("isAnswer").innerHTML="";
          document.getElementById("isAnswer").className = "";
     if(a[0].innerHTML==="Start" || a[0].innerHTML === "Next")
     {
        document.getElementById("op1").innerHTML ="";
        document.getElementById("op2").innerHTML ="";
        document.getElementById("op3").innerHTML ="";
        document.getElementById("op4").innerHTML ="";
         
         val="Submit";
         id = "submitBtn";
         a[0].innerHTML = val;
         a[0].id = id;
         if(numQuestion<questions.length)
         {
             document.getElementById("ques").innerHTML = questions[numQuestion].question;
             document.getElementById("op1").innerHTML =`<input name="opt" type="radio" value="${questions[numQuestion].option1}"> ${questions[numQuestion].option1}`;
             document.getElementById("op2").innerHTML =`<input name="opt" type="radio" value="${questions[numQuestion].option2}"> ${questions[numQuestion].option2}`;
             document.getElementById("op3").innerHTML =`<input name="opt" type="radio" value="${questions[numQuestion].option3}"> ${questions[numQuestion].option3}`;
             document.getElementById("op4").innerHTML = `<input name="opt" type="radio" value="${questions[numQuestion].option4}"> ${questions[numQuestion].option4}`;
             numQuestion++;
         }
         else if(numQuestion===questions.length)
         {
             document.getElementById("ques").innerHTML = "";
             document.getElementById("quizTitle").innerHTML=`Score: ${count}`;
             document.getElementById("ques").innerHTML="Answers"
             val="Restart";
             id = "startBtn";
             a[0].innerHTML = val;
             a[0].id = id;
             var node = document.createElement("ul");
             document.getElementById("opt").appendChild(node);
             document.getElementsByTagName("ul")[1].id = "answerUl";
             for(var i=0;i<questions.length;i++)
             {
                 node = document.createElement("li");
                 document.getElementsByTagName("ul")[1].appendChild(node);
                 var a=document.querySelectorAll("ul");
                 a[1].childNodes[i].innerHTML=`${questions[i].question}&nbsp&nbsp<span class="answerStyle">${questions[i].answer}</span>`

             }
         }
     }
     else if(a[0].innerHTML==="Submit")
     {
            var flag = 0;
            var ans = document.getElementsByName("opt");
            
            for(var i=0;i<ans.length;i++)
            {
                if(ans[i].checked && ans[i].value ===questions[numQuestion-1].answer)
                {
                    flag=1;
                    count++;
                    var isAns =document.getElementById("isAnswer");                     isAns.innerHTML="Correct";
                isAns.className = "CorrectAnswer"
                    break;
                }
            }
            if(flag===0){
                var isAns =document.getElementById("isAnswer");                     isAns.innerHTML="Incorrect";
                isAns.className = "IncorrectAnswer";
            }
            val="Next";
            id = "nextBtn";
            a[0].innerHTML = val;
            a[0].id = id;
         
     }
     else if(a[0].innerHTML==="Restart")
     {
         
         val ="Start";
         id="startBtn" 
         a[0].innerHTML = val;
         a[0].id = id;
         document.getElementById("quizTitle").innerHTML=`Quiz`;
             document.getElementById("ques").innerHTML=""
         numQuestion=0;
         count=0;
         var pBrTag = document.getElementById("opt"); 
         while (pBrTag.childNodes.length > 2) {
    pBrTag.removeChild(pBrTag.lastChild);
}
        console.log(pBrTag.innerHTML)
     }
     
}