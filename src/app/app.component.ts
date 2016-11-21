import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';

  color: string;
  font: number;
  isBordered: boolean;
  cities: string[];

  constructor(){
    this.isBordered = true;
    this.cities = ['Karachi', 'Lahore', 'Multan', 'Peshawar', 'Quetta'];
  }

  apply(color: string, font: number){

    console.log('font ', font);
    console.log('type of font ', typeof font);

    this.color = color;
    this.font = font;

  }
  
  selectCity(i: number): void{
    
    console.log('index ', i);
    
  }



}
