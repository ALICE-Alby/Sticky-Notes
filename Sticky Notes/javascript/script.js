var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var closeIcon = document.getElementById("close");
var saveIcon = document.getElementById("save");
var i=0;

closeIcon.addEventListener("click", function(){
    enterNote();
})
saveIcon.addEventListener("click", function(){
    saveNote();
})
function enterNote(){
    if(container3.style.display =="none"){
         container3.style.display ="block";
    }
    else{
         container3.style.display = "none";
    }
}
function saveNote(){ 
  var textNote = document.getElementById("addNote").
  value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");

  node1.innerHTML = textNote;
  node1.setAttribute("style","width:250px; height:250px;font-size:25px; padding:20px; margin-top:10px;overflow:hidden;box-shadow:0px 10px 20px 0px");

  node1.style.margin = margin();
  node1.style.background = color();

  node0.appendChild(node1);
  container2.insertAdjacentElement("beforeend",node0);

  node0.addEventListener("dblclick", function(){
      node0.remove();
  })
  document.getElementById("addNote").value ='';
}
function margin(){
 var random_margin =["-5px","1px","5px","10px","15px","20px"];

return random_margin[Math.floor(Math.random()* random_margin.length)];
}
function color(){
 var random_color = ["#ff3de8","#bc83e6","#c2ff3d","#3dc2ff","#ebb328","#04e022"];
if(i> random_color.length -1){
    i=0;
}
 return random_color[i++];
}