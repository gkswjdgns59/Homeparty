import React, {useState} from 'react';
import styles from './Team.module.css';

export default function SingleTeam(props){
    const [hover, setHover] = useState(false);
    const toggleHover = () => {
        setHover(!hover);
    }
    return(
        <div className={styles.box} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            {hover && <div className={styles.hovered}>
                
                </div>}
            <div className={styles.textGroup}>
                <span className={styles.textTitle}>
                    TEAM #{props.idx}
                </span>
                <span className={styles.textRank}>
                    RANK: 1
                </span>
            </div>
            <div className={styles.textStats}>
                NET WORTH   150
            </div>
            <div className={styles.textStats}>
                CASH   150
            </div>
            
        </div>
    )
}