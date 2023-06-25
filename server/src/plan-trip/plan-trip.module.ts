import { Module } from '@nestjs/common';
import { PlanTripController } from './plan-trip.controller';

@Module({
  controllers: [PlanTripController],
})
export class PlanTripModule {}
