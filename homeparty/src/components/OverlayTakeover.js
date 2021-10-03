import React, {useState} from 'react';
import styles from './Overlay.module.css';
import CashHandler from './CashHandler';

export default function OverlayTakeover(props){
    const [own, setOwn] = useState(null);
    const [op, setOp] = useState(null);
    const [num, setNum] = useState(null);
    const callClose = props.callClose;

    const handleOwn = (event) => {
        const idx = event.target.id;
        console.log(idx)
        setOwn(idx);
    }
    const dehandleOwn = () => {
        setOwn(null);
    }
    const handleOp = (event) => {
        const classIdx = event.target.className;
        if (classIdx.includes('op1')){
            setOp(1);
        }else if(classIdx.includes('op2')){
            setOp(2);
        }else if(classIdx.includes('op3')){
            setOp(3);
        }else if(classIdx.includes('op4')){
            setOp(4);
        }
    }

    const dehandleOP = () => {
        setOp(null);
    }
    const doTakeover = () => {
        CashHandler.setCash(props.idx-1, -((10+op*5)*2*num));
        CashHandler.setBuildingWorth(props.idx-1, (10+op*5)*num);
        CashHandler.setCash(own-1, ((10+op*5)*2*num));
        CashHandler.setBuildingWorth(own-1, -((10+op*5)*num));
        setOp(null);
        setNum(null);
        setOwn(null);
        
        callClose();
    }
    const handleNum = (event) => {
        const idx = event.target.id;
        setNum(idx);
    }
    const dehandleNum = () => {
        setNum(null);
    }

    return(
        <div>
            <div className={styles.header}>TAKEOVER</div>
            <div className={styles.rowOption}>
                <span className={styles.textOption}>OWNER:</span>
                <span className={styles.options}>
                    <div className={styles.ownGroup}>
                        <div onClick={handleOwn} className={styles.ownNum} id="1">1</div>
                        <div className={styles.ownColor1}></div>

                        {own==='1' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                        </div>}
                    </div>
                    <div className={styles.ownGroup}>
                        <div onClick={handleOwn} className={styles.ownNum} id="2">2</div>
                        <div className={styles.ownColor2}></div>
                        {own==='2' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                        </div>}
                    </div>
                    <div className={styles.ownGroup}>
                        <div onClick={handleOwn} className={styles.ownNum} id="3">3</div>
                        <div className={styles.ownColor3}></div>
                        {own==='3' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                        </div>}
                    </div>
                    <div className={styles.ownGroup}>
                        <div onClick={handleOwn} className={styles.ownNum} id="4">4</div>
                        <div className={styles.ownColor4}></div>
                        {own==='4' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                        </div>}
                    </div>
                    <div className={styles.ownGroup}>
                        <div onClick={handleOwn} className={styles.ownNum} id="5">5</div>
                        <div className={styles.ownColor5}></div>
                        {own==='5' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                        </div>}
                    </div>
                </span>
            </div>
            <div className={styles.rowOption}>
                <span className={styles.textOption}>LAND<br/>COLOR:</span>
                <span className={styles.options}>
                    <div onClick={handleOp} className={styles.op1}>
                        {op===1 && <div onClick={dehandleOP} className={styles.opSelected}>
                        </div>}
                    </div>
                    <div onClick={handleOp} className={styles.op2}>
                        {op===2 && <div onClick={dehandleOP} className={styles.opSelected}>
                        </div>}
                    </div>
                    <div onClick={handleOp} className={styles.op3}>
                        {op===3 && <div onClick={dehandleOP} className={styles.opSelected}>
                        </div>}
                    </div>
                    <div onClick={handleOp} className={styles.op4}>
                        {op===4 && <div onClick={dehandleOP} className={styles.opSelected}>
                        </div>}
                    </div>
                </span>
            </div>
            <div className={styles.rowOption}>
                <span className={styles.textOption}>NUMBER OF<br/>BULIDINGS:</span>
                <span className={styles.options}>
                    <div onClick={handleNum} className={styles.own} id="1">
                        1
                        {num==='1' && <div onClick={dehandleNum} className={styles.ownSelected2}>
                        </div>}
                    </div>
                    <div onClick={handleNum} className={styles.own} id="2">
                        2
                        {num==='2' && <div onClick={dehandleNum} className={styles.ownSelected2}>
                        </div>}
                    </div>
                    <div onClick={handleNum} className={styles.own} id="3">
                        3
                        {num==='3' && <div onClick={dehandleNum} className={styles.ownSelected2}>
                        </div>}
                    </div>
                </span>
            </div>
            {op!==null && num!==null && own!==null && <div>
                <hr size={5}/>
                <div className={styles.rowRecipt}>
                    <span className={styles.cost}>COST:</span>
                    <span className={styles.cost}>{(10+op*5)*2*num}</span>
                </div>
                <div className={styles.rowRecipt}>
                    <span className={styles.balance}>BALANCE:</span>
                    <span className={styles.balance}>{CashHandler.getCash(props.idx-1)-((10+op*5)*2*num)}</span>
                </div>
            </div>}
            
            <hr/>
            <div className={styles.rowAction}>
                <span onClick={callClose} className={styles.cancelAction}>CANCEL</span>
                {!(op!==null && num!==null && own!==null) &&
                    <span className={styles.acceptUnabled}>ACCEPT</span>}
                {op!==null && num!==null && own!==null &&
                    <span onClick={doTakeover} className={styles.acceptIdle}>ACCEPT</span>}
            </div>
        </div>
    )
}