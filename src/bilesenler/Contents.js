import React, {useState} from "react"; 
import Content from "./Content";

const Contents = (props) => {
    const {veriler} = props;
      
    return (
        <div className="contents">
            <Content veri={veriler} />
        </div>
    )
};

export default Contents; 