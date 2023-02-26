import { Component, VERSION } from '@angular/core'
import { FormControl, NgForm, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  types = ['major', 'minor', 'patch']
  versionNameControl = new FormControl(`Angular ${VERSION.major}`, Validators.required)
  typeControl = new FormControl('')

  submitForm(form: NgForm) {
    console.log('value of versionName control:', this.versionNameControl.value)
    console.log('value of type control:', this.typeControl.value)
    console.log('is form valid ?', form.valid)
  }
}
