function showInput(){
     let myobj={
        name:document.getElementById("fname").value,

        email:document.getElementById("femail").value,
    
     phone: document.getElementById("fphone").value,
    
         date: document.getElementById("timeforcall").value,
    
         time:document.getElementById("time").value

     }
     
      let myobjSerial = JSON.stringify(myobj);

     localStorage.setItem("myobj", myobjSerial);
  
     console.log(localStorage);
     
     
   }
   
   

//    localStorage.setItem("manish","24");
//    console.log(sessionStorage.getItem("manish"));


