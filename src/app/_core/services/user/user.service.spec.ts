import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { OAuthService } from 'angular-oauth2-oidc';

describe('UserService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: OAuthService,
          useValue: {}
        }
      ]
    })
  );

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
