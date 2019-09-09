const books = document.quesrySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent += ' (Book titile)';
});

const bookList = document.querySeletor('#book-list');
bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML content</p>';