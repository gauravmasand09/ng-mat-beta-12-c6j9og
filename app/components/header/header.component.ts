import { Component, Input } from '@angular/core';
import { SharedDataService } from './../../services/shared-data.service';

@Component({
  selector: 'solution-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  // -----------------------------------------------------------------------//
  private title = 'Angular 4';
  @Input() angularVersion: string = '';
  @Input() materialVersion: string = '';
  private websiteUrl: string = 'https://iamfaisal.live/';  
  // -----------------------------------------------------------------------//
  constructor(private readonly _sharedDataService: SharedDataService) { }

  onThemeChange(event){
    this._sharedDataService.OnThemeSwitch.next(event.checked);
  }
}
