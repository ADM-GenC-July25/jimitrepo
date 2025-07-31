import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Developer } from '../developer';
import { DeveloperService } from '../developer-service';

@Component({
  selector: 'app-bio-create',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './bio-create.html',
  styleUrl: './bio-create.css',
  providers: [DeveloperService]
})

export class BioCreate {
  devForm: FormGroup;

  constructor(
    private developerService: DeveloperService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
      this.devForm = this.formBuilder.group({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        favoriteLanguage: new FormControl(''),
        yearStarted: new FormControl('')
      });
  }

  // Getters for form controls
  get firstName() { return this.devForm.get('firstName'); }
  get lastName() { return this.devForm.get('lastName'); }
  get favoriteLanguage() { return this.devForm.get('favoriteLanguage'); }
  get yearStarted() { return this.devForm.get('yearStarted'); }

  // Handle form submission
  presave() {
    const dev = new Developer(
      '',
      this.firstName?.value,
      this.lastName?.value,
      this.favoriteLanguage?.value,
      Number(this.yearStarted?.value)
    );
    this.developerService.addDeveloper(dev);
  }

  // Save developer and navigate
  saveDeveloper() {
    if (this.devForm.valid) {
      this.presave();
      this.router.navigate(['/bio']);
    }
  }
}

