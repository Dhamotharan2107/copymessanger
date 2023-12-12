
var DelBtn = document.createElement('button')
DelBtn.setAttribute('onclick','removeCheckedCheckboxes()')
DelBtn.setAttribute('id','deletebox')
DelBtn.textContent="Clear"
document.getElementById('container').appendChild(DelBtn)
function removeCheckedCheckboxes() {
    var checked = document.querySelectorAll("input[type='checkbox']:checked");
    checked.forEach((elem) => {
    elem.parentElement.style.display = "none";
    })
}
let inputValue = document.getElementById('inputValue')
var container = document.getElementById('container')
var orderList = document.createElement('ol')
orderList.setAttribute('id','div2')
container.appendChild(orderList)

function Btn1(event){
  var listItem = document.createElement('li');
  orderList.appendChild(listItem)
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type','checkbox')
  checkbox.setAttribute('class','checkbox')
  listItem.appendChild(checkbox)
  var head = document.createElement('h3');
  head.textContent=inputValue.value+"-"+Date();
  listItem.appendChild(head)
  var btn = document.createElement('button')
  btn.textContent="delete"
  head.appendChild(btn)	
  btn.addEventListener('click', function () {
        listItem.remove();
    })
};
function Btn2(event){
  var listItem = document.createElement('li');
  orderList.appendChild(listItem)
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type','checkbox')
  checkbox.setAttribute('class','checkbox')
  listItem.appendChild(checkbox)
  let head = document.createElement('h3')
  head.textContent=inputValue.value+"-"+inputValue.value+"-"+Date();
  listItem.appendChild(head)
  var btn = document.createElement('button')
  btn.textContent="delete"
  head.appendChild(btn)	
  btn.addEventListener('click', function () {
        listItem.remove();
})
};

function Btn3(event){
  var listItem = document.createElement('li');
  orderList.appendChild(listItem)
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type','checkbox')
  checkbox.setAttribute('class','checkbox')
  listItem.appendChild(checkbox)
  let head = document.createElement('h3')
  head.textContent=inputValue.value+"-"+inputValue.value+"-"+inputValue.value+"-"+Date();
  listItem.appendChild(head)
  var btn = document.createElement('button')
  btn.textContent="delete"
  head.appendChild(btn)	
  btn.addEventListener('click', function () {
        listItem.remove();
  })
};
