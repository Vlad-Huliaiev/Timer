import React, { useState, useEffect } from 'react';
import "./Timer.css";

const Timer = ({startTime}) => {
  const [time, setTime] = useState(startTime);
  const [isActive, setIsActive] = useState(false);

  function start() {
    setIsActive(!isActive);
  }

  function stop() {
      setTime(startTime);
      setIsActive(!isActive);
    }

  function wait() {
      setIsActive(false);
    }

  function reset() {
    setTime(startTime);
    setIsActive(true);
  }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
            setTime(time => time + 2);
            });
        }
        return () => clearInterval(interval);
    }, [isActive, time, startTime]);

    function hourMinSec(s) {
        let sec = parseInt((s / 1000) % 60),
            min = parseInt((s / (1000 * 60)) % 60),
            hour = parseInt((s / (1000 * 60 * 60)) % 24)

        sec = (sec < 10) ? '0' + sec : sec;
        min = (min < 10) ? '0' + min : min;
        hour = (hour < 10) ? '0' + hour : hour;

        return hour + ':' + min + ':' + sec;
    }

  return (
    <div className="app">
      <div className="time">
        {hourMinSec(time)}
      </div>
      <div className="row">
        <button className={`button button-primary-${isActive ? 'active' : 'inactive'}`} onClick={isActive ? stop : start}>
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button className="button" onDoubleClick={wait}>
                  Wait
            </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;