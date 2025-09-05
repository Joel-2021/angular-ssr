import { Injectable } from '@angular/core';
import { ClientContentType } from '../models/client-content/enums/client-content-type.enum';
import { ClientContent } from '../models/client-content/client-content';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Urls } from '../shared/Urls';

@Injectable({
  providedIn: 'root'
})
export class ClientContentService {

  constructor(private http: HttpClient) {}

   /**
   * Fetches the client content as per the content type
   * @param { ClientContentType } type
   * @returns {Observable<ClientContent>} An observable containing the Client Content
   * --------------------------------------------------------------------------------
   */
   fetchClientContent(type: ClientContentType): Observable<ClientContent> {

    const params = new HttpParams()
    .set('clientContentEnum', type);

    return this.http
      .get<ClientContent>(Urls.fetchForClientContentURL, { params });
  }
}
