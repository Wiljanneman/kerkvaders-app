// src/app/services/fathers.service.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

import * as apostolicData from '../../assets/apostolic-fathers.json';

@Injectable({ providedIn: 'root' })
export class FathersService {
  constructor() {}

  getFathersData(): any[] {
    return apostolicData['default'];
  }
}
