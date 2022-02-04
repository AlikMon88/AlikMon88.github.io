// alert("Welcome ! ")

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
    // console.log("promise1-wait ... ")
    var temp1 = await Colortogreen(); //:halts this statement till promise is resolved/rejected 
    // console.log(temp1)
    // console.log("promise1-resolved ...")
    
    // console.log("promise2-wait ... ")
    var temp2 = await Colortoyellow(); //:halts this statement till promise is resolved/rejected 
    // console.log(temp2)
    // console.log("promise2-resolved ...")

    // console.log("promise3-wait ... ")
    var temp3 = await Colortoviolet(); //:halts this statement till promise is resolved/rejected 
    // console.log(temp3)
    // console.log("promise3-resolved ...")

    // console.log("Color Changed Back ...")
  }

    // console.log("promise-wait ... ")
    // var temp = await resolveAfter2Seconds(10); //:halts this statement till promise is resolved/rejected 
    // console.log(temp)
    // $("body").removeClass("change-color")
    // console.log("promise resolved ...")    
}
f1()