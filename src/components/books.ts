export interface Review {
    id: number;
    reviewerName: string;
    reviewText: string;
    userRating: number;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
    overview: string;
    reviews?: Review[];
}


const books: Book[] = [
    {
        id: 1,
        title: 'TEF French Foundations – Book 4: Advanced Grammar',
        author: 'Kaya Srilas',
        image: "/assets/book-cover/book1.jpg",
        overview: "TEF French Foundations – Book 4: Advanced Grammar is a high-level, precision-focused grammar guide designed for serious TEF Canada candidates aiming for CLB 7–10 and upper B2–C1 performance. This volume represents the final stage of the TEF French Foundations progression and is built for learners who already control complex sentence structures but want to refine nuance, register, and advanced tense accuracy.",
        reviews: []
    },
    {
      id: 2,
      title: 'Learn French Through Dialogues / Conversations',
      author: 'Author Two',
      image: "/assets/book-cover/book2.jpg",
      overview: "Coming Soon",
      reviews: []
    },
    {
      id: 3,
      title: 'Learning French through natural acquisition',
      author: 'Author Three',
      image: "/assets/book-cover/book3.jpg",
      overview: "Coming Soon",
      reviews: []
    },
    {
      id: 4,
      title: 'Book 3: The Choice: A Bilingual French Language Grammar',
      author: 'Author Four',
      image: "/assets/book-cover/book4.jpg",
      overview: "Coming Soon",
      reviews: []
    },
    {
      id: 5,
      title: 'Book 2: The Secrets: A Bilingual French Language Grammar',
      author: 'Author Five',
      image: "/assets/book-cover/book5.jpg",
      overview: "Coming Soon",
      reviews: []
    },
    {
      id: 6,
      title: 'TEF CANADA EXPRESSION ÉCRITE- 150 Topics To Succeed',
      author: 'Author Six',
      image: "/assets/book-cover/book6.jpg",
      overview: "Coming Soon",
      reviews: []
    },
    {
      id: 7,
      title: 'Book 4: The Blossoming: A Bilingual French Language Grammar',
      author: 'Author Seven',
      image: "/assets/book-cover/book7.jpg",
      overview: "Coming Soon",
      reviews: []
    },
    {
      id: 8,
      title: 'Book 3: Complex Structures: Future, Conditional, Relative',
      author: 'Author Eight',
      image: "/assets/book-cover/book8.jpg",
      overview: "Coming Soon",
      reviews: []
    }
];

export default books