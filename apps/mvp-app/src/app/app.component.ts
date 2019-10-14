import { Component } from '@angular/core';
@Component({
  selector: 'nx-test-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  package = require('../../package.json')
  title = `mvp-app version no: ${this.package.version}`;
}
