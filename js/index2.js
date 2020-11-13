function getdata(form){
    var fname=form.fname.value;
    var lname=form.lname.value;
    var answer=` ${fname} ${lname}`;
    
    document.getElementById("showanswer").innerHTML=answer;
}
