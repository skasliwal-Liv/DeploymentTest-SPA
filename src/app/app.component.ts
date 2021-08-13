import { Component } from '@angular/core';
import Config from "../assets/config.json";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  environment = Config.ENV;
  baseUrl = Config.BASE_URL;
}
