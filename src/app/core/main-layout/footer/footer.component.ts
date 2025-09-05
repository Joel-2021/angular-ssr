import { AppRoutes } from '../../../models/core/app-routes.enum';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  protected readonly AppRoutes = AppRoutes;

  version: string = environment.version;
  year: number = new Date().getFullYear();

  constructor() {
  }

}
