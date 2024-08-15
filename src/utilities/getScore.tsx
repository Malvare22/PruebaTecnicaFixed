import { Review } from "../adapters/Product";

export default function getScore(scores: Review[]): number{
    let sum = 0;
    scores.forEach(
        (review) => {
            sum += review.rating;
        }
    )
    return Math.floor(sum/scores.length);
}