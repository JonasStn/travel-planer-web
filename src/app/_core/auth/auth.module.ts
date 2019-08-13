import { NgModule } from '@angular/core';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [OAuthModule.forRoot()]
})
export class AuthModule {
  constructor(private oauthService: OAuthService) {
    const {
      keycloakConfig: { clientId, scope, url }
    } = environment;
    this.oauthService.clientId = clientId;
    this.oauthService.scope = scope;
    this.oauthService.issuer = url;
    this.oauthService.oidc = false;
    this.oauthService.requireHttps = false;
    this.oauthService.loadDiscoveryDocument(`${url}/.well-known/openid-configuration`).then(() => {
      console.log('AUTH: discovery document loaded');
    });
  }
}
