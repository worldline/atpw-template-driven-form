import { Component, VERSION } from '@angular/core'
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly types = ['major', 'minor', 'patch']
  versionNameControl = new FormControl(`Angular ${VERSION.major}`, Validators.required)
  typeControl = new FormControl('')

  submitForm() {
    console.log('value of versionName control:', this.versionNameControl.value)
    console.log('value of type control:', this.typeControl.value)
    console.log('is form valid ?', this.versionNameControl.valid && this.typeControl.valid)
  }
}
