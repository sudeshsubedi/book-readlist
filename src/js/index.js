// console.log(booksData);

function populateGridData(books){
    const cardHeight = 200
    const cardWidth = 100
    const imageHeight = 140
    const booksGrid = document.querySelector("#booksGrid")
    books.forEach(book => {
        if(books.length > 0){
            const cardContainer = createElement("div", booksGrid, "cardContainer")
            const bookSpan = createElement("div", cardContainer, "bookCard");

            const image = createElement("img", bookSpan);
            image.src = book.image;
            image.height = imageHeight;
            image.width = cardWidth;
            image.alt = book.name;

            const name = createElement("h4", bookSpan)
            name.textContent = `Name: ${book.name}`

            const type = createElement("h4", bookSpan)
            type.textContent = `Type: ${book.type}`

            const category = createElement("h4", bookSpan)
            category.textContent = `Category: ${book.category}`

            const status = createElement("h4", bookSpan)
            status.textContent = `status: ${book.status}`

            const percentage = createElement("h4", bookSpan)
            let percent;
            if(book.status === "completed"){
                percent = "100%"
            } else if(book.status === "unread"){
                percent = "0%"
            } else if(book.status === "reading"){
                percent = `${(book.pagesCompleted/book.totalPages)*100}`.slice(0, 4)+'%';
            }
            percentage.textContent = `Completed: ${percent || 0}`

        }
    });
}


function createElement(type, parent, classlist){
    const element = document.createElement(type)
    if(classlist !== undefined){
        typeof classlist === Array && classlist.length > 0
            ? element.classList.add(...classlist)
            : (element.classList = classlist);
    }
    parent.append(element)
    return element
}

populateGridData(booksData)