import {  Component, Input, OnInit } from '@angular/core';
import { IcountryList } from '../../model/country';

@Component({
  selector: 'app-selectedcountrydetail',
  templateUrl: './selectedcountrydetail.component.html',
  styleUrls: ['./selectedcountrydetail.component.scss']
})
export class SelectedcountrydetailComponent implements OnInit {

  @Input() country :IcountryList[] = [];
  constructor() { 
  }

  ngOnInit(): void {
  }


}
