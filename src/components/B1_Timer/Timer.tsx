import * as React from "react";
import style from "./Timer.module.scss";
import {useEffect, useState} from "react";
import {dateEnd} from "./data";
import {convertToTwoDigit, getDays, getHours, getMins, getSecs} from "../../helpers/timer.helpers";
import clsx from "clsx";
import face from "../../assets/png/face.png";

export const Timer = () => {
    const [timeIsOver, setTimeIsOver] = useState(false);
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const time = new Date(dateEnd.getTime() - new Date().getTime()).getTime();
        if (time > 0 && !timeIsOver) {
            setTime(time);
            setStart(true);
        }
    }, []);

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (start) {
                if (time <= 60000) {
                    setTimeIsOver(true);
                    clearTimeout(timeId);
                } else {
                    setTime((time) => time - 1000);
                }
            }
        }, 1000);
        return () => {
            clearTimeout(timeId);
        };
    }, [time]);


    return (
        <div className={style.timer}>

            {/*<p className={style.title}>*/}
            {/*    LAUNCHING ON*/}
            {/*</p>*/}

            {/*<p className={style.text}>*/}
            {/*    CENTRAL EXCHANGES IN...*/}
            {/*</p>*/}

            {/*<div className={style.timerWrapper}>*/}

            {/*    <div className={style.timeItem}>*/}
            {/*        <p>{convertToTwoDigit(getDays(time))}</p>*/}
            {/*        <p>Days</p>*/}
            {/*    </div>*/}

            {/*    <p className={style.divider}>:</p>*/}

            {/*    <div className={style.timeItem}>*/}
            {/*        <p>{convertToTwoDigit(getHours(time))}</p>*/}
            {/*        <p>Hours</p>*/}
            {/*    </div>*/}

            {/*    <p className={style.divider}>:</p>*/}

            {/*    <div className={style.timeItem}>*/}
            {/*        <p>{convertToTwoDigit(getMins(time))}</p>*/}
            {/*        <p>Mins</p>*/}
            {/*    </div>*/}

            {/*    <p className={style.divider}>:</p>*/}

            {/*    <div className={style.timeItem}>*/}
            {/*        <p>{convertToTwoDigit(getSecs(time))}</p>*/}
            {/*        <p>Seconds</p>*/}
            {/*    </div>*/}

            {/*</div>*/}

            {/*<p className={clsx(style.text, style.text_1)}>*/}
            {/*    OR... Buy Now on Presale!*/}
            {/*</p>*/}

            <img src={face} alt="" className={style.face}/>

            <p className={style.text}>
                Lets go to
            </p>

            <p className={style.title}>
                Boob Land!
            </p>

            <p className={clsx(style.text, style.text_1)}>
                Buy Now on
            </p>

            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x0eddb3da7e77ab4f5f1f636f711b320e6225c46d" target="_blank" className={style.btn}>
                <p>UNISWAP</p>
            </a>

            <p className={style.bottomtoptext}>
                $Morty
            </p>
            
            <p className={style.bottomtext}>
                Coin Contract:
            </p>
            
            <p className={style.bottomaddresstext}>
                0xB42E5F337dC4FD81e8e8891e32f6A374fBfE57af
            </p>
        </div>
    )
}
