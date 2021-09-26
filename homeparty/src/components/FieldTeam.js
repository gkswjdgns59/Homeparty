import React from 'react';
import styles from './Team.module.css';
import SingleTeam from './SingleTeam';

export default function FieldTeam(){

    return(
        <div>
            <div className={styles.contain}>
                <SingleTeam idx={1}></SingleTeam>
                <SingleTeam idx={2}></SingleTeam>
                <SingleTeam idx={3}></SingleTeam>
                <SingleTeam idx={4}></SingleTeam>
                <SingleTeam idx={5}></SingleTeam>
            </div>
        </div>
    )
}