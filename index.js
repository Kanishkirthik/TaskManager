var newjso = [
  {
    category: "Mern Developer",
    subcategory: "React projects",
    Duration: "3 hours",
    task: "develop todolist",
  },
  {
    category: "Mean Developer",
    subcategory: "Angular projects",
    Duration: "2 hours",
    task: "develop todolist",
  },
  {
    category: "Django Developer",
    subcategory: "dJango projects",
    Duration: "3 hours",
    task: "develop todolist",
  },
  {
    category: "Java Developer",
    subcategory: "Hibernate with jsp/servlet",
    Duration: "3 hours",
    task: "devlop student info trcaker",
  },
  {
    category: "Python Developer",
    subcategory: "Mysql implement with python",
    Duration: "3 hours",
    task: "curd with sutdent",
  },
];
document.querySelector('.update').sty
let update=function(val){
  document.getElementById('Category').value=newjso[val].category
  document.getElementById('SubCategory').value=newjso[val].subcategory
  document.getElementById('Duration').value=newjso[val].Duration
  document.getElementById("Task").value=newjso[val].task
  document.querySelector('.update').classList.toggle('show')
  document.getElementById('form_button').style.display='none'
  document.querySelector('.update').addEventListener('click',()=>{
    newjso[val].category=document.getElementById('Category').value
    newjso[val].subcategory=document.getElementById('SubCategory').value
  newjso[val].Duration=document.getElementById('Duration').value
  newjso[val].task=document.getElementById("Task").value
  showme()
  })

}
let del=function(val){
  delete newjso[val]
  showme()
}
let showme=function(){
var ele=document.querySelector("#body")
while (ele.childElementCount!=0){
  ele.removeChild(ele.firstElementChild)
}
newjso.map(((e,index)=>{
    var element =document.createElement("tr")
    var update=element.insertCell(0)
    update.innerHTML = `<button id="update" onclick="update(${index})">update</button>`;
    var del=element.insertCell(0)
    del.innerHTML = `<button onclick="del(${index})">Delete</button>`;
    var c=element.insertCell(0)
    c.innerText=e.task
    var s=element.insertCell(0)
    s.innerText=e.Duration
    var d=element.insertCell(0)
    d.innerText=e.subcategory
    var t=element.insertCell(0)
    t.innerText=e.category
    ele.appendChild(element)
}))
}
showme()
let handle=function(){
let d=document.getElementById('filter')
console.log(d.value)
let filter=newjso.filter(((e)=>e.category===d.value))
console.log(filter)
var ele=document.querySelector("#body")
 while (ele.childElementCount!=0){
  ele.removeChild(ele.firstElementChild)
}

filter.map(((e)=>{
    var element =document.createElement("tr")
    var update=element.insertCell(0)
    update.innerHTML=`<button onclick="update(filter.indexof(e.category))">update</button>`
    var c=element.insertCell(0)
    c.innerText=e.task
    var s=element.insertCell(0)
    s.innerText=e.Duration
    var d=element.insertCell(0)
    d.innerText=e.subcategory
    var t=element.insertCell(0)
    t.innerText=e.category
    ele.appendChild(element)
  }))
}
document.querySelector("form").addEventListener('submit',(e)=>{
  e.preventDefault()
  let category=document.getElementById('Category').value
  let subcategory=document.getElementById('SubCategory').value
  let Duration=document.getElementById('Duration').value
  let Task=document.getElementById("Task").value
  let insert={category:category,subcategory:subcategory,Duration:Duration,task:Task}
  newjso.push(insert)

  showme()
})
fetch('data.json') // Replace 'data.json' with the path to your JSON file
  .then(response => response.json())
  .then(data => {
    // Use the data from the JSON file
    console.log(data);
    
    localStorage.setItem('data', );
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });