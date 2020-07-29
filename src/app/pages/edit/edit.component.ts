import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from '../../models/appState.interface';
import { Observable } from 'rxjs';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormGroupDirective,
} from '@angular/forms';
import * as Actions from './../../actions/app.actions';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  data: Observable<any>;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.createForm();
  }
  myForm: FormGroup;

  ngOnInit(): void {}

  createForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      url: ['', [Validators.required, Validators.minLength(5)]],
      group: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  saveBookmark(formData: any, formDirective: FormGroupDirective) {
    const id = new Date().getTime();
    const { name, url, group } = formData.value;
    if (this.myForm.invalid) {
      return;
    } else {
      this.store.dispatch(new Actions.AddBookmark({ id, name, url, group }));
      formDirective.resetForm();
      this.myForm.reset();
    }
  }

  resetForm(formDirective: FormGroupDirective, event) {
    event.preventDefault();
    formDirective.resetForm();
    this.myForm.reset();
  }
}
