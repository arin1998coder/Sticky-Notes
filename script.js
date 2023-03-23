let container2 = document.getElementsByClassName('container2')[0];
let container3 = document.getElementsByClassName('container3')[0];
let checkIcon = document.getElementById("check-icon");
let createNoteButton = document.querySelector('.btn-success');
let xIcon = document.getElementById("x-icon");

let i = 0;


//when clicked on create note button it displays a new notepad
createNoteButton.addEventListener('click', function(){
   container3.style.display = 'block';
});

//when the x icon is clicked it closes the notepad
xIcon.addEventListener('click', function(){
    container3.style.display = 'none';
    document.getElementById('note-text').value=""; //empties the last note and refreshes the notepad
});

//on click of the check icon create Note function is called
checkIcon.addEventListener('click', function(){
    createNote();
});

//on press of enter also note can be sticked on the wall
document.addEventListener('keypress', function(e){
    if(e.key === 'Enter' && container3.style.display === 'block'){
        createNote();
    }
});

//gives style to each of the sticky notes created
function giveStyleToNote(note){
    note.setAttribute('style',"width:250px;height:250px;font-size:26px;padding:25px;margin-top:10px;overflow:hidden;box-shadow:0px 10px 24px 0px rgba(0,0,0,0.55)");

    note.style.transform = rotate();
    note.style.margin = margin();
    note.style.backgroundColor = color();
}


function createNote(){

    let noteText = document.getElementById('note-text').value;

    //create two elements h1 and div
    //h1 contains the note text and we are gonna attach that h1 to the div

    let noteContainer = document.createElement('div');
    let note=document.createElement('h1');

    note.innerHTML = noteText; //note text is now inserted inside note h1

    //give style to the note
    giveStyleToNote(note);
    //append the note to the notecontainer ie the div
    noteContainer.appendChild(note);

    //stick this note to the container 2 which is the container for all the sticky notes
    container2.insertAdjacentElement("beforeend", noteContainer);

    let elements = document.querySelectorAll(".container2 div"); //returns a node list of elements matching with the query

    //iterates over the nodelist and attaches the mouseenter event listener to each element/stciky note
    //on mousenter the sticky note is zoomed out a lil
    elements.forEach((note) =>{
        note.addEventListener('mouseenter',function(){
            note.setAttribute("style","transform:scale(1.1);transition:transform .2s");
        });
    });

    //iterates over the nodelist and attaches the mouseleave event listener to each element/stciky note
    //on mouseleaving the sticky note is again back to normal size
    elements.forEach((note) =>{
        note.addEventListener('mouseleave',function(){
            note.setAttribute("style","transform:scale(1);transition:transform .2s");
        });
    });

    //attaches a double click listener on all notes
    //on double click the note gets deleted
    elements.forEach((note) =>{
        note.addEventListener("dblclick",function(){
            note.remove();
        });
    });

    document.getElementById('note-text').value=""; //empties the last note and refreshes the notepad
}
//returns a random margin value for the new created note
function margin(){

    let random_margin = ["-5px", "1px","5px","10px","15px","20px"];
    let len = random_margin.length;
    return random_margin[Math.floor(Math.random()*len)];
}
function rotate(){

    let random_rotate = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"];
    let len = random_rotate.length;
    return random_rotate[Math.floor(Math.random()*len)];
}
function color (){

    let random_color = ["red", "blue", "green", "yellow", "orange", "purple"];

    let len = random_color.length;
    if(i==len)
    {
        i=0;
    }
    return random_color[i++];
}


console.log(container3);