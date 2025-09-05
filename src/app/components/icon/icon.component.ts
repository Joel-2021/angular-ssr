import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {finalize} from 'rxjs';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  standalone: true,
  styleUrl: './icon.component.scss'
})
export class IconComponent implements OnInit {

  @Input() src: string | null = null;
  @Input() size: number | string = '24';
  svgTemplate: SafeHtml | null = null;
  spinner: boolean = false;

  constructor( private httpClient: HttpClient,
               private sanitizer: DomSanitizer ) {
  }

  ngOnInit(): void {

    if ( this.src !== null ) {
      this.fetchForSVGResource(this.src);
    }
  }

  /**
   * Fetch for SVG Content from url and inject in dom
   * ------------------------------------------------------------------
   * */
  fetchForSVGResource(url: string): void {

    this.spinner = true;

    if ( typeof this.size === 'string' ) {

      this.size = !isNaN(Number(this.size)) ? Number(this.size) : 24;
    }

    this.httpClient.get(url, { responseType: 'text' })
      .pipe(finalize(() => this.spinner = false))
      .subscribe((response: string) => {
        response = response.replace('<svg', `<svg width="${ this.size }" height="${ this.size }" `);
        this.svgTemplate = this.sanitizer.bypassSecurityTrustHtml(response);
      });
  }
}
