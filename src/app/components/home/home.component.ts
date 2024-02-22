import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], // Use styleUrls instead of styleUrl
})
export class HomeComponent {
  featuredHotels: any[] = [
    {
      name: 'Hotel A',
      location: 'City A',
      price: '$100',
      imageUrl: '',
    },
    {
      name: 'Hotel B',
      location: 'City B',
      price: '$150',
      imageUrl: '',
    },
    // Add more featured hotels as needed
  ];

  constructor() {}

  searchHotels() {
    // Implement search logic based on user input
  }
}
