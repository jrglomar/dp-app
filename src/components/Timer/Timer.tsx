import { blueButtonStyle, secondaryButtonStyle } from "../styles/Styles";
import { useEffect } from 'react';
import { setIsActive, setSeconds } from "../../store/timer-slice";
import { useTimerDispatch, useTimerSelector } from "../../store/hooks";

export default function Timer() {
    const dispatch = useTimerDispatch();
    const seconds = useTimerSelector((state) => state.time.seconds);
    const isActive = useTimerSelector((state) => state.time.isActive);

    useEffect(() => {
        localStorage.setItem('timerSeconds', seconds.toString());
        localStorage.setItem('timerIsActive', isActive.toString());
    }, [seconds, isActive]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            event.returnValue = '';
            dispatch(setIsActive(false));
        };

        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                dispatch(setSeconds(seconds - 1));
            }, 1000);
        }

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            clearInterval(interval);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [dispatch, isActive, seconds]);

    const toggleTimer = () => {
        dispatch(setIsActive(!isActive));
    };

    const resetTimer = () => {
        dispatch(setSeconds(25 * 60));
        dispatch(setIsActive(false));
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


    return (
        <div className="flex justify-center items-center">
            <div className="bg-white text-black w-2/3 p-4 rounded-xl">
                <h1 className="text-center text-xl font-semibold text-main">Pomodoro Timer</h1>
                <h2 className="text-center text-9xl font-bold">{formatTime(seconds)}</h2>
                <div className="flex justify-center mt-4">
                    <button className={blueButtonStyle} onClick={toggleTimer}>
                        {isActive ? 'Pause' : 'Start'}
                    </button>
                    <button className={secondaryButtonStyle} onClick={resetTimer}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}