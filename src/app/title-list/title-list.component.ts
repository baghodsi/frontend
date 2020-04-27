import { Component, OnInit, EventEmitter } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css'],
  inputs: ['bTitleOpenMenu'],
  outputs: ['nTTitleID', 'sTitleText']
})
export class TitleListComponent implements OnInit {
  //@Input() product: products;
  //products = products;
  bTitleOpenMenu = "0";
  nTTitleID = new EventEmitter <string>();
  sTitleText = new EventEmitter <string>();

  ngOnInit() {
  }

  setTitleList (titleId: string, titleText){
    this.nTTitleID.emit(titleId);
    this.sTitleText.emit(titleText);
    //document.getElementById("myNav").style.width = "0%";
    // alert("Tittttt" + this.sTitleText);
  }

  getTitleId(){
    const sResult = "ttt";
    // this.nTTitleID.subscribe(data => sResult = data);
    return sResult;
  }
  
  share() {
    window.alert('The title has been shared!');
  }
}
