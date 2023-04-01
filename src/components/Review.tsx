import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
function Review({ totalReview }: { totalReview: number }) {
  return (
    <div className="flex gap-2">
      {[...Array(5).keys()].map((item, index) => {
        return (
          <span key={index}>
            {totalReview >= item + 1 ? (
              <BsStarFill />
            ) : totalReview > item ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Review;
