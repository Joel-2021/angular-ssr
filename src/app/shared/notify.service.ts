import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Notyf } from 'notyf';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private static notify : Notyf;
  private static template: string = `
    <h5 class="notyf__title"> $messageTitle </h5>
    <p class="notyf__description"> $messageDescription </p>`;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

    if (isPlatformBrowser(this.platformId)) {

      NotifyService.notify = new Notyf({
        duration: 4500,
        dismissible: true,
        position: {
          x: 'right',
          y: 'top',
        },
        types: [
          {
            type: 'success',
            className: 'notyf-success',
            icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="32" height="32" x="0" y="0" viewBox="0 0 408.576 408.576" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
            <g xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M204.288,0C91.648,0,0,91.648,0,204.288s91.648,204.288,204.288,204.288s204.288-91.648,204.288-204.288    S316.928,0,204.288,0z M318.464,150.528l-130.56,129.536c-7.68,7.68-19.968,8.192-28.16,0.512L90.624,217.6    c-8.192-7.68-8.704-20.48-1.536-28.672c7.68-8.192,20.48-8.704,28.672-1.024l54.784,50.176L289.28,121.344    c8.192-8.192,20.992-8.192,29.184,0C326.656,129.536,326.656,142.336,318.464,150.528z" fill="#ffffff" data-original="#000000" class=""/>
                </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"</g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
        </g>
      </svg>`
          },
          {
            type: 'info',
            className: 'notyf-info',
            icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="32" height="32" x="0" y="0" viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
          <g>
            <g xmlns="http://www.w3.org/2000/svg">
                <path d="m213.333 0c-117.74.194-213.139 95.593-213.333 213.333v149.333c.103 35.303 28.697 63.897 64 64h149.333c117.821 0 213.333-95.513 213.333-213.333s-95.512-213.333-213.333-213.333zm21.334 320c0 11.782-9.551 21.333-21.333 21.333-11.783 0-21.334-9.551-21.334-21.333v-106.667h-21.333c-11.782 0-21.333-9.551-21.333-21.333s9.551-21.333 21.333-21.333h21.333c23.554.024 42.643 19.112 42.667 42.667zm0-192c0 11.782-9.551 21.333-21.333 21.333-11.783 0-21.334-9.551-21.334-21.333v-21.333c0-11.782 9.551-21.333 21.333-21.333s21.333 9.551 21.333 21.333v21.333z" fill="#ffffff" data-original="#000000" class=""/>
            </g>
          </g>
        </svg>`
          },
          {
            type: 'warning',
            className: 'notyf-warning',
            icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="32" height="32" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
          <g>
              <path xmlns="http://www.w3.org/2000/svg" d="m14.876 2.672a3.309 3.309 0 0 0 -5.752 0l-8.71 15.518a3.178 3.178 0 0 0 .029 3.189 3.264 3.264 0 0 0 2.847 1.621h17.42a3.264 3.264 0 0 0 2.847-1.621 3.178 3.178 0 0 0 .029-3.189zm-2.876 16.328a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm1-5a1 1 0 0 1 -2 0v-6a1 1 0 0 1 2 0z" fill="#ffffff" data-original="#000000"/>
          </g>
        </svg>`
          },
          {
            type: 'error',
            className: 'notyf-danger',
            icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="32" height="32" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
          <g>
            <g xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2">
                <path d="m12 1a11 11 0 1 0 11 11 11.013 11.013 0 0 0 -11-11zm4.242 13.829a1 1 0 1 1 -1.414 1.414l-2.828-2.829-2.828 2.829a1 1 0 0 1 -1.414-1.414l2.828-2.829-2.828-2.829a1 1 0 1 1 1.414-1.414l2.828 2.829 2.828-2.829a1 1 0 1 1 1.414 1.414l-2.828 2.829z" fill="#ffffff" data-original="#000000" class=""/>
            </g>
          </g>
        </svg>`
          }
        ]
      });
    }
  }

  static info(message: string): void {

    this.notify.open({
      type: 'info',
      message: this.template
        .replace('$messageTitle', 'Info')
        .replace('$messageDescription', message)
    });
  }

  static warning(message: string): void {

    this.notify.open({
      type: 'warning',
      message: this.template
        .replace('$messageTitle', 'Warning')
        .replace('$messageDescription', message)
    });
  }

  static success(message: string): void {

    const template = this.template
      .replace('$messageTitle', 'Success')
      .replace('$messageDescription', message);

    this.notify.success(template);
  }

  static error(message: string): void {

    const template = this.template
      .replace('$messageTitle', 'Error')
      .replace('$messageDescription', message);

    this.notify.error(template);
  }

  static dismissAll(): void {

    this.notify.dismissAll();
  }
}
