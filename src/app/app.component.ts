import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductListComponent } from './product-list/product-list.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  //heroId = 1;
  //sHeroId = 0;
  sAppTitleList = "1";
  nAppRecId = 0;
  nAppTitleId = "10001";
  nAppTitleText = "Inbox";
  @ViewChild('child', null) private child: ProductListComponent;
  
  constructor(public dialog: MatDialog) { }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250';
    dialogConfig.height = '350';
    dialogConfig.data = { id: 0, title: 'Angular For Beginners' };
    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
    // const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(" Dialog was closed" )
      console.log(result)
    });
  }

  onChanged(sr: string) {
    // if(sr == "true"){
      alert("AppComponent onChanged  " + sr);
      this.nAppRecId = 0; 
      // this.nAppTitleId = "10001";
      this.child.ngOnChanges();
    // }
  }

  // notifyChildren() {
  //   this.parentSubject.next('some value');
  // }

  open(): void {
    //alert("apptttt" + this.nAppTitleText);
  }  
  closeNav(): void {
    this.nAppRecId = 0; 
   //document.getElementById("myNav").style.width = "0%";
  }  
}