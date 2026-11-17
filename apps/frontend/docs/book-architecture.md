# Book Architecture

## Author

Nick Garland

## Profile Hook

useBook.ts

### What does the hook do?

The hook manages the React state logic for the book overview page, including the selected book, loading status, and error messages. It retrieves the book ID from the URL using useParams() and uses the book service to fetch the requested book. It also validates the URL ID and prevents outdated requests from updating the component when navigating between books.

### How did i decide what logic to include in the hook?

Everything related to React state went into the hook. This includes managing the book state, loading and error states, retrieving the URL parameter, and using useEffect() to load the book when the page loads or the ID changes. The hook calls the service to retrieve the data and stores the result in React state.

### Where is this hook made use of in the project and how?

Used in BookOverview.tsx. The component calls useBook() to retrieve the book, loading status, error message, and setBook function. It then uses the values to display the book information and handle updates to the currently displayed book.

## Profile Service

bookService.ts

### What does the service do?

The service handles the business logic for book operations. It provides methods to retrieve all books, retrieve an individual book by ID, and update an existing book. It also validates book IDs before passing requests to the repository to make sure they are valid positive integers.

### How did i decide what logic to include in the service?

All application validation and business logic went into the service. This keeps the validation separate from React components and the data access layer. The service acts as the middle layer between the hooks and repository, allowing the application to request book data without needing to know how that data is stored or retrieved.

### Where is this service made use of in the project and how?

Used in useBook.ts and BookOverview.tsx. The hook calls bookService.getBookById(id) when loading an individual book. The book overview uses bookService.updateBook(id, updatedBook) when saving changes, such as adding or modifying reviews.

## Profile Repository

bookRepo.ts

### What does the repository do?

The repository is the data access layer for the books in the application. Currently, it retrieves and updates book information using an in-memory array populated with mock data. It provides methods to get all books, find an individual book by ID, and update an existing book. It also returns copies of the book data to avoid directly exposing the stored objects.

### How did i decide what logic to include in the repository?

All data access operations went into the repository. The repository is responsible for finding and modifying the stored book information, while the service handles validation and application-level logic. The methods are asynchronous and return Promises to simulate how the application would interact with a real database or API in the future. The current mock data and in-memory array can eventually be replaced with actual database operations without needing to significantly change the service or hook.

### Where is this repository made use of in the project and how?

It is used in bookService.ts. The service calls bookRepository.getAll() to retrieve all books, bookRepository.getById(id) to retrieve an individual book, and bookRepository.update(id, updatedBook) to save changes to an existing book.
