function showInput(){
    var objects = JSON.parse(localStorage.getItem('objects') || "[]");
     let myobj={
        name:document.getElementById("fname").value,

        email:document.getElementById("femail").value,
    
     phone: document.getElementById("fphone").value,
    
         date: document.getElementById("timeforcall").value,
    
         time:document.getElementById("time").value

     }
     objects.push(myobj)
      let myobjSerial = JSON.stringify(objects);

     localStorage.setItem("objects", myobjSerial);
  
     console.log(localStorage);
     
     
   }
//    function addNewShow(titleArg, typeArg, genreArg, watchedArg) {
//     // Get array from local storage, defaulting to empty array if it's not yet set
//     var showList = JSON.parse(localStorage.getItem('showList') || "[]");
  
//     var show = {
//       title: titleArg,
//       type: typeArg,
//       genre: genreArg,
//       watched: watchedArg
//     };
//     showList.push(show);
//     localStorage.setItem("showList", JSON.stringify(showList));
//   };
   

//    localStorage.setItem("manish","24");
//    console.log(sessionStorage.getItem("manish"));


