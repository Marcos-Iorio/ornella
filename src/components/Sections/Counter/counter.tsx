import { useEffect, useState } from "react";
import Grainient from "../../Grainient";
import Section from "../../Section";
import CountUp from "../../CountUp";

const START_DATE = new Date("2026-04-02");

const getElapsed = () => {
  const diff = Date.now() - START_DATE.getTime();
  const totalMinutes = Math.floor(diff / 1000 / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  return { days, hours, minutes };
};

const CounterItem = ({
  time,
  timeSpec,
}: {
  time: number;
  timeSpec: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CountUp
        from={0}
        to={time}
        separator=","
        direction="up"
        duration={1}
        className="text-9xl font-jetbrains font-black"
      />
      <span className="text-4xl font-jetbrains font-bold">{timeSpec}</span>
    </div>
  );
};

const Counter = () => {
  const [elapsed, setElapsed] = useState(getElapsed);

  useEffect(() => {
    const interval = setInterval(() => setElapsed(getElapsed()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="grid place-content-center h-screen bg-transparent text-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 m-0 mx-auto flex flex-col gap-3">
        <h2 className="text-4xl font-bold font-jetbrains text-center">
          Somos novios desde:
        </h2>
        <div className="flex flex-row justify-between gap-5">
          <CounterItem time={elapsed.days} timeSpec="DÍAS" />
          <CounterItem time={elapsed.hours} timeSpec="HORAS" />
          <CounterItem time={elapsed.minutes} timeSpec="MINUTOS" />
        </div>
      </div>
    </Section>
  );
};

export default Counter;
