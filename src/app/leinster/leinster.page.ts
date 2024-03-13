import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LeinsterCountiesPage } from '../leinster-counties/leinster-counties.page';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LeinsterCountiesPage]
})
export class LeinsterPage implements OnInit {

  constructor(private router:Router) { }

  onButtonClick(){
    this.router.navigate(['/leinster-counties'])
  }

  ngOnInit() {
  }

}