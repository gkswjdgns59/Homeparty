import React, {useState} from 'react';
import styles from './Team.module.css';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import OverlayBuild from './OverlayBuild';
import OverlayTakeover from './OverlayTakeover';
import OverlayFee from './OverlayFee';
// import OverlaySpell from './OverlaySpell';
import CashHandler from './CashHandler';

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
    const [fee, setFee] = useState(false);
    const [spell, setSpell] = useState(false);

    const renderBackdrop = (props) => <Backdrop {...props} />;
    const handleClose = () => {
        setBuild(false);
        setTakeover(false);
        setFee(false);
        setSpell(false);
        setHover(false);
        console.log(CashHandler.getData());
    }
    return(
        <div className={styles.box} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            {hover && <div className={styles.hovered}>
                    <div onClick={()=>setBuild(true)} className={styles.circle}>
                        BUILD
                    </div>
                    <div onClick={()=>setTakeover(true)} className={styles.circleDoubleLine}>
                        TAKE<br/>OVER
                    </div>
                    <div onClick={()=>{CashHandler.setCash(props.idx-1, 70); setHover(false)}} className={styles.circle}>
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
                    RANK: {CashHandler.getRank(props.idx-1)}
                </span>
            </div>
            <div className={styles.textStats}>
                NET WORTH   {CashHandler.getNet(props.idx-1)}
            </div>
            <div className={styles.textStats}>
                CASH   {CashHandler.getCash(props.idx-1)}
            </div>
            <StyledModal 
                show={build}
                onHide={()=> {setBuild(false); setHover(false)}}
                renderBackdrop={renderBackdrop}
            >
                <OverlayBuild idx={props.idx} callClose={handleClose}>
                </OverlayBuild>
            </StyledModal>
            <StyledModal 
                show={takeover}
                onHide={()=> {setTakeover(false); setHover(false)}}
                renderBackdrop={renderBackdrop}
            >
                <OverlayTakeover idx={props.idx} callClose={handleClose}>
                </OverlayTakeover>
            </StyledModal>
            <StyledModal 
                show={fee}
                onHide={()=> {setFee(false); setHover(false)}}
                renderBackdrop={renderBackdrop}
            >
                <OverlayFee idx={props.idx} callClose={handleClose}>
                </OverlayFee>
            </StyledModal>
            {/* <StyledModal 
                show={spell}
                onHide={()=> {setSpell(false); setHover(false)}}
                renderBackdrop={renderBackdrop}
            >
                <OverlaySpell idx={props.idx} callClose={handleClose}>
                </OverlaySpell>
            </StyledModal> */}
            
        </div>
    )
}