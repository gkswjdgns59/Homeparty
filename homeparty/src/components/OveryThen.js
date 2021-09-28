import React from "react";
import styles from './Overlay.module.css';
import Img1 from '../images/thenYou/1.png';
import Img2 from '../images/thenYou/2.png';
import Img3 from '../images/thenYou/3.png';
import Img4 from '../images/thenYou/4.png';
import Img5 from '../images/thenYou/5.png';
import Img6 from '../images/thenYou/6.png';
import Img7 from '../images/thenYou/7.png';
import Img8 from '../images/thenYou/8.png';
import Img10 from '../images/thenYou/10.png';
import Img11 from '../images/thenYou/11.png';
import Img12 from '../images/thenYou/12.png';
import Img13 from '../images/thenYou/13.png';
import Img14 from '../images/thenYou/14.png';
import Img15 from '../images/thenYou/15.png';
import Img16 from '../images/thenYou/16.png';
import Img17 from '../images/thenYou/17.png';
import Img18 from '../images/thenYou/18.png';
import Img19 from '../images/thenYou/19.png';
import Img20 from '../images/thenYou/20.png';
import Img21 from '../images/thenYou/21.png';

const images = {
    1: {
        'img' : Img1,
        'title' : 'Mr. Lazy',
        'content' : 'You recieve just NOTHING'
    },
    2: {
        'img' : Img2,
        'title' : 'Guardian Angel',
        'content' : 'You can use this card <br/> to pass others’ land <br/> without paying any fee.'
    },
    3: {
        'img' : Img3,
        'title' : 'ID Card',
        'content' : 'You can use this card <br/> to escape Library.'
    },
    4: {
        'img' : Img4,
        'title' : 'Giving Tree',
        'content' : 'Gift 10FPD to  every other teams.'
    },
    5: {
        'img' : Img5,
        'title' : 'Teleportation',
        'content' : 'Move to anywhere you want. <br/> If you pass START while moving, <br/> you can receive salary.'
    },
    6: {
        'img' : Img6,
        'title' : 'Guardian Angel',
        'content' : 'You can use this card <br/> to pass others’ land <br/> without paying any fee.'
    },
    7: {
        'img' : Img7,
        'title' : 'ID Card',
        'content' : 'You can use this card <br/> to escape Library.'
    },
    8: {
        'img' : Img8,
        'title' : 'Autoimmunity',
        'content' : 'Destroy all buildings <br/> on your most expensive land.'
    },
    9: {
        'img' : Img21,
        'title' : 'Nag of Mother',
        'content' : 'Choose a team. <br/> Send that team’s token <br/> to Library right now.'
    },
    10: {
        'img' : Img10,
        'title' : 'Virtue of the Gift',
        'content' : 'Gift one land <br/> of your own to the team <br/> which has lowest net worth.'
    },
    11: {
        'img' : Img11,
        'title' : 'Traffic JAM',
        'content' : 'Everyone Cannot Use Taxi Stand for 2 turns.'
    },
    12: {
        'img' : Img12,
        'title' : 'Mr. Lazy',
        'content' : 'You recieve just NOTHING'
    },
    13: {
        'img' : Img13,
        'title' : 'Cram the Night',
        'content' : 'Move to Library right now.'
    },
    14: {
        'img' : Img14,
        'title' : 'Lord’s Snap',
        'content' : 'Choose one land <br/> occupied by other team. <br/> Destroy all buildings <br/> on that land.'
    },
    15: {
        'img' : Img15,
        'title' : 'Surfer of Blue Ocean',
        'content' : 'Move to any empty land. <br/> If every land is occupied, <br/> move to Library. '
    },
    16: {
        'img' : Img16,
        'title' : 'Salary',
        'content' : 'Receive Salary right now.'
    },
    17: {
        'img' : Img17,
        'title' : 'Threat of the Professor',
        'content' : 'Send Everyone to Library.'
    },
    18: {
        'img' : Img18,
        'title' : 'Puppet Master',
        'content' : 'Choose one team’s token <br/> and move it to anywhere you want'
    },
    19: {
        'img' : Img19,
        'title' : 'Exceptional Sale',
        'content' : 'Build one extra building <br/> on your occuping land <br/> without any cost.'
    },
    20: {
        'img' : Img20,
        'title' : '‘I`ve come to bargain!’',
        'content' : 'Do what your did <br/> for the mission of ‘If you’ card again! <br/> Then, draw another ‘Then you’ card.'
    }
}

export default function OverlayThen(props){
    const callClose = props.callClose;
    return(
        <div onClick={callClose} className={styles.cardIf}>
            <img src={images[props.idx].img} alt={images[props.idx].title} className={styles.cardImage}></img>
            <hr width="82px" align="center" size="5" color="black"/>
            <div className={styles.cardType}>{images[props.idx].title}</div>
            <div className={styles.cardContent} dangerouslySetInnerHTML={{__html: images[props.idx].content}}></div>
            <div className={styles.rowCard}>
                <hr width="68px" align="center" size="4" />
                <span className={styles.cardType}>THEN YOU..</span>
                <hr width="68px" align="center" size="4" />
            </div>
        </div>
    )
}