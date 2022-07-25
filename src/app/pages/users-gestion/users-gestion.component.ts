import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users-gestion',
  templateUrl: './users-gestion.component.html',
  styleUrls: ['./users-gestion.component.scss']
})
export class UsersGestionComponent implements OnInit {

  total:number;
  page: number = 1;
  limit: number = 5;
  listuser: User[] = [];

  constructor(private userService:UserService) {}



  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.userService.getall(this.page, this.limit).subscribe(
       data => {
           this.listuser = data.list;
           this.total=data.size
             
      }
    );
  }
  nextPage($event: any) {
    this.getHistory();
  }
  deleteuser(id:any){
    this.userService.delete(id).subscribe(() => {
      this.listuser = this.listuser.filter((user) => user.id != id);
    });
  }


}
