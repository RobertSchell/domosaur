//PART 1 WARMUP CHALLENGES

//1
/*
Change the span with the class mess-with-me to have a font size of 40px. (A span is an inline element tag, typically used inside a block of text)
*/
let spanMess = document.querySelector(".mess-with-me");
spanMess.style.fontSize = "40px";

//2
/*
Change the paragraph with the class mess-with-me to have a background color of green.
*/
let paraMess = document.querySelector("p.mess-with-me");//tag.className this will grab the the first paragraph with mess-with-me class name, also works with IDs example: tag#idName
paraMess.style.background = "green";

//3
/*
Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!
*/
let hiddenDino = document.querySelector("#hide-me");
hiddenDino.style.display = "none";

//4
/*
Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
*/
let bigTric = document.querySelector("#triceratops");
bigTric.style.width = "324px";

//PART 2 EVENT LISTENER CHALLENGES

//1
/*
Add an event listener to the span with the class mess-with-me so that when it is clicked, the font color changes to orange.
*/
spanMess.addEventListener("click", function(){
    spanMess.style.color = "orange"
});

//2
/*
Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.
*/
bigTric.addEventListener("click", function(){
    bigTric.style.border = "3px dotted red";
});

//3
/*
Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.
*/
let seeThroughDino = document.querySelector("#feathers");

seeThroughDino.addEventListener("click", function(){
    seeThroughDino.style.opacity = "0.5";
});

//4/Stretch Goal 1
/*
//Problem 4
Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.

//Stretch Goal 1
Make it so that when you click the "Switch Background Color" button, you switch it back and forth from white to whatever color you chose. This doesn't require another event listener, but, rather, a rewrite of the function you made into your event listener. Hint: when you haven't explicitly set the background color through JavaScript yet, its value will always be an empty string, no matter what you've set it to in other sources (like the browser's default white background, or through your own CSS file).
*/
let newBackgroundColor = document.querySelector("#toggle");
let row = document.querySelector("#row")

newBackgroundColor.addEventListener("click", function(){
    if(row.style.background === ""){
        row.style.background = "blue";
    }else if(row.style.background === "blue"){
        row.style.background = ""
    }
});

//5/Stretch Goal 2
/*
//Problem 5
Add an event listener to the dinosaur with the id biggify that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be click!

//Stretch Goal 2
Add a new event listener so that when the biggify dinosaur is no longer hovered, they change back to their original size. Hint: same as the above one, but for its width! Hint 2: You'll have to use a different kind of event than you did before, but... it's a related event with a similar name.
*/
let getBig = document.querySelector("#biggify");

getBig.addEventListener("mouseover", function(){
    getBig.style.width = "200px";
});

getBig.addEventListener("mouseout", function(){
    getBig.style.width = "162px";//original image width located in style.css file
});






