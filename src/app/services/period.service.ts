// src/app/services/fathers.service.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

import * as periodData from '../../assets/period-data.json';

@Injectable({ providedIn: 'root' })
export class PeriodService {
  constructor() {}

  getPeriods(): any[] {
    return periodData['default'];
  }
}
