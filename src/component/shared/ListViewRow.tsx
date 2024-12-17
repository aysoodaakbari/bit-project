import { ReactNode } from 'react';

const ListViewRow = ({
  logo,
  leftSide,
  ArrowIcon,
  rightSide,
  centerSide,
}: {
  logo?: ReactNode;
  rightSide: ReactNode;
  leftSide: ReactNode;
  ArrowIcon: ReactNode;
  centerSide: ReactNode;
}) => {
  return (
    <div className="flex flex-row justify-between w-full px-2 items-center">
      <div className="flex flex-row gap-x-2 justify-center items-center">
        {logo}
        {rightSide}
      </div>
      <div className="flex flex-row gap-x-2 justify-center items-center">
        {centerSide}
      </div>

      <div className="flex flex-row justify-center items-center">
        {leftSide} {ArrowIcon}
      </div>
    </div>
  );
};

export default ListViewRow;
