import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'; 
  

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }


  getHeroes(): Observable<Hero[]> {
    this.log('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
