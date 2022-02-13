import { FC } from "react";

import LoadingScreen from "../../LoadingScreen";

interface TimeOutProps {
  timeLeft: number;
}

export const TimeOutContainer: FC<TimeOutProps> = (props): JSX.Element => {
  return (
    <div className="timeout_container">
      <p>Wait for another try :</p>
      <LoadingScreen />
      <p>{props.timeLeft}</p>
    </div>
  );
};
