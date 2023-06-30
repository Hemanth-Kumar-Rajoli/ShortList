import { Component, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent {
    @Input() selected! : String;
    @Output() modifiedPannel = new EventEmitter<String>();

    onselect(pannel:String){
      this.modifiedPannel.emit(pannel);
    } 
}
