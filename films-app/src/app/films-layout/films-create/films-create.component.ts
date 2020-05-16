import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-films-create',
  templateUrl: './films-create.component.html',
  styleUrls: ['./films-create.component.css']
})
export class FilmsCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService) { this.createFormMethod(); }

  public createForm: FormGroup;

  createFormMethod() {
    this.createForm = this.fb.group({
      name: [''],
      description: [''],
      release_date: [''],
      rating: [''],
      ticket_price: [''],
      country: [''],
      Genre: [''],
      photo: ['']
    })
  }

  ngOnInit(): void {
    console.log('create page');
  }

  createFilmApi() {
    var filmsObj = {
      'name': this.createForm.value.name, 'description': this.createForm.value.description, 'release_date': this.createForm.value.release_date,
      'rating': this.createForm.value.rating, 'ticket_price': this.createForm.value.ticket_price, 'country': this.createForm.value.country, 
      'Genre': this.createForm.value.Genre,'photo':this.createForm.value.photo
    }
    this.apiService.saveFilmDetails(filmsObj).subscribe(res => {
      const response:any = res;
      console.log(response);
    })
  }

}
