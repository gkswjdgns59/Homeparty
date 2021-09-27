import React from "react";
import styles from './Overlay.module.css';
import aImg from '../images/ifYou/a.png';
import bImg from '../images/ifYou/b.png';
import cImg from '../images/ifYou/c.png';
import dImg from '../images/ifYou/d.png';
import eImg from '../images/ifYou/e.png';

const images = {
    1 : {
        'img': aImg,
        'content' : 'Say ‘I Love You’ in your language. <br/>Then repeat it with<br/>your whole team members.'
    },
    2 : {
        'img': aImg,
        'content' : 'Count 1 to 10 in your language. <br/>Then repeat it with<br/> your whole team members.'
    },
    3 : {
        'img' : eImg,
        'content' : 'You skip the mission. <br/> Just draw a ‘Then you...’ card.'
    },
    4: {
        'img' : dImg,
        'content' : 'Close your eyes. <br/> If you success to remember <br/>10 cities on the board, <br/> you can draw a ‘Then you...’ card.'
    },
    5: {
        'img' : aImg,
        'content' : 'Introduce yourself in your language. <br/> Then tell us <br/> what you said in English.'
    },
    6: {
        'img' : aImg,
        'content' : 'Say ‘Nice to Meet You’ <br/> in your language. <br/> Then repeat it with <br/> your whole team members.'
    },
    7 : {
        'img' : eImg,
        'content' : 'You skip the mission. <br/> Just draw a ‘Then you...’ card.'
    },
    8: {
        'img' : dImg,
        'content' : 'Close your eyes. <br/> If you success to remember <br/> 5 cities on the board, <br/> you can draw a ‘Then you...’ card.'
    },
    9: {
        'img' : dImg,
        'content' : 'Close your eyes. <br/> If you success to remember <br/> 3 cities placed in a row on the board, <br/> you can draw a ‘Then you...’ card.'
    },
    10: {
        'img' : dImg,
        'content' : 'Take turns in the team <br/> and say the cities on the board. <br/> If you success to say <br/> at least 7 cities, <br/> you can draw a ‘then you’ card.'
    },
    11: {
        'img' : dImg,
        'content' : 'Take turns in the team <br/> and say the cities on the board. <br/> f you success to say <br/> at least 5 cities, <br/> you can draw a ‘then you’ card.'
    },
    12: {
        'img' : dImg,
        'content' : 'Say the names of <br/> all the cities your team has. <br/> If you success to say all your cities, <br/> you can draw a ‘then you’ card.'
    }, 
    13 : {
        'img' : bImg,
        'content' : 'Choose one of <br/> the numbers from 1 to 6. <br/> If at least one of the two dice <br/> rolls chosen number, <br/> you can draw a ‘then you’ card.'
    },
    14: {
        'img' : bImg,
        'content' : 'Choose either even or odd, <br/> If you roll the dice <br/> and the sum of the numbers <br/> is equal to your choice, <br/> you can draw a ‘then you’ card'
    },
    15: {
        'img' : cImg,
        'content' : 'Nominate your rival team. <br/> Take turns with the rival team representative <br/> and say the city on the board. <br/> The one who can’t answer first fails. <br/>The team that succeeded in game <br/> draws a ‘then you’ card.'
    }

};

export default function OverlayIf(props){

    const callClose = props.callClose;
    return(
        <div onClick={callClose} className={styles.cardIf}>
            <img src={images[props.idx].img} className={styles.cardImage}></img>
            <hr width="82px" align="center" size="5" color="black"/>
            <div className={styles.cardContent} dangerouslySetInnerHTML={{__html: images[props.idx].content}}></div>
            <div className={styles.rowCard}>
                <hr width="82px" align="center" size="4" />
                <span className={styles.cardType}>IF YOU,</span>
                <hr width="82px" align="center" size="4" />
            </div>
        </div>
    )
}

