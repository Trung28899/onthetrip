import { Controller, Get, Query } from '@nestjs/common';
import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import { separateTables } from 'src/plan-trip/utils/string-helper';

config();

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  }),
);

@Controller('plan-trip')
export class PlanTripController {
  @Get()
  async planTripFrom(@Query('searchTerm') searchTerm: string) {
    const query = `Give me a detailed planning for the following trip: ${searchTerm}. Please Format the data in TEXT TABLE FORMAT FOR EACH DAY with Time, Activity and Comment columns, each cell of the table is surrounded by a block that start with | and end with |, the day number must not be included in the table AT ALL`;
    try {
      const result = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: query,
          },
        ],
      });

      separateTables(result.data.choices[0].message.content);
    } catch (error) {
      console.log('error: ', error);
    }

    return { data: 'hello' };
  }
}
