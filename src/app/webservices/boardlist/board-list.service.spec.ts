import { TestBed, inject } from '@angular/core/testing';

import { BoardListService } from './board-list.service';

describe('BoardListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardListService]
    });
  });

  it('should be created', inject([BoardListService], (service: BoardListService) => {
    expect(service).toBeTruthy();
  }));
});
