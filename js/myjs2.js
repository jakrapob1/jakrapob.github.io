function getdata(form){
    var fname=form.fname.value;
    var lname=form.lname.value;
    var stdid=form.stdid.value;
    var birthday=form.birthday.value; 
    answer=""
            for(let i=0;i<form.activity.length;i++){
                if(form.activity[i].checked){
                    answer+=form.activity[i].value+ "<br>";
                }
                
                var answer=` ${fname}`;
              
            }
            
    var activity=form.activity.value;
    
       
    var comment=form.comment.value;

    var answer=` ${fname} ${lname}  ${stdid}  ${birthday}  ${activity}  ${comment} `;
    var answer="<b> แสดงข้อมูลตรงนี้ : </b><br> ชื่อ : " +fname;
        answer+="<br> นามสกุล : " +lname;
        answer+="<br> รหัสนักศึกษา : " +stdid;
        answer+="<br> วันเกิด : " +birthday;
        answer+="<br> กิจกรรมที่ชอบ : " +activity;
            
  
        answer+="<br> นิยามเกี่ยวกับตัวเอง : " +comment;
    
    document.getElementById("showindex").innerHTML=answer
}
