import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  faStar = faStar;
  faStarHalf =faStarHalf;

  constructor() { }

  ngOnInit(): void {
  }

}
