function showInput(){

    var name=document.getElementById("fname").value;

    var email=document.getElementById("femail").value;

    var phone=document.getElementById("fphone").value;

    var date=document.getElementById("timeforcall").value;

    var time=document.getElementById("time").value;

    localStorage.setItem("your name",name);

    localStorage.setItem("your email",email);

    localStorage.setItem("your phone",phone);

    localStorage.setItem("appontment date:",date);
    localStorage.setItem("appontment time",time);
    
   }

//    localStorage.setItem("manish","24");
//    console.log(sessionStorage.getItem("manish"));


