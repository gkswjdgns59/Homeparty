import React from "react";
import styles from './Overlay.module.css';

export default function OverlayThen(props){
    const callClose = props.callClose;
    return(
        <div onClick={callClose}>

        </div>
    )
}