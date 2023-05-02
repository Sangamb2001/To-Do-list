const item=document.querySelector('#item');
const toDoBox=document.querySelector('#to-do-box');
item.addEventListener("keyup",function(event){
    if(event.key=="Enter" && this.value==""){
        alert("Please add somthing..");
    }
    else{
        if(event.key=="Enter"){
            
        addToDo(this.value);
        this.value="";
        }
    }
})
function savenotes(){
    const notes=document.querySelectorAll("#item");
    console.log(notes);
    let data=[];
    notes.forEach(note=> {
        data.push(note.value);
        console.log(data);
        
    });
}
const addToDo=(item)=>{
    const listitem=document.createElement("li");
    listitem.innerHTML=`${item}
    <i class="fa-sharp fa-solid fa-trash"></i>`;
    listitem.addEventListener(
        "click" ,function(){
       this.classList.toggle("done");
        }
    )
listitem.querySelector("i").addEventListener("click",
    function(){
        listitem.remove();
    }
    )
toDoBox.appendChild(listitem);

}
