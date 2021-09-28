import React, { useState } from 'react';
import styles from './Team.module.css';
import SingleTeam from './SingleTeam';
import CashHandler from './CashHandler';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import OverlayMonopoly from './OverlayMonopoly';

const Backdrop = styled("div")`
    position: fixed;
    z-index: 1040;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
`;

const StyledModal = styled(Modal)`
    position: fixed;
    width: 390px;
    z-index: 1040;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 11px;
    border: 1px solid #e5e5e5;
    outline: none;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
`;

export default function FieldTeam(){
    const renderBackdrop = (props) => <Backdrop {...props} />;
    const [rank, setRank] = useState([1,1,1,1,1]);
    const [net, setNet] = useState([150, 150, 150, 150, 150]);
    const [cash, setCash] = useState([150, 150, 150, 150, 150]);
    const [mono, setMono] = useState(false);

    const handleClose = () => {
        setMono(false);
        setCall();
    }

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
                <div onClick={()=>{setMono(true)}} className={styles.monopoly}>
                ADD MONOPOLY
                </div>
            </div>
            <StyledModal 
                show={mono}
                onHide={()=> {setMono(false)}}
                renderBackdrop={renderBackdrop}
            >
                <OverlayMonopoly callClose={handleClose}>
                </OverlayMonopoly>
            </StyledModal>
        </div>
    )
}