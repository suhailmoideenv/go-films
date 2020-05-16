import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilmsPageComponent implements OnInit {

  filmsList;
  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getAllFilmsList();
  }


  getAllFilmsList() {
    this.apiService.getFilmsList().subscribe(res => {
      const response: any = res;
      this.filmsList = response;
      console.log(this.filmsList);
    })
  }

  getFilmDetails(filmDetails) {
    this.router.navigate(['/films',filmDetails.name])
  }

  createFilms(){
    this.router.navigate(['/films/create'])
  }

}
