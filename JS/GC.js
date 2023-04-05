function checkEligibility() {
    
var grade = document.getElementById("mark").value;
console.log(grade)

    if(grade>=90){
        document.getElementById('output').innerHTML="You can go to Harvard or Yale!"
            console.log("You can go to Harvard or Yale!")
    }
    else if(grade>=80 &&  grade<90){
        document.getElementById('output').innerHTML="You can go to Georgia tech or Stanford."
        console.log("You can go to Georgia tech or Stanford")
    }
    else if(grade>=70 &&  grade<80){
        document.getElementById('output').innerHTML="I will recomend Colorado Tech university."
        console.log("I will recomend Colorado Tech university.")
    }
    else if(grade>=60 &&  grade<70){
        document.getElementById('output').innerHTML="Try attending your local colleges or universities. Maybe try to take the exams again."
        console.log("Try attending your local colleges or universities. Maybe try to take the exams again.")
    }
    else{
        document.getElementById('output').innerHTML="You may have to consider low ranking colleges and/or universities and reappear for the exam."
        console.log("You may have to consider low ranking colleges and/or universities and reappear for the exam.")
    }



}