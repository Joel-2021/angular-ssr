import { environment } from "../../environments/environment";

export class Urls {

  static hardcodedServerURL = `https://api2.chottu.link`;

  static serverURL = (environment.serverUrl === null ? this.hardcodedServerURL : environment.serverUrl);

  static hardcodedServerAPI = '/chotuCore/';

  static serverAPI = (environment.serverAPI === null ? this.hardcodedServerAPI : environment.serverAPI);

  static apiVersion = 'api/v1/';

  static baseURL = `${ Urls.serverURL }${ Urls.serverAPI }`;
  static baseWithApiVersionURL = `${ Urls.baseURL }${ Urls.apiVersion }`;

  // Client Content Service URLs
  // ----------------------------------------------------------------
  static fetchForClientContentURL = `${ Urls.baseWithApiVersionURL }clientcontent/enum/cdiOpn`;

  static getAllSubscriptionURL = `${ this.baseWithApiVersionURL }subscription/subscription/packages/all/cdiOpn`;

}
