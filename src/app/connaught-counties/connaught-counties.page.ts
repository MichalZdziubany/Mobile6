import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-connaught-counties',
  templateUrl: './connaught-counties.page.html',
  styleUrls: ['./connaught-counties.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConnaughtCountiesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
