import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  outputs: ['sInTitleList']
})
export class TopBarComponent implements OnInit {

  sInTitleList = new EventEmitter <boolean>();
  bInTitleList = true;
  constructor() {
  }

  ngOnInit() {
  }

  setTitleList (){
    this.sInTitleList.emit(this.bInTitleList);
    this.bInTitleList = !this.bInTitleList;
    //alert(this.sInTitleList + "  ttttt  " + this.bInTitleList);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/