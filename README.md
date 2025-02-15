# MyReads Project

This project is the final assessment project for Udacity's React Fundamentals course.
My reads project's aim is to organize your books into three sections (shelves). It contains the _main page_ your books and the _search page_. The three shelves available are **Currently Reading**, **Want To Read**, and **Read**. You can also add books from udacity's backend server using the search screen.

## Quick Start

To get started developing right away:

### Prerequisites

- You need to install node from [this link](https://nodejs.org/en/).
- To view the project on a browser like [chrome](https://www.google.com/chrome/).
- You need to install [Visual Studio Code](https://code.visualstudio.com/) view and edit the code.

### To install

- Write in the terminal `npm install` to install all project dependencies.

### To start development

- Write in the terminal `npm start`

This command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\

## What You're Getting

```
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── Book.js # This is the book component to display the book's details
    ├── BookShelf.js # This is the book shelf component to divide the books into three shelves
    ├── MyBooks.js # This is the my books component which shows the books in my shelves
    ├── SearchBooks.js # This is the search books component to be to search for books and add them
    ├── ShelfChanger.js # This is the shelf changer component to change the book's shelf
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Built with

- [React](https://reactjs.org/)

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms. That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Authors

- Abdallah Marzouk [github](https://gist.github.com/abdallahwaseem)
