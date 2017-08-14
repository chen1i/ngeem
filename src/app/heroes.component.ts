import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
})


export class HeroesComponent implements OnInit{
  title = 'Tour of Hero';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(hh => this.heroes = hh);
  }
}
