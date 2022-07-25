import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable, Observer } from 'rxjs';
import { Client } from 'src/app/model/client';
import { User } from 'src/app/model/user';
import { ClientService } from 'src/app/service/client.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  validateForm: FormGroup;
  userform:User={
    clientID:{
      id: '',
    }
   
  };
  clienform:Client={
    id: '',
  };
 
  clientList: Client[] = [];
  switchValue = false;


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.getchoises();

    console.log('clientList', this.clientList);

  }

  getchoises() {
    this.clientService.findall().subscribe((client) => {
      this.clientList = client;
    });
   
  }



  submitForm(): void {
     this.userform=this.validateForm.value;
    // this.userform.nom=this.validateForm.value.nom;
    // this.userform.prenom=this.validateForm.value.prenom;
    // this.userform.email=this.validateForm.value.email;
    // this.userform.password=this.validateForm.value.password;
     this.userform.isactive=true
    // this.userform.isadmin=this.validateForm.value.isadmin;

    this.clienform.id=this.validateForm.value.clientID
    console.log('clienform', this.clienform);


    this.userform.clientID=this.clienform ;


    // this.userform=this.validateForm.value;
    // this.clienform.id=this.validateForm.value.clientID
   // console.log('clientID', this.validateForm.value.clientID);
    // console.log('nom', this.validateForm.value.nom);
    // this.userform.nom=this.validateForm.value.clientID;
    // console.log('nomafter', this.validateForm.value.nom);


    // this.clienform.id=this.validateForm.value.clientID;
    // console.log('clienform', this.clienform);


    // this.userform.nom=this.validateForm.value.clientID;
    // this.userform.prenom=this.validateForm.value.clientID;

    console.log('submit', this.validateForm.value);
    console.log('userform', this.userform);

    this.userService.adduser(this.userform).subscribe(
      (res) => {
       
      },
      (error: Response) => {
        console.log(error);
       
      }
    );


  }

 

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(private fb: FormBuilder,private userService:UserService,private clientService:ClientService) {
    this.validateForm = this.fb.group({
      nom: ['', [Validators.required], [this.userNameAsyncValidator]],
      prenom: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      clientID: ['', [Validators.required]],
      isadmin: ['', [Validators.required]],
    //  isactive: ['', [Validators.required]],
    });
  }



  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

}
