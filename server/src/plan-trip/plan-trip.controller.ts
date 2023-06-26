import { Controller, Get, Query } from '@nestjs/common';
import { PlanTripService } from './plan-trip.service';

@Controller('plan-trip')
export class PlanTripController {
  constructor(private planTripService: PlanTripService) {}

  @Get()
  async planTripFrom(@Query('searchTerm') searchTerm: string) {
    return this.planTripService.planTripFromSearchTerm(searchTerm);
  }
}
