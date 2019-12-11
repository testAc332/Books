export class Book {
    static incrementerId = 0;
    id: number;
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.id = Book.incrementerId++;
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
