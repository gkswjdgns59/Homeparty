import React, {useState} from 'react';
import styles from './Fields.module.css';
import Modal from 'react-overlays/Modal';
import OverlayIf from './OverlayIf';
import styled from 'styled-components';
import OverlayThen from './OveryThen';

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

const StyledModalIf = styled(Modal)`
    position: fixed;
    width: 410px;
    height: 735px;
    z-index: 1040;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 11px;
    border: 0px solid #e5e5e5;
    outline: none;
    background: radial-gradient(92.63% 92.63% at 27.6% 18.75%, #EABFD8 0%, #A08DC1 100%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
`;

const StyledModalThen = styled(Modal)`
    position: fixed;
    width: 410px;
    height: 735px;
    z-index: 1040;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 11px;
    border: 0px solid #e5e5e5;
    outline: none;
    background: radial-gradient(98.88% 98.88% at 24% 17.19%, #F8D6E0 0%, #AEDBDD 100%);;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
`;

export default function FieldDice(){
    const [hoverIf, setHoverIf] = useState(false);
    const [hoverThen, setHoverThen] = useState(false);
    const [showIf, setShowIf] = useState(false);
    const [showThen, setShowThen] = useState(false);

    const renderBackdrop = (props) => <Backdrop {...props} />;

    return(
        <div>
            <div className={styles.containCard}>
                <div onMouseEnter={()=>setHoverIf(true)} onMouseLeave={()=>setHoverIf(false)} className={styles.cardIf}>                    
                    {hoverIf && <div onClick={()=>setShowIf(true)} className={styles.hoverCard}>
                        FLIP
                    </div>}
                    <div className={styles.rectCard}>
                        <div className={styles.textCard}>
                            IF YOU,
                        </div>
                    </div>
                </div>
                <div onMouseEnter={()=>setHoverThen(true)} onMouseLeave={()=>setHoverThen(false)} className={styles.cardThen}>
                    {hoverThen && <div onClick={()=>setShowThen(true)} className={styles.hoverCard}>
                            FLIP
                        </div>}
                    <div className={styles.rectCard}>
                        <div className={styles.textCard}>
                            THEN <br/> YOU..
                        </div>
                    </div>
                </div>
                <StyledModalIf 
                    show={showIf}
                    onHide={()=> {setShowIf(false); setHoverIf(false)}}
                    renderBackdrop={renderBackdrop}
                >
                    <OverlayIf idx={parseInt(Math.floor(Math.random()*15)+1)} callClose={()=>{setShowIf(false); setHoverIf(false)}}>
                    </OverlayIf>
                </StyledModalIf>
                <StyledModalThen 
                    show={showThen}
                    onHide={()=> {setShowThen(false); setHoverThen(false)}}
                    renderBackdrop={renderBackdrop}
                >
                    <OverlayThen idx={parseInt(Math.floor(Math.random()*20)+1)} callClose={()=>{setShowThen(false); setHoverThen(false)}}>
                    </OverlayThen>
                </StyledModalThen>
            </div>
        </div>
    )
}