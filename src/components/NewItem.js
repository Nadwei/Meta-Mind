import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const NewItem = ({
                itemType, 
                title, 
                description, 
                handleItemDelete,
                index,
                month,
                year,
            
            }) => {
    return(
        <ErrorBoundary componentName="NewItem">
        <div className="new-item-div">
            <div className="exit-type-div">
            <i className="exit fa-regular fa-rectangle-xmark" onClick={() => handleItemDelete(index)}></i>
            <span className="item-type">Item Type:{itemType}</span>
            </div>
            <div className="new-item-inner-div">
                <div className="new-item-title-div">
                <label className="new-item-title-label">Title: </label>
                <p className="title"> {title}</p>
                </div>
                <div className="new-item-description-div">
                <label className="new-item-description-label">Description: </label>
                <p className="description">{description}</p>
                </div>
            </div>
        </div>
        </ErrorBoundary>
    );
};

export default NewItem;
