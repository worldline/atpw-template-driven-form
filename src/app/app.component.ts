import { Component, VERSION } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  versionName = `Angular ${VERSION.major}`
  types = ['major', 'minor', 'patch']
  selectedType = ''
}
