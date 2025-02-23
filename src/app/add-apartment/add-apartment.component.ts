import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Apartment {
  appartnumber: string;
  floornumber: string;
  surfacenumber: string;
  terrace: string;
  surfaceterrace?: string;
  category: string;
  residence: string;
}

@Component({
  selector: 'add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  apartForm!: FormGroup;
  newApart!: Apartment;

  ngOnInit() {
    this.apartForm = new FormGroup({
      appartnumber: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      floornumber: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      surfacenumber: new FormControl('', [Validators.required]),
      terrace: new FormControl('', [Validators.required]),
      surfaceterrace: new FormControl({ value: '', disabled: true }, [Validators.required]),
      category: new FormControl('', [Validators.required]),
      residence: new FormControl('', [Validators.required])
    });
  }

  onTerraceChange(value: string) {
    if (value === 'yes') {
      this.apartForm.get('surfaceterrace')?.enable();
    } else {
      this.apartForm.get('surfaceterrace')?.disable();
      this.apartForm.get('surfaceterrace')?.setValue('');
    }
  }

  onSubmit() {
    if (this.apartForm.valid) {
      this.newApart = this.apartForm.value;
      console.log('New Apartment:', this.newApart);
    }
  }
}
