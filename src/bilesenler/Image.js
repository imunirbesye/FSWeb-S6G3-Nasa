import React from 'react';
import "./content.css";
const Image = (props) => {
    const {url} = props;
    
    if (!url) return <h3>Yükleniyor...</h3>;

    return (
        <img src={url} />
    );
};

export default Image;