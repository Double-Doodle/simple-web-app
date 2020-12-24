Book.instances = {};

class Book{
    Book(slots){
        this.isbn = slots.isbn;
        this.title = slots.title;
        this.year = slots.year;
    }
};