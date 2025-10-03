import { Component, signal, VERSION } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly versionName = signal(`Angular ${VERSION.major}`)
  protected readonly types = ['major', 'minor', 'patch']
  protected readonly selectedType = signal('')
}
