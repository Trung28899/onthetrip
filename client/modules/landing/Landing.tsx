import React, { useState } from "react";
import classes from "./Landing.module.scss";
import Typography from "../common/components/Typography/Typography";
import SearchBar from "./components/SearchBar/SearchBar";
import { getTripBySearchTerm, TripTableObject } from "./LandingAPI";
import useLoading from "@/modules/common/hooks/useLoading";
import Table from "../common/components/Table/Table";
import { ColumnFields } from "../common/components/Table/TableProps";

function Landing() {
  const [data, setData] = useState<TripTableObject[][]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { startLoading, endLoading } = useLoading();

  const columns: ColumnFields[] = [
    {
      label: "Time",
      key: "time",
    },
    {
      label: "Activity",
      key: "activity",
    },
    {
      label: "Comment",
      key: "comment",
    },
  ];

  const fetchTripData = async () => {
    startLoading();
    const result = await getTripBySearchTerm(searchTerm);
    setData(result);
    endLoading();
  };
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="heading" className={classes.title}>
          Trip Planner
        </Typography>
        <Typography variant="subheading" className={classes.description}>
          Plan your perfect trip with just a few clicks!
        </Typography>
        <Typography variant="subheading" className={classes.description}>
          Get detailed schedule for your chosen destination
        </Typography>
      </div>

      <div className={classes.inputContainer}>
        <SearchBar
          placeholder="A trip to Hanoi, Vietnam for 5 days..."
          onClick={fetchTripData}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              fetchTripData();
            }
          }}
        />
      </div>

      {data.length > 0 && (
        <div className={classes.tableContainer}>
          {data.map((day, index) => {
            return (
              <div key={day.length + index} className={classes.dayContainer}>
                <Typography variant="subheading" className={classes.dayHeading}>
                  Day {index + 1}
                </Typography>

                <Table
                  itemsPerPagePagination={100}
                  columnFields={columns}
                  data={day}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Landing;
