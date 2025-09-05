import { Component } from '@angular/core';
import { NoContentComponent } from '../../components/no-content/no-content.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  imports: [
    NoContentComponent
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  constructor(private titleService: Title) {
    titleService.setTitle('ChottuLink - Blogs');
  }

}
