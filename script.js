function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function addBook() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var description = document.getElementById("description").value;

    if (title === "" || author === "" || description === "") {
        alert("Please fill all fields");
        return;
    }

    var bookContainer = document.getElementById("book-container");

    var bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
        <h3>${title}</h3>
        <h4>${author}</h4>
        <p>${description}</p>
        <button onclick="deleteBook(this)">Delete</button>
    `;

    bookContainer.appendChild(bookDiv);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("description").value = "";

    closePopup();
}

function deleteBook(btn) {
    btn.parentElement.remove();
}
