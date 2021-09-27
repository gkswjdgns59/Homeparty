import React, {useState} from 'react';
import styles from './Team.module.css';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import Overlay from './Overlay';

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

export default function SingleTeam(props){
    const [hover, setHover] = useState(false);
    const [build, setBuild] = useState(false);
    const [takeover, setTakeover] = useState(false);
    const [salary, setSalary] = useState(false);
    const [fee, setFee] = useState(false);
    const [spell, setSpell] = useState(false);

    const renderBackdrop = (props) => <Backdrop {...props} />;

    return(
        <div className={styles.box} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            {hover && <div className={styles.hovered}>
                    <div onClick={()=>setBuild(true)} className={styles.circle}>
                        BUILD
                    </div>
                    <div onClick={()=>setTakeover(true)} className={styles.circleDoubleLine}>
                        TAKE<br/>OVER
                    </div>
                    <div onClick={()=>setSalary(true)} className={styles.circle}>
                        SALARY
                    </div>
                    <div onClick={()=>setFee(true)} className={styles.circleDoubleLine}>
                        PAY<br/>FEE
                    </div>
                    <div onClick={()=>setSpell(true)} className={styles.circleDoubleLine}>
                        MAGIC<br/>SPELL
                    </div>
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
            <StyledModal 
                show={build}
                onHide={()=> {setBuild(false); setHover(false)}}
                renderBackdrop={renderBackdrop}
            >
                <Overlay callClose={()=>{setBuild(false); setHover(false)}}>
                </Overlay>
            </StyledModal>
            <StyledModal 
                show={takeover}
                onHide={()=>setTakeover(false)}
                renderBackdrop={renderBackdrop}
            >
                <div>
                    test
                </div>
            </StyledModal>
            
        </div>
    )
}