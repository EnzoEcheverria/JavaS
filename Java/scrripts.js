'use strict';

/*let
const user = {
    name: 'Toto'
}

// user = {
//  name: 'Tata
// }

// user.name = 'Tata'

// const EARTH_MASS

let myString = "Hello World";
let myNumber = 1.5;
let myBoolean = true; // false
let myNull = null; 
let muUndefined = undefined;

const myObject ={
    name: 'Toto',
    car: {
        color:'red'
    }
}

let myArray =[1,2,3];

console.log('hello'+'world');
const hello='hello';
const world='world';
console.log('
    conact two string:' ${hello} ${world}
');

console.log(10+32);
let a = 10+32;
console.log(a += 8);

let b = 10-5;
b-=5;

let c = 5*7;
c*=2;

let test =5;
console.log(test++);
console.log(test);


'3' + '5'//'35'
'3' * '55'//15
'hello'+'1'//'hello1'
'hello' *'1'//NaN*/

/*console.log(2>1);//true
console.log(2<1);//false
console.log(20>=10);//true
console.log(10>=10);//true

console (4!==6);

console.log(4!='4')//false
console.log(4!=='4')//true

console.log('2'!==2);//true

console.log('hello'==='hello');//true
console.log('Hello'==='hello');//false


|| (ou)

&& (et)

if(5>0 && 5<10){
    console.log('yes');
}else{
    console.log('no');
}

if((20/2) >= 10 || (20/2) < 15){
    console.log('yes');
}else{
    console.log('no');
}*/


/*

// can see the group
let isPrivate = false;
let isMember = false;

// can't see the group
let isPrivate = true;
let isMember = false;

// can see the group
let isPrivate = true;
let isMember = true;

if (isPrivate=false || isPrivate=true && isMember=true){
    console.log('yes');
} else {
    console.log('no');
}

*/
/*
let username = prompt("Votre nom?");
if (username!===null) {
    window.alert('hello');
}else {
    window.alert("Don't be shy!"); 
}


let isConnect=true;
let standad_user=true;
let admin=true;

if (isConnect=true){

}
*/

/*
function myFunc() {
    console.log('hello world');
}

function returnFunc(text=' '){
    console.log('text',text);
    return text.toUpperCase;
}

console.log(returnFunc('hello world'));


const sum =(param1, param2) => {
    console.log('param1',param1);
    console.log('param2',param2);
    return param1 + param2;
}

const sum =(p1, p2=0) => p1 +p2

console.log('sum',sum(2));
*/
/*
const truncate =(string,length,trail) => {
    if(str.length>length){
        str.substring(0,length)+trail;  
    }else{
    return str
}

const res1 = truncate('I will be truncated', 15, '->') // returns 'I will be trunc->'
console.log('res1',res1)
const res2 = truncate('I will be truncated', 5) // returns 'I wil...'
console.log('res2',res2)
*/

/*
var array=[1, 2, 3, 4, 5, 6, 7];

var firstElement = array.shift();
console.log(array);
console.log(firstElement);

console.log(array.pop());
console.log(array);

console.log(array.unshift(8, 9));
console.log(array);

console.log(array.push(10));
console.log(array);
*/
/*
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [7, 8, 9];
var array4 = [10, 11, 12];

console.log(array1.concat(array2.concat(array3.concat(array4))));
*/

/*
var array=[1, 2, 3, 4, 5, 6, 7];

console.log(array.splice(3, 5));
console.log(array); */

/*
const firstP = document.querySelector('p');
firstP.innerText ='I am the first paragraphe';
console.log('firstP > text',firstP.innerText);

const secondP = document.querySelectorAll('.second-p');
secondP[0].innerHTML = '<span>hello</span>';
console.log('secondP > html',secondP[0].innerHTML);



const myImg = document.querySelector('img');
myImg.setAttribute('width','50%');
myImg.setAttribute('height','auto');

myImg.setAttribute('alt','Random image');

firstP.style.color='blue';
firstP.style.fontSize = ' 1.5rem';

myImg.className= 'my-img';
myImg.classList.add ('my-img');
myImg.classList.remove('my-img');



const parent = document.getElementsByTagName('div');
console.log('parent',parent);
const nodetodelete = document.getElementsByTagName('div p');
console.log('parent',parent);
parent.removeChild(nodetodelete);


const myBody = document.querySelector('body');
const newDiv = document.createElement('div');
newDiv.innerText = 'hello!';
myBody.appendChild(newDiv);
myBody.prepend(newDiv);

const anotherdiv = document.createElement('div');
newanotherdivDiv.style.color='blue';
anotherdiv.innerText = 'first child';
myBody.prepend(anotherdiv);*/

/*
const btn = document.querySelector('#js-btn');
btn.addEventListener('click',(event) => {
    console.log('cliked');
})

window.addEventListener('contextmenu'), (event) =>{
    event.preventDefault();
}
*/

