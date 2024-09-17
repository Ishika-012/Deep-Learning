 

let sideBar = document.querySelector("#side-bar");
let btn = document.querySelector("#button")
let head= document.querySelector("#head");
let one = document.querySelector('#one');

//creating new elements
let d = document.createElement('div');
d.innerHTML=`<i class="fa-solid fa-circle-arrow-left"></i>`

let para = document.createElement('div');
para.innerHTML = `
                    <ul style="list-style-type:disc; margin:2rem 1rem 2rem 4rem; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size:14pt">
                      <li><h4>Explore the world of management</h4></li><br>
                      <li>Technical Project Management</li>
                      <li>Threadbuild</li>
                      <li>Structure your pointers</li>
                      <li>4SA Method</li>
                    </ul>
                 `

btn.addEventListener("click", () => {
  sideBar.style.width='400px';
  head.style.display = "block";
  btn.replaceWith(d);
  one.replaceWith(para);
})

d.addEventListener("click", () =>{
  sideBar.style.width='8%';
  head.style.display= "none";
  d.replaceWith(btn);
  para.replaceWith(one);
})




let cardData = [
  {
    tag:""
  },
 {

 }
]
//Rendering json data in html

fetch('jsonfile.json')
.then(function(response){
  return response.json();
})
.then(function(items){
let data1 = document.querySelector("#data");
let out ="";
let arrayData = items.tasks[0];

  out +=`<h3>${arrayData.task_title}</h3>
         <div>${arrayData.task_description}</div>`

data1.innerHTML=out;
})

//card 1

 fetch('jsonfile.json')
.then(function(response){
    return response.json();
})
.then(function(products){
  let data = document.querySelector(".cardGrid");
  let out ="";
  let arrayData= products.tasks[0].assets;
  
     for(let array of arrayData){
     out +=`<div class="card" id=${array.asset_id}>
            <div id="header">
              <div> ${array.asset_title}</div>
              <i class="fa-solid fa-circle-info"></i>
            </div>
            <div id="desc"><b>Description:</b> ${array.asset_description}</div>
            <hr>  
             <div>${array.asset_content}</div>
          </div>
          </div>
                     `
     }
   
   data.innerHTML = out;
   
})

