export class Book  { 
title = new String;
author= new String;
description = new String;
pages= new Number;
currentPage = new Number;
read = false;

constructor(title, author,description, pages, currentPage){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
}
readBook(page){
    if(page < 1 || page > this.pages)
    return  0;
     
    if(page >= 1 && page < this.pages ){
        this.currentPage = page;
        return 1;
    }
    if(page === this.pages){
        this.currentPage = page;
        this.read = true;
        return 1;
    }
}
}
var book1 = new Book("titre1","author1", "description1", 200, 1)
var book2 = new Book("titre2","author2", "description2", 300, 150)
var book3 = new Book("titre3","author3", "description3", 400, 250)
export const books = [book1, book2, book3];

