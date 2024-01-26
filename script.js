var  popupoverlay = document.querySelector(".popup-overlay")
var  popupbox = document.querySelector(".popup-box") 
var addpopupbutton = document.getElementById("add-popup")


addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})



var cancel = document.getElementById("cancel-popup")

cancel.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container = document.querySelector(".container")
var additem = document.getElementById("add-book")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdescription = document.getElementById("text-content")

additem.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value} </h5>
    <p>${bookdescription.value}</p>

    
    
    <button onclick="deleteitem(event)">Delete</button>`
        container.append(div)
        popupoverlay.style.display="none"
        popupbox.style.display="none"
})

var Deleteitem = document.getElementById("delete-item")

function deleteitem(event){
    event.target.parentElement.remove()
}