import React from "react";
import "../styles/NotFound.css";

const NotFound = () => {
    return (
        <div className="Notfound">
            <h1 className="404">404</h1>
            <p className="PageNot">Page not found</p>
            <img className="Notfoundimg"src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODJ6ZGxrbHlyb3BvamZyN2ZwY3dyYm1mYmh5aXVqZGhtNnBibTJrYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YFFIXwYg08nwf4U3y1/giphy.webp" alt="404" />
        </div>
    )
}

export default NotFound;