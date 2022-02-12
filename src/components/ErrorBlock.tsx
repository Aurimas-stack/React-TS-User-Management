import { FC, memo } from "react";

interface IErrorBlock {
  error: string;
}

const ErrorBlock: FC<IErrorBlock> = ({ error }) => {
  if (!error) return null;

  return <div className="error_block">{error}</div>;
};

export default memo(ErrorBlock);
