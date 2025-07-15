import { Component, model, VERSION } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'

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

  submitForm(form: NgForm) {
    console.log('versionName:', this.versionName)
    console.log('value of versionName field:', form.controls['versionName'].value)
    console.log('selectedType:', this.selectedType)
    console.log('form valid ?', form.valid)
  }
}
