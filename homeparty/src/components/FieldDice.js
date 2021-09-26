import React from 'react';
import styles from './Fields.module.css';

export default function FieldDice(){

    return(
        <div>
            <div className={styles.containDice}>
                <div className={styles.field}> 
                </div>
                <button className={styles.buttonDice}>
                    ROLL
                </button>
            </div>
        </div>
    )
}