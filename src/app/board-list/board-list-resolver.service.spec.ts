import { TestBed, inject } from '@angular/core/testing';

import { BoardListResolverService } from './board-list-resolver.service';

describe('BoardListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardListResolverService]
    });
  });

  it('should be created', inject([BoardListResolverService], (service: BoardListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
