let string="";
let button=document.querySelectorAll(".btn");
Array.from(button).forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    if(e.target.innerHTML =="="){
      string=eval(string);
      document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML =="AC"){
      string="";
      document.querySelector("input").value=string;
    }
    else{
    console.log(e.target);
    string=string+e.target.innerHTML;
    document.querySelector("input").value=string;
    }
  })
})