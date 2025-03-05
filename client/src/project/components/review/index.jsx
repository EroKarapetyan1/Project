import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { Button, InputWrapper1 } from "../../../globalStyles";
import { InputWrapper } from "../header/header";
import { FaStar } from "react-icons/fa6";
import { StarSpan } from "./styled";

export const Reviews = ({ token, isAdmin }) => {
    const [reviews, setReviews] = useState([]);
    const [desc, setDesc] = useState("");
    const [starCount, setStarCount] = useState(0);
    const arr = [1, 2, 3, 4, 5]
    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const endpoint = isAdmin ? "/review/all-reviews" : "/review/done-reviews";
            const res = await axiosInstance.get(endpoint, {
                headers: { Authorization: `Bearer ${token}` },
            });
            res.data.reverse()
            setReviews(res.data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };

    const addReview = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post("/review/add-review", { desc, starCount }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setDesc("");
            setStarCount(5);
            fetchReviews();
        } catch (error) {
            console.error("Error adding review:", error);
        }
    };

    const updateReview = async (id, status) => {
        try {
            await axiosInstance.put(`/review/put-reviews/${id}`, { status }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchReviews();
        } catch (error) {
            console.error("Error updating review:", error);
        }
    };
    console.log(starCount);
    
    return (
        <div>
            <h2>Reviews</h2>
            {/* <Reviews token={token} isAdmin={false} /> */}

            {!isAdmin && (
                <form onSubmit={addReview}>
                    <InputWrapper>
                        <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Write your review..." required />


                        <input type="number" value={starCount} min="1" max="5" onChange={(e) => setStarCount(e.target.value)} required />
                    </InputWrapper>
                    {arr.map((e, i) => {
                        return (
                            <>
                                <StarSpan onClick={() => setStarCount(e)} style={{color : e <= starCount ? "yellow" : "gray"}}>
                                    <FaStar />
                                </StarSpan>
                            </>
                        )
                    })}

                    <Button style={{ marginTop: '30px', marginLeft: '30px' }} type="submit">Add Review</Button>
                </form>
            )}

            <ul>
                {reviews.map((review) => (
                    <li key={review._id}>
                        <p>{review.anun}: {review.description} ({review.number} stars) - {review.status}</p>
                        {isAdmin && (
                            <>
                                <Button onClick={() => updateReview(review._id, "done")} disabled={review.status === "done"}>Mark as Done</Button>
                                <Button onClick={() => updateReview(review._id, "closed")} disabled={review.status === "closed"}>Close</Button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

