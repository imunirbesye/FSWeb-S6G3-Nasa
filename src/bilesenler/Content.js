import React, {useState} from "react";
import Image from "./Image";
import Video from "./Video"; 
import "./content.css";

const Content = (props) => {

    const {veri} = props;
    console.log(veri);

    return (
        <div className="content">
            <div className="content-ust">
                <div className="content-baslik">{veri.title}</div>
                <div className="content-tarih">{veri.date}</div>
            </div>
            <div className="content-image">
                { veri.media_type === "image" ? <Image url={veri.hdurl} /> : <Video url={veri.url} /> }
            </div>
            <div className="content-metin">{veri.explanation}</div>
            <div className="content-copyright">{ veri.copyright ? veri.copyright : "Anonim"}</div>
        </div>
    )
};

export default Content; 