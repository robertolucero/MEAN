import { Component } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISG Solutions';
  bearerToken: string;
  constructor(private apiService: ApiService) {}

  getBearerToken() {
    this.apiService.getBearerToken('dummyRefresh-Token')
                .subscribe(
                  token => { this.bearerToken = token.Bearer; },
                  error => { console.log(error); }
                );

  }

}
