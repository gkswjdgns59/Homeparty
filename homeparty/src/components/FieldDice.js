import React from 'react';
import styles from './Fields.module.css';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css'

export default function FieldDice(){

    let diceObject;
    return(
        <div>
            <div className={styles.containDice}>
                <div className={styles.field}>
                    <ReactDice
                        numDice ={2}
                        faceColor = {'#FAFAFA'}
                        dotColor = {'#F80D0D'}
                        outline = {true}
                        outlineColor = {'#EAEAEA'}
                        rollTime = {1.2}
                        ref={dice => diceObject = dice}
                        disableIndividual={true}
                        margin={30}
                    ></ReactDice>
                </div>
                <div onClick={()=>{diceObject.rollAll()}} className={styles.buttonDice}>
                    ROLL
                </div>
            </div>
        </div>
    )
}