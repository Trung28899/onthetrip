import React, { useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import type { TableDataType } from "@/modules/common/components/Table/TableProps";

import classes from "./Pagination.module.scss";

type PaginationProps = {
  itemsPerPage: number;
  data: TableDataType;
  setCurrentItems: React.Dispatch<
    React.SetStateAction<TableDataType | undefined>
  >;
};
type OnPageChangeType = { selected: number };

// Implemented this component in Table component.
function Pagination({ itemsPerPage, data, setCurrentItems }: PaginationProps) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [containerStyles, setContainerStyles] = useState([classes.container]);

  const updateCurrentItems = useCallback(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data, itemOffset, itemsPerPage, setCurrentItems]);

  const handlePageClick = useCallback(
    (event: OnPageChangeType) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    },
    [data, itemsPerPage]
  );

  useEffect(() => {
    updateCurrentItems();
    if (itemOffset >= pageCount * itemsPerPage) setItemOffset(0);
  }, [updateCurrentItems, data, itemOffset, pageCount, itemsPerPage]);

  // automatically hide the pagination when there is only 1 page
  useEffect(() => {
    if (data.length <= itemsPerPage) {
      setContainerStyles([classes.container, classes.containerHide]);
    } else {
      setContainerStyles([classes.container]);
    }
  }, [data, itemsPerPage]);

  return (
    <div className={containerStyles.join(" ")}>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName={classes.pageItem}
        pageLinkClassName={classes.pageLink}
        previousClassName={classes.pageItem}
        previousLinkClassName={classes.pageLink}
        nextClassName={classes.pageItem}
        nextLinkClassName={classes.pageLink}
        breakLabel="..."
        breakClassName={classes.pageItem}
        breakLinkClassName={classes.pageLink}
        containerClassName={[classes.paginationContainer].join(" ")}
        activeClassName={classes.activePageLink}
        disabledClassName={classes.disabled}
      />
    </div>
  );
}

export default Pagination;
