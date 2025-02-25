# :star2: To Do App

### :date: Date: 2024-07-01

### :memo: Information 
> A simple to-do list web application using Vanilla Javascript

### :bookmark_tabs: Requirements
* User add tasks
* Button - check / edit / delete
  * Check button
    * User checks it when the task is completed
    * User can reload to unchecked
  * Edit button - edit a task
  * Delete button - delete a task
* Tap 
* Validate user value
* Responsible UI
    
#### :moneybag: **Bonus**

## <img src="https://skillicons.dev/icons?i=javascript" style="width:20px;"/> JavaScript

### :one: innerHTML vs textContent
* textContent gets the content of all elements <br />
* innerText is aware of HTML tag and CSS styling

### :two: Object

To handle data, an ID is required. 
```
// ID generator
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substring(2, 9);
}
```
### :three: Remove elements from the array - pop, shift, splice, filter

splice: delete elements using index
```
function deleteTask(id) {
 for (let i = 0; i < taskList.length; i++) {
  if (taskList[i].id == id) {
   taskList.splice(i, 1) //delete the first element from index [i]
   break;
  }
 }
}
```

filter: allows you to remove elements from the array programmatically. 
(https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter)
```
<script>
const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
</script>
```
### :four: querySelectorAll
_returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors._ (https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
```
let tab = document.querySelectorAll(".task-tabs div")
```

### 🔗 Demo: <a href="https://todooo-webapp.netlify.app/" target="_blank">todooo-webapp.netlify.app</a>
<img src="todo-main.png">

### :bulb: Tips
* <img src="https://skillicons.dev/icons?i=vscode" style="width:20px;"/> **shortcut** - settings: ctrl + '+' + ','
  => File > Preferences > Settings
* <img src="https://skillicons.dev/icons?i=vscode" style="width:20px;"/> editor.wordSeparators - adjust word separators <br />
  ex) if you remove '-', you can select the whole class name 'class-name' with a double click
* <img src="https://skillicons.dev/icons?i=css" style="width:20px;"/> **space** - padding: top right bottom left; <br />
  ex) padding: 10px 20px 15px 5px;
* <img src="https://skillicons.dev/icons?i=bootstrap" style="width:20px;"/> **text**
  ```
  <p class="text-start">Start aligned</p>
  <p class="text-center">Center aligned</p>
  <p class="text-end">End aligned</p>

  <p class="text-lowercase">lowercased</p>
  <p class="text-uppercase">UPPERCASED</p>
  <p class="text-capitalize">PascalCased</p>

  <p class="fs-1">.fs-1 text</p> // biggest
  <p class="fs-6">.fs-6 text</p> // smallest
  
  <p class="fw-bold">Bold text.</p>
  <p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
  <p class="fw-semibold">Semibold weight text.</p>
  <p class="fw-medium">Medium weight text.</p>
  <p class="fw-normal">Normal weight text.</p>
  <p class="fw-light">Light weight text.</p>
  <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
  <p class="fst-italic">Italic text.</p>
  <p class="fst-normal">Text with normal font style</p>

  // Line height
  <p class="lh-1">narrowest</p>
  <p class="lh-sm">small</p>
  <p class="lh-base">default</p>
  <p class="lh-lg">wide</p>

  // Decoration
  <p class="text-decoration-underline">line underneath</p>
  <p class="text-decoration-line-through">line going through</p>
  <a href="#" class="text-decoration-none">link underline removed</a>
  ```
* <img src="https://skillicons.dev/icons?i=bootstrap" style="width:20px;"/> **padding**
  ```
  p-0 // Set padding on all sides range in 0 - 5
  pt-0 // top
  pr-0 // right
  pb-0 // bottom
  pl-0 // left
  px-0 // horizontal
  py-0 // vertical 
  ```
  

### Skills
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> 
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> 


