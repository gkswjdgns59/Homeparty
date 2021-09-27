import React, {useState} from 'react';
import styles from './Overlay.module.css';

export default function Overlay(props){
    const [op, setOp] = useState(null);
    const callClose = props.callClose;
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
    return(
        <div>
            <div className={styles.header}>BUILD</div>
            <div className={styles.rowOption}>
                <span className={styles.textOption}>COLOR</span>
                <span className={styles.options}>
                    <div onClick={handleOp} className={styles.op1}>
                        {op==1 && <div onClick={dehandleOP} className={styles.opSelected}>
                        </div>}
                    </div>
                    <div onClick={handleOp} className={styles.op2}>
                        {op==2 && <div onClick={dehandleOP} className={styles.opSelected}>
                        </div>}
                    </div>
                    <div onClick={handleOp} className={styles.op3}>
                        {op==3 && <div onClick={dehandleOP} className={styles.opSelected}>
                        </div>}
                    </div>
                    <div onClick={handleOp} className={styles.op4}>
                        {op==4 && <div onClick={dehandleOP} className={styles.opSelected}>
                        </div>}
                    </div>
                </span>
            </div>
            {op!=null && <div>
                <hr size={5}/>
                <div className={styles.rowRecipt}>
                    <span className={styles.cost}>COST:</span>
                    <span className={styles.cost}>{10+op*5}</span>
                </div>
                <div className={styles.rowRecipt}>
                    <span className={styles.balance}>BALANCE:</span>
                    <span className={styles.balance}>120</span>
                </div>
            </div>}
            
            <hr/>
            <div className={styles.rowAction}>
                <span onClick={callClose} className={styles.cancelAction}>CANCEL</span>
                {op===null &&
                    <span className={styles.acceptUnabled}>ACCEPT</span>}
                {op!=null &&
                    <span className={styles.acceptIdle}>ACCEPT</span>}
            </div>
        </div>
    )
}