import "./Raiting.css"

export interface RatingProps {
  ratings: Record<number, number>
  setRating: (bookId: number, value: number) => void
}

interface StarsProps extends RatingProps {
  bookId: number
}

function Rating({ bookId, ratings, setRating }: StarsProps) {
  const current = ratings[bookId] ?? 0

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className="star"
          onClick={() => setRating(bookId, star)}
        >
          {star <= current ? '★' : '☆'}
        </button>
      ))}
      <span>{current > 0 ? `${current}/5` : 'Not rated'}</span>
    </div>
  )
}

export default Rating