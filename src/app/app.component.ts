import { Component, VERSION } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  versionName = `Angular ${VERSION.major}`
  types = ['major', 'minor', 'patch']
  selectedType = ''
}
