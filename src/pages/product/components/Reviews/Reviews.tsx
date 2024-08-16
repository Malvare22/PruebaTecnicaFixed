import { Row } from "antd";
import ReviewsScore from "../../../../components/reviews/ReviewsScore";

interface ReviewProps{
    user: string,
    score: number,
    comment: string
}

const Review : React.FC<ReviewProps> = ({user, score, comment}) => {
    return (
        <>
            <Row style={{padding: 10, height: 'auto', backgroundColor: 'white' }}>
                <div style={{ fontWeight: 'bold', fontSize: 16 }}>{user}</div>
                <div><ReviewsScore score={score} /></div>
                <div style={{ width: '100%', height: 'auto', wordBreak: 'break-word' }}>
                    <div>{comment}</div>
                </div>
            </Row>
        </>
    );
};

export default Review;