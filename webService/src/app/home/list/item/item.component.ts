import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Home } from '../../home.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

@Input() recipe:Home;

@Input() index :number;

  constructor() { }

  ngOnInit() {
  }

 
}
