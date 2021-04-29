import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() displayLabel='label';
  @Input() disabled=false;
  @Input() options  : Array<string> =[]
  @Output() selectionChange = new EventEmitter<string>();
  constructor() { 

  }

  ngOnInit(): void {
  }
  SelectItem(filterVal: any)
  {
    this.selectionChange.emit(filterVal.value)
   // console.log(filterVal.value)
     // var id=filterVal;
      //code
  }

}
