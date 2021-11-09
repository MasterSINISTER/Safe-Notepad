var textareaEl=document.getElementById("area-container")

var btnFinish=document.getElementById("btn-finish")


btnFinish.addEventListener("click",function(){
    
    localStorage.setItem("userNotes",textareaEl.value)
})
textareaEl.textContent=localStorage.getItem("userNotes")