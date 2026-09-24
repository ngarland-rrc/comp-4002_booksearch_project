import "./BookOverview.css"

interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
    overview: string;
}


const books: Book[] = [
  {
    id: 1,
    title: 'TEF French Foundations – Book 4: Advanced Grammar',
    author: 'Kaya Srilas',
    image: "/assets/book-cover/book1.jpg",
    overview: "TEF French Foundations – Book 4: Advanced Grammar is a high-level, precision-focused grammar guide designed for serious TEF Canada candidates aiming for CLB 7–10 and upper B2–C1 performance. This volume represents the final stage of the TEF French Foundations progression and is built for learners who already control complex sentence structures but want to refine nuance, register, and advanced tense accuracy."
  },
];

const book = books[0]

function BookOverview(){
    return (
    <div className="overview">
      <img className="cover_img" src={book.image} alt={book.title} />
      <div className="overview_text">
        <h2>{book.title}</h2>
        <p className="author">By: {book.author}</p>
        <p>{book.overview}</p>
      </div>
    </div>
  );
}

export default BookOverview;
