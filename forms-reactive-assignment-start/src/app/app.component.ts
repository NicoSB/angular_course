import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses: ['stable', 'critical', 'finished'];
  projectForm: FormGroup;
  defaultStatus = 'stable';

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required], this.asnycValidator.bind(this)),
      // 'name': new FormControl(null, [Validators.required, this.invalidName]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable', [Validators.required])
    });
  }

  invalidName(control: FormControl) : {[s: string]: boolean} {
    console.log("cons: " + control.value);
    if (control.value === 'test') {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  asnycValidator (control: FormControl): Promise<any> | Observable<any> {
    console.log(this.projectForm);
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.invalidName(control));
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
