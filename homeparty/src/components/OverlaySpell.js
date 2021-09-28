import React, {useState} from 'react';
import CashHandler from './CashHandler';
import styles from './Overlay.module.css';

export default function OverlayBuild(props){
    const callClose = () => {
        props.callClose();
        setOpt(null);
        setOp(null);
    }
    const [opt, setOpt] = useState(null);
    const [op, setOp] = useState(null);
    const [num, setNum] = useState(null);
    const [own, setOwn] = useState(null);
    
    const handleOpt = (event) => {
        const classIdx = event.target.id;
        if(classIdx.includes('opt2')){
            setOpt(2);
        }else if(classIdx.includes('opt3')){
            setOpt(3);
        }else if(classIdx.includes('opt4')){
            setOpt(4);
        }else if(classIdx.includes('opt5')){
            setOpt(5);
        }
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

    const doSale = () => {
        CashHandler.setBuildingWorth(props.idx-1, 10+op*5);
        setOp(null);
        callClose();
    }

    const handleOwn = (event) => {
        const idx = event.target.id;
        setOwn(idx);
    }
    const dehandleOwn = () => {
        setOwn(null);
    }
    const handleNum = (event) => {
        const idx = event.target.id;
        setNum(idx);
    }
    const dehandleNum = () => {
        setNum(null);
    }

    const doSnap = () => {
        CashHandler.setBuildingWorth(own-1, -((10+op*5)*num));
        callClose();
    }

    const doGift = () => {
        CashHandler.setBuildingWorth(props.idx-1, -((10+op*5)*num));
        CashHandler.setBuildingWorth(own-1, (10+op*5)*num);
        callClose();
    }

    const doAuto = () => {
        CashHandler.setBuildingWorth(props.idx-1, -(10+op*5)*num);
        callClose();
    }

    const givingTree = () => {
        CashHandler.setCash((props.idx)%5, 10);
        CashHandler.setCash((props.idx+1)%5, 10);
        CashHandler.setCash((props.idx+2)%5, 10);
        CashHandler.setCash((props.idx+3)%5, 10);
        CashHandler.setCash(props.idx-1, -40);
        callClose();
    }

    return(
        <div>
            {opt===null && <div>
                <div className={styles.header}>MAGIC SPELL</div>
                <hr className={styles.list}/>
                <div className={styles.listContent} onClick={givingTree}>THE GIVING TREE</div>
                <hr className={styles.list}/>
                <div className={styles.listContent} id='opt2' onClick={handleOpt}>EXCEPTIONAL SALE</div>
                <hr className={styles.list}/>
                <div className={styles.listContent} id='opt3' onClick={handleOpt}>LORD'S SNAP</div>
                <hr className={styles.list}/>
                <div className={styles.listContent} id='opt4' onClick={handleOpt}>VIRTUE OF THE GIFT</div>
                <hr className={styles.list}/>
                <div className={styles.listContent} id='opt5' onClick={handleOpt}>AUTOIMMUNITY</div>
                </div>}
            {opt===2 && <div>
                <div className={styles.header}>EXCEPTIONAL SALE</div>
                <div className={styles.rowOption}>
                    <span className={styles.textOption}>COLOR:</span>
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
                <hr/>
                <div className={styles.rowAction}>
                    <span onClick={callClose} className={styles.cancelAction}>CANCEL</span>
                    {op===null &&
                        <span className={styles.acceptUnabled}>ACCEPT</span>}
                    {op!==null &&
                        <span onClick={doSale} className={styles.acceptIdle}>ACCEPT</span>}
                </div>
                </div>}
            {opt===3 && <div>
                <div className={styles.header}>LORD'S SNAP</div>
                <div className={styles.rowOption}>
                    <span className={styles.textOption}>OWNER:</span>
                    <span className={styles.options}>
                        <div onClick={handleOwn} className={styles.own} id="1">
                            1
                            {own==='1' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleOwn} className={styles.own} id="2">
                            2
                            {own==='2' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleOwn} className={styles.own} id="3">
                            3
                            {own==='3' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleOwn} className={styles.own} id="4">
                            4
                            {own==='4' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleOwn} className={styles.own} id="5">
                            5
                            {own==='5' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                            </div>}
                        </div>
                    </span>
                </div>
                <div className={styles.rowOption}>
                    <span className={styles.textOption}>COLOR:</span>
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
                            {num==='1' && <div onClick={dehandleNum} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleNum} className={styles.own} id="2">
                            2
                            {num==='2' && <div onClick={dehandleNum} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleNum} className={styles.own} id="3">
                            3
                            {num==='3' && <div onClick={dehandleNum} className={styles.ownSelected}>
                            </div>}
                        </div>
                    </span>
                </div>
                <hr/>
                <div className={styles.rowAction}>
                    <span onClick={callClose} className={styles.cancelAction}>CANCEL</span>
                    {!(op!==null && num!==null && own!==null) &&
                        <span className={styles.acceptUnabled}>ACCEPT</span>}
                    {op!==null && num!==null && own!==null &&
                        <span onClick={doSnap} className={styles.acceptIdle}>ACCEPT</span>}
                </div>
                </div>}
            {opt===4 && <div>
                <div className={styles.header}>VIRTUE OF THE GIFT</div>
                <div className={styles.rowOption}>
                    <span className={styles.textOption}>GIFT TO:</span>
                    <span className={styles.options}>
                        <div onClick={handleOwn} className={styles.own} id="1">
                            1
                            {own==='1' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleOwn} className={styles.own} id="2">
                            2
                            {own==='2' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleOwn} className={styles.own} id="3">
                            3
                            {own==='3' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleOwn} className={styles.own} id="4">
                            4
                            {own==='4' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleOwn} className={styles.own} id="5">
                            5
                            {own==='5' && <div onClick={dehandleOwn} className={styles.ownSelected}>
                            </div>}
                        </div>
                    </span>
                </div>
                <div className={styles.rowOption}>
                    <span className={styles.textOption}>COLOR:</span>
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
                            {num==='1' && <div onClick={dehandleNum} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleNum} className={styles.own} id="2">
                            2
                            {num==='2' && <div onClick={dehandleNum} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleNum} className={styles.own} id="3">
                            3
                            {num==='3' && <div onClick={dehandleNum} className={styles.ownSelected}>
                            </div>}
                        </div>
                    </span>
                </div>
                <hr/>
                <div className={styles.rowAction}>
                    <span onClick={callClose} className={styles.cancelAction}>CANCEL</span>
                    {!(op!==null && num!==null && own!==null) &&
                        <span className={styles.acceptUnabled}>ACCEPT</span>}
                    {op!==null && num!==null && own!==null &&
                        <span onClick={doGift} className={styles.acceptIdle}>ACCEPT</span>}
                </div>
                </div>}
            {opt===5 && <div>
                <div className={styles.header}>AUTOIMMUNITY</div>
                <div className={styles.rowOption}>
                    <span className={styles.textOption}>COLOR:</span>
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
                            {num==='1' && <div onClick={dehandleNum} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleNum} className={styles.own} id="2">
                            2
                            {num==='2' && <div onClick={dehandleNum} className={styles.ownSelected}>
                            </div>}
                        </div>
                        <div onClick={handleNum} className={styles.own} id="3">
                            3
                            {num==='3' && <div onClick={dehandleNum} className={styles.ownSelected}>
                            </div>}
                        </div>
                    </span>
                </div>
                <hr/>
                <div className={styles.rowAction}>
                    <span onClick={callClose} className={styles.cancelAction}>CANCEL</span>
                    {!(op!==null && num!==null) &&
                        <span className={styles.acceptUnabled}>ACCEPT</span>}
                    {op!==null && num!==null &&
                        <span onClick={doAuto} className={styles.acceptIdle}>ACCEPT</span>}
                </div>
                </div>}
        </div>
    )
}