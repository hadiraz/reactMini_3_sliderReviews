import React , { useState } from 'react'
import Data from "./data" ;
import { BiChevronRight , BiChevronLeft } from "react-icons/bi";
import {FaQuoteRight} from "react-icons/fa";

function Reviews() {
    const [reviewData , setData] = useState(Data) ;
    const [reviewIndex , setIndex] = useState(0) ;
    const {name,id,job,image,text} = reviewData[reviewIndex];

    const goNextPrev = (mode) => {
        let index = reviewIndex ;
        if(mode === 0){
            index = reviewIndex + 1
            if(index > reviewData.length - 1){
                index = 0;
            }
        }
        if(mode === 1){
            index = reviewIndex - 1
            if(index < 0){
                index = reviewData.length - 1;
            }
        }
        setIndex(index);
    }

    const changeRandom = () => {
        let random = Math.floor(Math.random() * reviewData.length);
        if(random === reviewIndex){
            random = reviewIndex + 1
            if(random > reviewData.length - 1){
                random = 0;
            }
        }
        setIndex(random);
    }

    return (
        <article className="review-item">
            <div className="image-box">
            <img className="profile-pic" src={image} alt={name}/>
            <span class="quote-box">
            <FaQuoteRight className="quotes"/>
            </span>
            </div>
            <div className="name-box">
                <p className="name">{name}</p>
                <p className="carrier">{job}</p>
            </div>
            <div className="detail-box">
                <p className="detail">{text}</p>
            </div>
            <div className="buttons-box">
                <span className="changing-buttons">
                    <button className="prev-next" onClick={()=>goNextPrev(0)}>
                    <BiChevronLeft  class="next-prev-icon" />
                    </button>
                    <button className="prev-next" onClick={()=>goNextPrev(1)}>
                        <BiChevronRight class="next-prev-icon"/>
                        </button>
                </span>
                <span className="random-change">
                    <button className="button-random" onClick={changeRandom}>
                        random
                    </button>
                </span>
            </div>
        </article>
    )
}

export default Reviews
