import React from 'react';
import styled from 'styled-components';
import "./content.css";

const Video = (props) => {
    const {url} = props;

    const CVideo = styled.iframe`
        width: 100%;
    `;

    if (!url) return <h3>Yükleniyor...</h3>;
    
    return (
        <CVideo width="2489" height="1120" src={url} title="2023 August 11 - Messier 51 in 255 Hours" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></CVideo>
    );
};

export default Video;
