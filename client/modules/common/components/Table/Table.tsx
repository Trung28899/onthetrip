import React, { useEffect, useState } from "react";
import classes from "./TableStyles.module.scss";
import { getUniqueId } from "../../utils/id_helper";
import type { TableProps } from "./TableProps";
import Pagination from "./Pagination/Pagination";
import Empty from "./Empty/Empty";

const Table = (props: TableProps) => {
  const { data, columnFields, itemsPerPagePagination } = props;
  const { tableToPagination, noPagination, emptyData = true } = props;

  const [currentItems, setCurrentItems] = useState<typeof data | undefined>(
    undefined
  );
  const [tableHead, setTableHead] = useState<JSX.Element[] | undefined>();
  const [tableRows, setTableRows] = useState<JSX.Element[] | undefined>();

  useEffect(() => {
    const generateTableHead = columnFields.map((item) => {
      return (
        <th key={getUniqueId()}>
          {item.label} {item.icon}
        </th>
      );
    });

    const generateTableRows = () => {
      return currentItems?.map((item) => {
        const dataCell = columnFields.map((column) => {
          const columnStyles = item?.columnStyles?.[column.key] || {};
          const fieldsError: { [key: string]: boolean } =
            item?.fieldsError || {};
          const isError = fieldsError[column.key];
          return (
            <td
              style={columnStyles}
              className={isError ? "error" : ""}
              key={getUniqueId()}
            >
              {item[column.key]}
            </td>
          );
        });
        const rowStyles = item?.rowStyles || {};
        return (
          <tr style={rowStyles} key={getUniqueId()}>
            {dataCell}
          </tr>
        );
      });
    };

    if (noPagination) {
      setCurrentItems(data);
    }

    setTableRows(generateTableRows);
    setTableHead(generateTableHead);
  }, [data, columnFields, currentItems, noPagination]);

  const isEmpty = (!tableRows || tableRows?.length <= 0) && emptyData;

  return (
    <div className={classes.container}>
      <div>
        <table
          style={{
            marginBottom: tableToPagination || "5vh",
          }}
        >
          <thead>
            <tr>{tableHead}</tr>
          </thead>
          {!isEmpty && <tbody>{tableRows}</tbody>}
        </table>

        {isEmpty && <Empty />}

        {!noPagination && (
          <div className={classes.paginationContainer}>
            <Pagination
              itemsPerPage={itemsPerPagePagination}
              data={data}
              setCurrentItems={setCurrentItems}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
