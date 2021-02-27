import { useEffect, useState } from 'react'
import styles from '../styles/components/CountDown.module.css'

export const CountDown = () => {
    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [SecondLeft, SecondRight] = String(seconds).padStart(2, '0').split('');


    const startCountDown = () => {
        setIsActive(true)
    }

    useEffect(() => {
        if(isActive && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
    }, [isActive, time])

    return(
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{SecondLeft}</span>
                    <span>{SecondRight}</span>
                </div>
            </div>

            <button 
                type="button" 
                className={styles.countDownButton}
                onClick={() => startCountDown()}
                >
                    {isActive ? 'Stop cycle' : 'Start a cycle'}
                
            </button>
        </div>
    )
}