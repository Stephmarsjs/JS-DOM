const bookList = document.querySelector('#book-list');

console.log('book list parent element:', bookList.parentElement);
console.log('book list parent node:', bookList.parentNode);

console.log('all node children:');
Array.from(booklist.childNodes).forEach(function(node){
    console.log(node);
});

console.log('all element children:');
Array.from(bookList.chldren).forEach(function(node){
    console.log(node);
});

const titiles = bookList.quesrySelectorAll('.name');

console.log('Book titles:');
Array.from(titles).forEach(function(title){
    console.log(title.textContent);
});