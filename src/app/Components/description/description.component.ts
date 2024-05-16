import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrls:[ './description.component.css']
})
export class DescriptionComponent{
@Input()  description:any;
@Input() coll_name:any;

}
