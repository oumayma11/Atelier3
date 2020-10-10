import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css']
})
export class ToEuroConvertComponent implements OnInit {
  @Input() filsproperty;
  @Output() conversion = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.filsproperty)
    
  }
  convert() {
    this.filsproperty = this.filsproperty * 3 + "euros"
    console.log(this.filsproperty)
    this.conversion.emit("the conversion:" + this.filsproperty);

  }

}
