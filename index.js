
function myFunction() {
  let header = document.getElementsByClassName("header-part")[0];
  if (header.className === "header-part") {
    header.className += " responsive";
  } else {
    header.className = "header-part";
  }
}


var app = document.getElementById('extra');

var customNodeCreator = function(character) {
  return document.createTextNode(character);
}

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  onCreateTextNode: customNodeCreator,
});

typewriter
  .typeString("<span style='color: lime; font-family: courier new'><strong> while(!(success = try())); </strong></span>")
  .pauseFor(300)
  .start();



//! Can use loops inside async functions
function Colortoyellow() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve($("body").addClass("change-color-yellow").removeClass("change-color-green"))
      }, 2*1000);
    });
  }

function Colortogreen() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve($("body").addClass("change-color-green").removeClass("change-color-violet"))
    }, 2*1000);
  });
}

function Colortoviolet() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve($("body").addClass("change-color-violet").removeClass("change-color-yellow"))
    }, 2*1000);
  });
}


async function f1() {
  for(let i=1; i>0;i++) {
    var temp1 = await Colortogreen(); //:halts this statement till promise is resolved/rejected     
    var temp2 = await Colortoyellow(); //:halts this statement till promise is resolved/rejected 
    var temp3 = await Colortoviolet(); //:halts this statement till promise is resolved/rejected 
  }

}
f1()

