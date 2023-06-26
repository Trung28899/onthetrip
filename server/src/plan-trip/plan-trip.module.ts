import { Module } from '@nestjs/common';
import { PlanTripController } from './plan-trip.controller';
import { PlanTripService } from './plan-trip.service';

@Module({
  providers: [PlanTripService],
  controllers: [PlanTripController],
})
export class PlanTripModule {}
