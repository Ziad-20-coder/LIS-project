// Card.jsx
import { useEffect, useState } from "react";
import "../Styles/Card.css";

const Card = ({ image, title, isFav, onToggleFav, delFunc }) => {
    const [rating, setRate] = useState(0);

    function increase() {
        if (rating >= 5) return;
        setRate((prevRate) => prevRate + 1);
    }

    function decrease() {
        if (rating <= 0) return;
        setRate((prevRate) => prevRate - 1);
    }

    // Remove local isFav state — now controlled by parent
    // function toggleFav() { ... } → no longer needed

    useEffect(() => {
        console.log("rendered");
    }, [rating]);

    return (
        <div className='card-container'>
            <div className='card-content'>
                <div className='card-image'>
                    <img src={image} alt='card image' />
                </div>
                <div className='card-info'>
                    <h2>Name: {title}</h2>
                    <p>Rating: {rating}/5</p>
                    <button className="del-btn" onClick={() => delFunc()}>X</button>
                    <button className='fav' onClick={onToggleFav}>
                        {" "}
                        {/* 👈 Use parent handler */}
                        {isFav ? "❤️" : "♡"}
                    </button>
                    <div className='btns'>
                        <button onClick={increase}>+</button>
                        <button onClick={decrease}>-</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
