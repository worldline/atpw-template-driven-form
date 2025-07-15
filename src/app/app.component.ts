import { Component, model, VERSION } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  versionName = model(`Angular ${VERSION.major}`)
  readonly types = ['major', 'minor', 'patch']
  selectedType = model('')
}
