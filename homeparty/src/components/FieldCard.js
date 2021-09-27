import React, {useState} from 'react';
import styles from './Fields.module.css';
import Modal from 'react-overlays/Modal';

export default function FieldDice(){
    const [hoverIf, setHoverIf] = useState(false);
    const [hoverThen, setHoverThen] = useState(false);
    // const [showIf, setShowIf] = useState(false);

    const toggleHoverIf = () => {
        setHoverIf(!hoverIf);
    }
    const toggleHoverThen= () => {
        setHoverThen(!hoverThen);
    }

    // const flipIf = () => {
        
    //     setShowIf(true);
    // }

    return(
        <div>
            <div className={styles.containCard}>
                <div onMouseEnter={toggleHoverIf} onMouseLeave={toggleHoverIf} className={styles.cardIf}>                    
                    {hoverIf && <div className={styles.hoverCard}>
                        FLIP
                    </div>}
                    <div className={styles.rectCard}>
                        <div className={styles.textCard}>
                            IF YOU,
                        </div>
                    </div>
                </div>
                <div onMouseEnter={toggleHoverThen} onMouseLeave={toggleHoverThen} className={styles.cardThen}>
                    {hoverThen && <div className={styles.hoverCard}>
                            FLIP
                        </div>}
                    <div className={styles.rectCard}>
                        <div className={styles.textCard}>
                            THEN <br/> YOU..
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}