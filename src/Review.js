import React , {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

 const Review = () => {
     const [index, setIndex]        = useState(0);
     const {name, image, job, text} = people[index];

     //check index where it's up the length or belew the length
     const checkNumber = (number) =>{
        if(number > people.length-1){
            return 0;
        }
        if(number < 0){
            return people.length-1;
        }
        return number;
     }

     //preview Btn handler
     const prevReview = (index) =>{
        setIndex( (index) =>{
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
     }

     //next Btn handler
     const nextReview = () =>{
         setIndex( (index) =>{
             let newIndex = index + 1;
             return checkNumber(newIndex);
         })
     }
     
     //random review 
     const randomReview = () =>{
        let randomNumber = Math.floor( Math.random() * people.length );
        if( randomNumber === index ){
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
     }

    return (
        <article className="review">
            <div className="image-container">
                <img src={image} alt={name} className="person-image"/>
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevReview}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextReview}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn" onClick={randomReview}>Surprise me</button>
        </article>
    );
}
export default Review;