console.log("Fonctionnalité 1 : clique sur le footer");


let i = 0;
function myFunction() {
      console.log("clique");
      console.log(i++);
    };


console.log("Fonctionnalité 2 : clique sur le menue hamburger");


function myFunction_toggle() {
    let x = document.getElementById("navbarHeader");
    x.classList.toggle('collapse')
  };


console.log("Fonctionnalité 3 : clique sur le edit de la 1er card");


function myFunction_red() {
  var element = document.getElementById("card01");
  element.classList.add("bg-danger");
};


console.log("Fonctionnalité 4 : clique sur le edit de la 2éme card");


function myFunction_green() {
  var element = document.getElementById("card02");
  if (element.classList == "card mb-4 box-shadow bg-success"){
    element.classList.remove("bg-success");
    }
    else{
      element.classList.add("bg-success");
    }
};


console.log("Fonctionnalité 5 : double clique sue la navbar");


function myFunction_nav() {
  var x = document.getElementById("mySelect");
  x.remove()
}

// console.log("Fonctionnalité 6 :");


// console.log("Fonctionnalité 7 :");


// console.log("Fonctionnalité 8 :");


// console.log("Fonctionnalité 9 :");