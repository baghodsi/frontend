import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  baseUrl = 'http://localhost:8080/heroes';    
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get(this.baseUrl);
  }

  addHero1 (hero: Hero){
    const url = 'http://localhost:8080/instructors/in28minutes/courses';
    console.log(hero);
    return this.http.post(url, hero);
  }

  addHero (hero: Hero){
    const url = this.baseUrl + "/save-hero";
    console.log(hero);
    return this.http.post(this.baseUrl, hero);
  }

  updateHero (hero: Hero) {
    const url = this.baseUrl + "/save-hero";
    //alert("hero.name : " + hero.name);
    return this.http.put(this.baseUrl, hero);
  }
  
  getHero(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  deleteHero (hero: Hero){
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}