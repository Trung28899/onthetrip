export type TripTableObject = {
  time: string;
  activity: string;
  comment: string;
};

const defaultHolder: TripTableObject = {
  time: '',
  activity: '',
  comment: '',
};

function splitString(input: string): string[] {
  const split = input.trim().split('|');
  return split.slice(1, split.length - 1).map((str) => str.trim());
}

export function getDayToDayTableObject(
  inputArray: string[],
): TripTableObject[][] {
  const tripTable: TripTableObject[][] = [];
  let tripTableHolder: TripTableObject[] = [];
  let objectTableHolder = defaultHolder;

  for (const item of inputArray) {
    if (
      item.toLowerCase().includes('activity') &&
      (objectTableHolder.time || objectTableHolder.activity)
    ) {
      objectTableHolder = defaultHolder;
      tripTableHolder = [];
      tripTable.push(tripTableHolder);
    } else if (item.toLowerCase().includes('---')) {
      continue;
    } else {
      const [time, activity, comment] = splitString(item);
      objectTableHolder = { time, activity, comment };
      tripTableHolder.push(objectTableHolder);
    }
  }

  tripTable.push(tripTableHolder);

  return tripTable;
}

export function separateTables(inputString: string): TripTableObject[][] {
  const tables: string[] = [];
  const regex = /\|.*\|.*\|.*\|/g;

  let match: RegExpExecArray | null;

  while ((match = regex.exec(inputString)) !== null) {
    tables.push(`${match[0].trim()}\n`);
  }

  return getDayToDayTableObject(tables);
}

/*

export function getDayToDayTableString(inputArray: string[]): string[] {
  const activityArray: string[] = [];
  let tableStringHolder: string = '';

  for (const item of inputArray) {
    if (item.toLowerCase().includes('activity')) {
      activityArray.push(tableStringHolder);
      tableStringHolder = '' + item + '\n';
    } else {
      tableStringHolder += item + '\n';
    }
  }

  return activityArray;
}

*/
