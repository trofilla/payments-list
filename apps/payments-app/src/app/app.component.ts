import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'vn-app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  constructor(private readonly renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (environment.direction) {
      this.renderer.setAttribute(document.documentElement, 'dir', environment.direction);
    }
  }
}
