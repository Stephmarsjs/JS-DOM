const titiles = document.getElementByClassName('title');

console.log(Array.isArray(titiles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(title){
    console.log(title);
});