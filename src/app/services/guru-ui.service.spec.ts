/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuruUiService } from './guru-ui.service';

describe('Service: GuruUi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuruUiService]
    });
  });

  it('should ...', inject([GuruUiService], (service: GuruUiService) => {
    expect(service).toBeTruthy();
  }));
});
