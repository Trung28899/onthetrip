import axios from "axios";

export type TripTableObject = {
  time: string;
  activity: string;
  comment: string;
};

export const getTripBySearchTerm = async (
  searchTerm: string
): Promise<TripTableObject[][]> => {
  const result = await axios.get(
    `http://localhost:8080/plan-trip?searchTerm='${searchTerm}'`
  );
  return result.data.data;
};
