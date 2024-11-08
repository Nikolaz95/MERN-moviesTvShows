import React, { useState } from 'react'
import usersReviews from "../../../data/ReviewModel"

//import css
import "./ReviewsSection.css";

//import img
import AvatarDefaultImg from "../../../../assets/pictures/avatar-profile.jpg"
import RemoveComment from "../../../../assets/icons/icons-remove.png"
import PostComment from "../../../../assets/icons/icon-comment.png"
import LoadMore from "../../../../assets/icons/icon-load.png"


//import components
import BtnRemove from '../../../layouts/Buttons/BtnRemove/BtnRemove';
import Buttons from '../../../layouts/Buttons/Buttons';


const ReviewsSection = () => {
    const [createComment, setCreateComment] = useState(false);
    const [displayCount, setDisplayCount] = useState(3);

    const handleCreateComment = () => {
        setCreateComment(!createComment)
    };

    const loadMoreReviews = () => {
        setDisplayCount(prevCount => prevCount + 3); // increase display limit by 3
    };


    return (
        <section className='section-Reviews'>
            <h1 className='title-Reviews'>Reviews ({usersReviews.length})</h1>
            <div className="content-Reviews">
                {/* pocetak kart reviwes */}
                <div className="main-Review">
                    {usersReviews.slice(0, displayCount).map((review) => (
                        <div key={review.reviewId} className="inner-Review">
                            <div className="innertop-Review">
                                <div className="innerleftTop-Review">
                                    <img src={AvatarDefaultImg} alt="" className="icon-Review" />
                                    <div className="innerRight-ReviewInfoUser">
                                        <p>{review.userName}</p>
                                        <p>{review.createdDate}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="innerRight-ReviewBoton">
                                <textarea
                                    className="textarea-review"
                                    placeholder="Write your review"
                                    defaultValue={review.userReview}>
                                </textarea>
                                <Buttons onClick={handleCreateComment}
                                    variant={createComment ? 'removeReview' : 'postComment'}
                                    icon={createComment ? RemoveComment : PostComment}>
                                    <p>{createComment ? 'Delete Post' : 'Post'}</p>
                                </Buttons>
                            </div>
                        </div>
                    ))}
                </div>
                {displayCount < usersReviews.length && (
                    <div className="loadMore-section">
                        <Buttons onClick={loadMoreReviews}
                            variant="loadMore"
                            icon={LoadMore}>
                            Load More
                        </Buttons>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ReviewsSection