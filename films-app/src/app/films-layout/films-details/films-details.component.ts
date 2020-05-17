import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {


  filmDetails;
  filmName;

  filmComment;

  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('this.filmName');
    this.filmName = this.route.snapshot.paramMap.get('id');
    this.getFilmDetails(this.filmName);
  }

  getFilmDetails(name) {
    var filmObj = { 'name': name };
    this.apiService.getFilmDetails(filmObj).subscribe(res => {
      const response: any = res;
      this.filmDetails = response;
      console.log(this.filmDetails);
    })
  }

  postFilmComments() {
    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/films/login']);
    }
    var filmsObj = { 'id': this.filmDetails._id, 'comments': { 'userId': 'suhailvm@gmail.com', 'comment': this.filmComment } }
    this.apiService.updateFilmComments(filmsObj).subscribe(res => {
      const response: any = res;
      if (response._id) {
        console.log('comments added');
        this.getFilmDetails(this.filmName);
      }
    })
  }

}
