import Pagination from "@components/Pagination";
import { IPaginationProps } from "@interfaces/index";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

function PaginationWrapper({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}

export default PaginationWrapper;
