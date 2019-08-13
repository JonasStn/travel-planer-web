import { Injectable } from '@angular/core';
import { OAuthService, UserInfo } from 'angular-oauth2-oidc';
import { from } from 'rxjs';

export interface User extends UserInfo {
  email: string;
  email_verified: string;
  family_name: string;
  given_name: string;
  name: string;
  preferred_username: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private oAuthService: OAuthService) {}

  get currentUser(): User {
    const claims = this.oAuthService.getIdentityClaims() as User;
    return claims;
  }

  get token() {
    return this.oAuthService.getAccessToken();
  }

  login(username: string, password: string) {
    const obs = from(
      this.oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(username, password)
    );
    return obs;
  }

  logout() {
    this.oAuthService.logOut();
  }

  hasValidToken() {
    return this.oAuthService.hasValidAccessToken();
  }
}
