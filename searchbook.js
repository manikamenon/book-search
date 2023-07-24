function searchBook(){


    
    window.location='search-book.html'

}  

function bookStore(){

    books={  
     
    ubookname:a2.value,
    ubookid:a1.value,

    uauthorname:a3.value,
    udiscription:a4.value

    }
    if(a2.value in localStorage){
        alert("Book already present")
    }
    else{
          localStorage.setItem(a2.value,JSON.stringify(books))
          alert("new book details added")
          window.location="SEARCH BOOK.HTML"
    }

}
    
function booksFind(){

    bname=z1.value
    if (bname in localStorage) {


        selectedBook=JSON.parse(localStorage.getItem(bname))

        result.innerHTML=`
        <h3 class="text-success">Book id      : ${selectedBook.ubookid}</h3>
        <h3 class="text-success">Book Name    : ${selectedBook.ubookname}</h3>
        <h3 class="text-success">Author Name  : ${selectedBook.uauthorname}</h3>
        <h3 class="text-success">Description  : ${selectedBook.udiscription}</h3>   `         
     
    }
    else{

        result.innerHTML=`<h3 class="text-danger">Book not found</h3> `
    }
}