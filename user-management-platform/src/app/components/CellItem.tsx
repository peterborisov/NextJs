import { FC } from "react";

type CellItemProps = {
  title: string;
  value: string | number | undefined;
};

export const CellItem: FC<CellItemProps> = ({ title, value }) => {
  return (
    <div className="w-fit min-w-24 rounded border border-gray-300 p-4">
      <h5 className="font-bold">{title}</h5>
      <p>{value}</p>
    </div>
  );
};