/*
//Logguez dans la console 'Hello' 3 secondes après le rendu de la page.

setTimeout(()=> {
    console.log('Hello')
},3000);

//Logguez dans la console 'Logged after 5 seconds' 5 secondes après le rendu de la page.

setTimeout(()=> {
    console.log('Logged after 5 seconds')
},5000);

//Ajoutez un écouteur d'événement 'click' à l'objet window pour logguer dans la console 'Clicked' 3 secondes après le clique.

window.addEventListener('click',()=>{
    setTimeout(()=>{
        console.log('clicked!');
    },3000);
})

//Créez un div. Au survol de ce div logguez dans la console 'I was hovered 5.5 seconds ago' 5 secondes plus tard.

document.getElementById("division").addEventListener('mouseover', () => {
    setTimeout(() => {
        console.log('I was hovered 5.5 seconds ago!')
    },5500);
});


//Créez dynamiquement une image avec src égal à http://lorempixel.com/400/200/.
//Quand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.
//En cas d'erreur de chargement, logguez dans la console 'Error'.

const myImg = document.createElement('img');
myImg.src = 'http://lorempixel.com/400/200/';
myImg.onload = () => {
    console.log('done');
    document.body.appendChild(myImg);
}
myImg.onerror = () => {
    console.log('error');
}

//Créez dynamiquement une node de script avec l'url de la librarie lodash: https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js.
//Quand le script sera téléchargé, appelez la fonction round pour arrondir le nombre 10.02.

const myScript = document.createElement('scripts');
myScript.src = 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js';
myScript.onload = () => {
    console.log('done');
    _.round(10.02)
}
document.body.appendChild(myScript)
myScript.onerror = () => {
    console.log('error');
}
*/

$(document).ready(()=>{
    //toutes les balises <div>
    const divs = $('div');
    console.log('divs', divs);
    //toutes les balises avec le nom de la class js-paragraph
    console.log('class', $('.js-paragraph'));
    //la balise avec l'id js-unique-paragraph
    console.log('id', $('#js-unique-paragraph'));
    //le premier titre <h3>
    console.log('first h3', $('h3:first'));
    //le premier <th> du premier <tr>
    console.log('premier th', $('tr:first th:first'));
    //le premier <td> du chaque <tr>
    console.log($('tr td:fist-child'));
    //tous les liens
    console.log('a');
    //tous les lien externes (ceux qui ont l'attribut target égal à _blank)
    console.log($('a[target="_blank"]'));
    //tous les lien internes (ceux qui n'ont pas d'attribut target égal à _blank)
    console.log( )
    //tous les boutons dans un formulaire
    $('form :button')
})

$(document).ready(()=>{
    const title =$('h1'.text());
    console.log('title', title);

    $('h1').text('My page title');

    const articleContent = $('#js-article').html();
    console.loge('articleContent', articleContent);

    $('#js-article').html(`
        <h2>This is my article.</h2>
    <p>This is my article's content.</p>
    <a href="https://exemple.com>Read more</a>
    `);

    const inputValue = $('#js-search').val();
    console.log('inputvale', inputValue);


    $(#js-search).val('Beagles');

    $('#js-search-form')[0]. addEventListener('submit', (event) => {
        //
        event.preventDefault();
    });

    $('js-alert').addClass('alert-primary');

    $('js-alert').removeClass('alert-primary');

    $('js-alert').addClass('alert alert-warning');

    if ($('js-alert').hasClass('alert-primary')) {
        $('#js-alert').removeClass('alert-warning');
    }

    $('#js-btn')[0].addEventListener('click', () =>{
        $('#js-alert').toggleClass('alert-sucess');
    });

    console.log($('#js-btn').css('background-color'));

    $('#js-btn').css('background-color', '#71b8af');

    $('#js-btn').css({
        color: '#fff2d5',
        'border-radius':'100%'
    });


document.querySelector('#btn').addEventListener('click', () => {
});
$('#btn').click(() => {
});
$('#btn').on('click', () => {
});
let counter = 0;
$('#js-btn').click(() => {
    conter++; // counter = counter + 1
    if (counter > 5) {
        $('#js-btn').off('click')
    }
    console.log('counter', counter);
});

$('#js-hovered').mouseenter(() => {
    changeBgColor('green')
});

$('#js-hovered').mouseleave(() => {
    changeBgColor('blue')
});

function changeBgColor(color) {
    $('#js-hovered').css('background-color', coolor);
}

$('#js-show-alert').click(()=>{
    //$('#js-alert').show();
    //$('#js-alert').toggle();
    //$('#js-alert').slideDown();
    $('#js-alert').fadeIn();
})

$('#js-show-alert').click(()=>{
    //$('#js-alert').hide();
    //$('#js-alert').slideUp();
    $('#js-alert').faideOut();
})