
/* .querrySelector - it is used mostly to only grab one element */
const para= document.querySelector('.error')

console.log(para);

//console prints <p class="error">This is an error</p>S

const paraA= document.querySelector('div.error')

console.log(paraA);
//<div class="error">This is an error</div>

const paraB= document.querySelector('body > div:nth-child(2) > p:nth-child(1)')

console.log(paraB);
//console prints <p>Hello World</p>


/* .querrySelectorAll - it is used to grab a multiple elements at once */

const paras = document.querySelectorAll('p');//selects all p tags in our DOM

console.log(paras);//console returns a nodelists with the three p elements--[p,p,p.error]

paras.forEach((para)=>{
    console.log(para);//console prints each of the elemts in the nodelist
})


//Another Example
const errors= document.querySelectorAll('.error')

console.log(errors);//console prints out the nodelist with all elements having the class of error


//getting the innerText of an element using innerText propert
const para2= document.querySelector('p')

console.log(para2.innerText);//prints Hello World


para2.innerText = 'How are you World!'//the text in the document changes to "How are you World!"

const para3= document.querySelectorAll('p')

//console.log(para1.innerText);
para3.forEach((para)=>{
    console.log(para.innerText)//console logs the three statements
    //Adding new content to the web page
    para.innerText  += ' added new content';
});  

/* CHANGING THE INNERHTML OF AN OBJECT */

const para4 = document.querySelector('.content');

console.log(para4);//console returns <div class="content"><h2>This is a new heading</h2></div>

//Updating the innerHTML content

para4.innerHTML += '<h2>This is a new heading</h2>';

const people = ['mario','luigi','yoshi'];


//Another Example
people.forEach((person)=>{
    para4.innerHTML += `<p>${person}</p>`;
})

//GETTING AND UPDATING ATTRIBUTES OF HTML ELEMENTS eg href

const link = document.querySelector('a');

console.log(link.getAttribute('href'));//console prints https://www.google.com

//updating the value of the attribute using setAttribute property which takes two arguements, first is the attribute we want to change,secondly the value of what we want the attribute to be

link.setAttribute('href','https://www.youtube.com');
link.innerText = 'Youtube';


//Adding another attribute that did not exist before to an html element

const styleA = document.querySelector('body > div.error2');

console.log(styleA.getAttribute("class"));//console returns error as it is the name of the class in the div html element


//updating that value
styleA.setAttribute('class','new content')

//adding a new value in that div element
styleA.setAttribute('style','color:red;font-size:30px; display: flex;justify-content: center;align-content: center;text-align: center;font-size: 5rem;font-style: normal;')

//However the setAttribute has a few drawbacks,it overwrites styles when we want to add style using javascript. 

//A more preferred way of adding style to an element without overwritng previous styles is using the style property

const title = document.querySelector('h1');

console.log(title)//console prints <h1 style="color:blue;">The DOM</h1>
console.log(title.style)//console prints out a css object with all css properties

console.log(title.style.color)//console prints out blue

//Using this technique to update style

title.style.margin = '100px';

title.style.color = 'crimson';//changes color from blue to crimson
title.style.fontSize = '50px';

//deleting a style by setting its value equal to an empty string

title.style.margin = ''

//Adding and removing classes from elements using javascript

const changeClass = document.querySelector('body > div:nth-child(3) > p.error1');

console.log(changeClass.classList)//console brings up a node list with a list of all classes,in our case error

//Adding a class to an element using .add() method

//changeClass.classList.add('error404');//adds class error404

changeClass.classList.add('success505');//adds class success505

//removing a class to an element using .remove() method
//changeClass.classList.remove('error404');//removes class error404
//changeClass.classList.remove('success505');//removes classsuccess505

const paras6 = document.querySelectorAll('p');

console.log(paras6);//returns a nodelist that is used to cycle through them, since it is a node list we can use forEach function to cycle through them

paras.forEach((p)=>{
    if(p.textContent.includes('error')){
        p.classList.add('error404')
    }
    if(p.textContent.includes('success')){
        p.classList.add('success505')
    }
})

/* Toggle classes */

const header = document.querySelector('.error404');

header.classList.toggle('success505');
header.classList.toggle('success505');