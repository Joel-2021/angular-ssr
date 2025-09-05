import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from '../../models/core/app-routes.enum';
import { ClientContent } from '../../models/client-content/client-content';
import { ClientContentService } from '../../services/client-content.service';
import { ClientContentType } from '../../models/client-content/enums/client-content-type.enum';
import { SharedModule } from '../../shared/shared.module';
import { UtilityService } from '../../shared/utility.service';
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-legal',
  imports: [ SharedModule ],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss',
  standalone: true
})
export class LegalComponent implements OnInit, OnDestroy {

  contentType: ClientContentType | null = null;
  clientContent: ClientContent | null = null;
  spinner: boolean = false;
  subscriptionList: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private clientContentService: ClientContentService,
              private router: Router) {

    this.subscriptionList.push(
      this.activatedRoute.params
        .subscribe(params => {

          switch (params[ 'id' ]) {

            case AppRoutes.PRIVACY_POLICY.replace('/legal/', ''):
              this.contentType = ClientContentType.PRIVACY_POLICY;
              break;

            // case AppRoutes.REFUND_POLICY.replace('/legal/', ''):
            //   this.contentType = ClientContentType.REFUND_POLICY;
            //   break;

            case AppRoutes.TERMS_OF_USE.replace('/legal/', ''):
              this.contentType = ClientContentType.TERMS_OF_USE;
              break;

            default:
              this.router.navigate([ AppRoutes.HOME ]).then();
              break;
          }

          if (this.contentType !== null) {

            this.fetchClientContent(this.contentType);
          }
        })
    );
  }

  ngOnInit(): void {
  }

  /**
   * Fetches the client content as per the content type
   * @param { ClientContentType } type
   * @returns {void}
   * ------------------------------------------------------------------------
   */
  fetchClientContent(type: ClientContentType): void {

    this.spinner = true;

    this.clientContent = null;

    this.subscriptionList.push(
      this.clientContentService.fetchClientContent(type)
        .pipe(finalize(() => this.spinner = false))
        .subscribe(response => {

          this.clientContent = response;
        })
    );
  }

  ngOnDestroy(): void {

    UtilityService.unsubscribe(this.subscriptionList);
  }
}
