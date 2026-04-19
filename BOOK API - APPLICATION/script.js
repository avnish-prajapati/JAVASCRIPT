const APIKey = "AIzaSyCkXdbqqX7D3ekKdfyZJXotX2sGxH_WtMQ";
const SearchText = document.getElementById("input-box");
const SearchButton = document.getElementById("search-book");
const BookBox = document.getElementById("book-box");




function DisplayBooks() {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    BookBox.innerHTML = "";
    books.map((book) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="card p-3" style="width: 18rem;">
            <img src=${book.volumeInfo.imageLinks?.thumbnail == undefined ? "https://img.freepik.com/free-vector/text-books-library-isolated-icon_24877-83372.jpg?semt=ais_incoming&w=740&q=80" : book.volumeInfo.imageLinks.thumbnail} class="card - img - top" alt="Book-IMG"> 
                 <div class= "card-body">
                 <h5 class="card-title fw-bold fs-5">${book.volumeInfo.title == undefined ? "No author" : book.volumeInfo.title}</h5>
                 <h5 class="card-title text-secondary"> by ${book.volumeInfo.authors == undefined ? "No author" : book.volumeInfo.authors[0]}</h5>
                 <h5 class="card-title fs-6">Publish Date : ${book.volumeInfo?.publishedDate == undefined ? "No Data Found !" : book.volumeInfo.publishedDate}</h5>
                 <h5 class="card-title fs-6">Language : ${book.volumeInfo?.language == undefined ? "No Data Found !" : book.volumeInfo.language}</h5>
                 <h5 class="card-title text-light-50 fs-6">Page Count : ${book.volumeInfo?.pageCount == undefined ? "No Data Found !" : book.volumeInfo.pageCount}</h5>
                 
                <a href=${book.volumeInfo.previewLink} class="btn btn-outline-success">Preview</a>
                </div>
                </div>`
        BookBox.appendChild(div);
    })
}



function FetchBooks() {
    const search = SearchText.value;
    const BaseURL = `https://www.googleapis.com/books/v1/volumes?q=${search}+intitle:keyes&key=${APIKey}`;
    fetch(BaseURL)
        .then((res) => res.json())
        .then((data) => {
            const books = JSON.parse(localStorage.getItem("books")) || [];
            books.unshift(data.items[0]);
            localStorage.setItem("books", JSON.stringify(books));
            console.log(data)
             DisplayBooks(); 

        });
}
// FetchBooks();
DisplayBooks(); 
SearchButton.addEventListener("click", FetchBooks)