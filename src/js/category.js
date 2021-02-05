var categories = document.querySelectorAll(".category-options")
categories.forEach((category) => {
    category.addEventListener("click", function() {
        let categoricallySelectedBooks = booksData.filter((data) => {
            if(category.name === "all"){
                return booksData
            }
            return data.category === category.name;
        });
        console.log(categoricallySelectedBooks)
        let Grid = document.getElementById("booksGrid")
        removeChild(Grid)
        populateGridData(categoricallySelectedBooks);
    });
});

function removeChild(parent) {
    while(parent.firstChild){
        parent.removeChild(parent.lastChild)
    }
}