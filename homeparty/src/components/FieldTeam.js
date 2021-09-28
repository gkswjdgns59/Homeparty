import React, { useState } from 'react';
import styles from './Team.module.css';
import SingleTeam from './SingleTeam';
import CashHandler from './CashHandler';

export default function FieldTeam(){
    const [rank, setRank] = useState([1,1,1,1,1]);
    const [net, setNet] = useState([150, 150, 150, 150, 150]);
    const [cash, setCash] = useState([150, 150, 150, 150, 150]);
    const setCall = () => {
        let tempRank = [];
        let tempNet = [];
        let tempCash = [];
        for (let i=0; i<5; i++){
            tempRank[i] = CashHandler.getRank(i);
            tempNet[i] = CashHandler.getNet(i);
            tempCash[i] = CashHandler.getCash(i);
        }
        setRank(tempRank);
        setNet(tempNet);
        setCash(tempCash);
    }
    return(
        <div>
            <div className={styles.contain}>
                <SingleTeam idx={1} rank={rank[0]} net={net[0]} cash={cash[0]} setCall={setCall}></SingleTeam>
                <SingleTeam idx={2} rank={rank[1]} net={net[1]} cash={cash[1]} setCall={setCall}></SingleTeam>
                <SingleTeam idx={3} rank={rank[2]} net={net[2]} cash={cash[2]} setCall={setCall}></SingleTeam>
                <SingleTeam idx={4} rank={rank[3]} net={net[3]} cash={cash[3]} setCall={setCall}></SingleTeam>
                <SingleTeam idx={5} rank={rank[4]} net={net[4]} cash={cash[4]} setCall={setCall}></SingleTeam>
            </div>
        </div>
    )
}