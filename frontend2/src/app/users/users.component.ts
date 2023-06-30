import { Component,OnInit ,Input,Output,EventEmitter,OnChanges, SimpleChanges} from '@angular/core';
import { user } from './user';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnChanges{
    @Input() users : user[] = []
    @Input() selectedPannel! : String;

    @Output() promoteUser = new EventEmitter<user>();
    displayedColumns: string[] = ['name', 'age', 'score'];

    constructor(){}
    // dataSource = this.users;
    ngOnInit(): void {

    }
    ngOnChanges(changes: SimpleChanges): void {
      // if(changes.)
      if(changes['selectedPannel'].currentValue=="users"){
        this.displayedColumns = ['name', 'age', 'score',"action"];
      }else{
        this.displayedColumns=['name', 'age', 'score']
      }
    }
    onUserSelect(user : user){
      if(confirm(`do you want to add user ${user.name} to winners`)){
        this.promoteUser.emit(user);
      }
    }
}
