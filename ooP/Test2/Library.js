// TODO
var Library = /** @class */ (function () {
    function Library(name, address) {
        this.books = [];
        this.name = name;
        this.address = address;
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBookFromAuthor = function (authorName) {
        var result = [];
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            for (var _b = 0, _c = book.getAuthor(); _b < _c.length; _b++) {
                var auth = _c[_b];
                if (auth.getName() === authorName) {
                    result.push(book);
                }
            }
        }
        return result;
    };
    Library.prototype.getBookFromPublisher = function (publisher) {
        var result = [];
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.getPublisher().getName() === publisher) {
                result.push(book);
            }
        }
        return result;
    };
    return Library;
}());
var Book = /** @class */ (function () {
    function Book(title, year) {
        this.author = [];
        this.title = title;
        this.yearOfPublish = year;
    }
    Book.prototype.addAuthor = function (author) {
        this.author.push(author);
    };
    Book.prototype.setPublisher = function (publisher) {
        this.publisher = publisher;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getPublisher = function () {
        return this.publisher;
    };
    return Book;
}());
var Publisher = /** @class */ (function () {
    function Publisher(name, address) {
        this.name = name;
        this.address = address;
    }
    Publisher.prototype.getName = function () {
        return this.name;
    };
    return Publisher;
}());
var Author = /** @class */ (function () {
    function Author(name) {
        this.name = name;
    }
    Author.prototype.getName = function () {
        return this.name;
    };
    return Author;
}());
var abc = new Library('ABC', 'PP');
var def = new Publisher('DEF', 'PP');
var mike = new Author('Mike');
var john = new Author('John');
var oop = new Book('OOP with Typescript', 2010);
var vueJs = new Book('VueJs 3', 2020);
var javascript = new Book('Essential Javascript', 2005);
var laravel = new Book('Laravel 8', 2020);
abc.addBook(oop);
abc.addBook(vueJs);
abc.addBook(javascript);
abc.addBook(laravel);
oop.addAuthor(mike);
vueJs.addAuthor(john);
javascript.addAuthor(john);
laravel.addAuthor(mike);
oop.setPublisher(def);
vueJs.setPublisher(def);
javascript.setPublisher(def);
laravel.setPublisher(def);
console.log(abc.getBookFromPublisher('DEF'));
