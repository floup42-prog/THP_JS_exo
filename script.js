console.log("Fonctionnalité 1 :");


let i = 0;
function myFunction() {
      console.log("clique");
      console.log(i++);
    };


console.log("Fonctionnalité 2 :");


function myFunction_toggle() {
    let x = document.getElementById("navbarHeader");
    x.classList.toggle('collapse')
  };


console.log("Fonctionnalité 3 :");


function myFunction_red() {
  var element = document.getElementById("card01");
  element.classList.add("bg-danger");
};


console.log("Fonctionnalité 4 :");


function myFunction_green() {
  var element = document.getElementById("card02");
  if (element.classList == "card mb-4 box-shadow bg-success"){
    element.classList.remove("bg-success");
    }
    else{
      element.classList.add("bg-success");
    }
};


// console.log("Fonctionnalité 5 :");


// function myFunction_nav(){
//   var cdn = document.getElementsByTagName("link");
//   cdn.classList.remove("bg-success");
// }
// function myFunction_nav(link {
//   pointer-events:none;
// })

// function myFunction_nav(e){
//   var cdn = document.getElementsByTagName("link");
//   e.preventDefault(cdn);
  
// };

// console.log("Fonctionnalité 6 :");


// console.log("Fonctionnalité 7 :");


// console.log("Fonctionnalité 8 :");


// console.log("Fonctionnalité 9 :");

