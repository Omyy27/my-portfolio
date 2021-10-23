import React from 'react'
import { UilAngleUp } from '@iconscout/react-unicons'

const GoTop = (props) => {
    return ( 
    <>
        <div className={props.showGoTop} onClick={props.scrollUp}>
            <button className="goTop">
                <UilAngleUp></UilAngleUp>
            </button>
        </div>
    </>
     );
}
 
export default GoTop;