// TODO
class Library{
    private name: string
    private address: string
    private books:Book[]=[]
    constructor(name: string, address: string) {
        this.name = name
        this.address=address
    }
    addBook(book: Book) {
        this.books.push(book)
    }
    getBookFromAuthor(authorName: string): Book[]{
        let result: Book[] = []
        for (let book of this.books) {
            for (let auth of book.getAuthor()) {
                if (auth.getName() === authorName) {
                   result.push(book)
               }
           }
        }
        return result
    }
    getBookFromPublisher(publisher: string) : Book[]{
        let result: Book[] = []
        for (let book of this.books) {
            if (book.getPublisher()?.getName()===publisher) {
                result.push(book)
            }
        }
        return result
    }
}
class Book{
    private title: string
    private yearOfPublish: number
    private author: Author[] = []
    private publisher?: Publisher
    constructor(title: string, year: number) {
        this.title = title
        this.yearOfPublish=year
    }
    addAuthor(author: Author) {
        this.author.push(author)
    }
    setPublisher(publisher:Publisher) {
        this.publisher=publisher
    }
    getAuthor() {
        return this.author
    }
    getPublisher() {
        return this.publisher
    }
}
class Publisher{
    private name: string
    private address: string
    constructor(name: string, address: string) {
        this.name = name
        this.address=address
    }
    getName(): string{
        return this.name
    }
}
class Author{
    private name: string
    constructor(name: string) {
        this.name=name
    }
    getName(): string{
        return this.name
    }
}

let abc = new Library('ABC', 'PP');
let def = new Publisher('DEF', 'PP');
let mike = new Author('Mike');
let john = new Author('John');
let oop = new Book('OOP with Typescript', 2010);
let vueJs = new Book('VueJs 3', 2020);
let javascript = new Book('Essential Javascript', 2005);
let laravel = new Book('Laravel 8', 2020);

abc.addBook(oop);
abc.addBook(vueJs);
abc.addBook(javascript);
abc.addBook(laravel);

oop.addAuthor(mike);
vueJs.addAuthor(john);
javascript.addAuthor(john);
laravel.addAuthor(mike)

oop.setPublisher(def);
vueJs.setPublisher(def);
javascript.setPublisher(def);
laravel.setPublisher(def)

console.log(abc.getBookFromPublisher('DEF'));
