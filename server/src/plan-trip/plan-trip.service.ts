import { Injectable, NotFoundException } from '@nestjs/common';
import { config } from 'dotenv';

config();

@Injectable()
export class PlanTripService {
  async planTripFromSearchTerm(searchTerm: string) {
    // const queryTable = `Give me a detailed planning for the following trip: ${searchTerm}. Please Format the data in TEXT TABLE FORMAT FOR EACH DAY with Time, Activity and Comment columns for each table, each cell of the table is surrounded by a block that start with | and end with |, the day number must not be included in the table AT ALL`;
    const query = `Provide a detailed planning for ${searchTerm} with detailed timeline for each day. Format the data in a JSON format, the JSON data should be an array with day, time, activity and comment properties in each object`;
    console.log('Loading...');

    try {
      console.log('Completed !!');
      // return { data: getTableData(result.data.choices[0].message.content) };
      return { data: query };
    } catch (error) {
      // console.log(error);
      throw new NotFoundException('Trip Not Found! Please try again');
    }
  }
}
