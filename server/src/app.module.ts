import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanTripModule } from 'src/plan-trip/plan-trip.module';

@Module({
  imports: [PlanTripModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
