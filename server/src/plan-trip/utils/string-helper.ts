export type TripTableObject = {
  time: string;
  activity: string;
  comment: string;
};

interface TripDataType1 {
  trip: {
    day: string;
    timeline?: TripTableObject[];
    activities?: TripTableObject[];
    schedule?: TripTableObject[];
  }[];
}

interface TripDataType2 extends TripTableObject {
  day?: string;
}

function processDataWithTrip(objectData: TripDataType1) {
  const { trip: trips } = objectData;
  const tripTable: TripTableObject[][] = [];

  for (const trip of trips) {
    tripTable.push(trip.timeline || trip.activities || trip.schedule);
  }

  return tripTable;
}

function processDataWithoutTrip(objectData: TripDataType2[]) {
  const uniqueDays = new Set<string>();
  const tripTable: TripTableObject[][] = [];

  for (const trip of objectData) {
    uniqueDays.add(trip.day);
  }
  const days = Array.from(uniqueDays);

  for (const day of days) {
    tripTable.push(objectData.filter((trip) => trip.day === day));
  }

  return tripTable;
}

export function getTableData(inputString: string) {
  const objectData = JSON.parse(inputString);

  if (objectData.trip) {
    return processDataWithTrip(objectData);
  }

  return processDataWithoutTrip(objectData);
}
