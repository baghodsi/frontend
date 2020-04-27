import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HeroService }  from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-product-dtl',
  templateUrl: './product-dtl.component.html',
  styleUrls: ['./product-dtl.component.css'],
  inputs: ['nDtlRecId', 'nDtlTitleId'],
  outputs: ['nDtlRecOutId']
})
export class ProductDtlComponent implements OnInit {
  @Input() hero: Hero;
  @Output() onChanged = new EventEmitter<string>();
    //@Input() tHero: Hero;
  heroName = "temp";
  nDtlRecId = 0;
  nDtlTitleId = '10001';
  nDtlRecOutId = new EventEmitter <string>();
  constructor(private heroService: HeroService) {
  }

  ngOnChanges(): void{
    //alert("ngOnChanges");
    if(this.getHeroByID() != null)
      alert("this.hero " + this.hero.name + " age " + this.hero.age + " Id " + this.hero.id + " titleId " + this.hero.titleId);
  }
  
  ngOnInit(){
    //alert("this.hero " + this.hero.name + " age " + this.hero.age + " Id " + this.hero.id + " titleId " + this.hero.titleId);
      this.getHeroByID();
    //alert("hero.name "+ this.hero.name)
  }
  
  share() {
    window.alert('The product dtl has been shared!');
  }

  goBack(): void {
    //document.getElementById("myNav").style.display = "none";
    //this.location.back();
    this.nDtlRecId = 0;
    // this.nDtlRecOutId.emit(this.nDtlRecId.toString());
  }

  save(): void {
    //alert("hero.name null  "+ this.nDtlRecId);
    // if(this.nDtlRecId == -1){
    //   this.tHero = new Hero();
    //   this.tHero.id = this.nDtlRecId;
    //   this.tHero.name = this.heroName;
    //   this.tHero.titleId = this.nDtlTitleId;
    //   this.tHero.cardId = "21235";
    //   //this.hero = this.tHero;
    //   alert("hero.name is   "+ this.hero.name);
    // }
    // else
    //   alert("hero.name "+ this.hero.name);
    // const msg = (this.nDtlRecId == -1) ? "created" : "edited";
    this.heroService.addHero(this.hero).subscribe((data) => 
      {alert("hero " + ((this.hero.id == 0) ? "created" : "edited") + " successfully.");console.log(data);}, error => console.log(error));
      // this.hero = new Hero();
      this.nDtlRecOutId.emit("0");
      this.onChanged.emit("true");
    }

  getHeroByID(): void {
    if(this.nDtlRecId < 0){
      this.hero = new Hero();
      this.hero.id = 0;
      this.hero.name = "";
      this.hero.age = "";
      this.hero.cardId = "";
      this.hero.description = "";
      this.hero.titleId = this.nDtlTitleId;
      return null;
    }
    //alert("this.getHeroByID 111 ");
    if(this.nDtlRecId > 0)
      this.heroService.getHero(this.nDtlRecId)
        .subscribe(hero => {this.hero = hero; return hero;});
    //this.heroName = this.hero.name;
    // if(this.nDtlRecId != -1)
      // alert("this.getHeroByID 222 ");
    //alert("hero.name "+ this.hero.name)
    return null;
  }
}