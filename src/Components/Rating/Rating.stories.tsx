
import { useState } from "react";
import { Rating, RatingValueType } from "./Rating";

export default {
    component: Rating
};

export const EmptyStars = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return (
        <Rating value={rating} onClick={setRating} />
    )
} 