import React from 'react';
import './Loader.css'


const Loader = ({ loading }) => {
    const isLoading = loading ? "isActive" : ""

    return (
        <div className={`loader__container ${isLoading}`}>
            <div className="loader__loader"></div>
        </div>
    )
}

export default Loader;