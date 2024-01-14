    
    /*
    index <= (hover || rating): This part checks if the current index is less than or equal to the greater of hover or rating. If this condition is true, it means the star is either being hovered over or has been clicked and should be considered "active."
If the condition is true, it sets the class to "active".
If the condition is false, it sets the class to "inactive".
So, in summary:

If the current star's index is less than or equal to the greater of hover or rating, the class will be set to "active".
If the current star's index is greater than both hover and rating, the class will be set to "inactive"
    */
    import { useState } from "react";
    import { FaStar } from "react-icons/fa";
    import './style.css';

    export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
    setHover(rating);
    }

    return (
    <div className="star-rating"
    style={{
        height:"100vh",
        width:"100vw",
        
    }}>
    {[...Array(noOfStars)].map((element, index) => {
    index += 1;

    return (
    
    <FaStar
    key={index}
    className={index <= (hover || rating) ? "active" : "inactive"}
    style={{margin:"10px",
            padding:"20px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
            }}
    onClick={() => handleClick(index)}
    onMouseMove={() => handleMouseEnter(index)}
    onMouseLeave={() => handleMouseLeave()}
    size={70}
    />
    );
    })}
    </div>
    );
    }