import { Injectable, NotFoundException } from '@nestjs/common';
import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import { separateTables } from './utils/string-helper';

config();

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  }),
);

@Injectable()
export class PlanTripService {
  async planTripFromSearchTerm(searchTerm: string) {
    const query = `Give me a detailed planning for the following trip: ${searchTerm}. Please Format the data in TEXT TABLE FORMAT FOR EACH DAY with Time, Activity and Comment columns for each table, each cell of the table is surrounded by a block that start with | and end with |, the day number must not be included in the table AT ALL`;
    console.log('Loading...');

    try {
      const result = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo-16k',
        messages: [
          {
            role: 'user',
            content: query,
          },
        ],
      });

      return { data: separateTables(result.data.choices[0].message.content) };
    } catch (error) {
      console.log(error);
      throw new NotFoundException('trip not found');
    }
  }
}
