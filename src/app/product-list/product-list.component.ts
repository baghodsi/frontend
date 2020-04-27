import { Component, OnInit, OnChanges, EventEmitter, Input, Inject, Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs';

// export interface DialogData {
//   animal: string;
//   name: string;
// }
// @Injectable()
// export class ConfirmState {
//   heroService: HeroService;
// }
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  inputs: ['nRecTitleId', 'sSrchTitleText'],
  outputs: ['nRecId']
})
export class ProductListComponent implements OnInit, OnChanges {
  heroes: Object;
  hero: Hero;
  bRefresh: boolean = true;
  //products = products;
  nRecTitleId = "10001";
  nRecId = new EventEmitter <string>();
  // @Input() parentSubject:Subject<any>;
  animal: string;
  name: string;

  constructor(private heroService: HeroService){//, private modalService: NgbModal) {
    //alert("recttt" + this.nRecTitleId);
  }

  ngOnChanges(): void{
    alert("ngOnChanges  recttt  " + this.bRefresh);
    if(this.bRefresh)
      this.heroService.getHeroes().subscribe(data => this.heroes = data);
    
  }

  ngOnInit() {
    // this.parentSubject.subscribe(event => {alert("ngOnInit parentSubject " + event);
    // });
    this.heroService.getHeroes().subscribe( data => this.heroes = data );
    //alert("recttt" + this.nRecTitleId);
  }

  getHeroes(TitleId: string): void {
     //this.heroService.getHeroes();
    // .subscribe(heroes => this.heroes = heroes);
  }

  setRecId (myId: string){
    
    this.nRecId.emit(myId);
  }

  add(name: string): void {
    //this.heroService.updateHero(this.hero);
    this.open();
  }

  delete(hero: Hero): void {
    //alert("id   " + hero.id);
    this.heroService.deleteHero(hero).subscribe(data => this.ngOnChanges());
    //document.getElementById("myNav").style.width = "25%";
  }  

  open(): void {
    //document.getElementById("myNav").style.width = "25%";
  }  

  share() {
    window.alert('The product has been shared!');
  }
  // refresh(){
  //   this.ngOnInit();
  // }
  // openDialog(): void {
  //   alert("id   111");
  //   // const modalRef = this.modalService.open(DialogOverviewExampleDialog);

  //   // modalRef.componentInstance.name = 'World';
  //   // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //   //   width: '250px',
  //   //   data: {name: this.name, animal: this.animal}
  //   // });
  //   // alert("id   222");

  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   console.log('The dialog was closed');
  //   //   this.animal = result;
  //   // });
  // }
}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/