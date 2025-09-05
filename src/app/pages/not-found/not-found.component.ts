import { AppRoutes } from '../../models/core/app-routes.enum';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [ SharedModule, RouterModule, NgOptimizedImage ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  protected readonly AppRoutes = AppRoutes;

}
