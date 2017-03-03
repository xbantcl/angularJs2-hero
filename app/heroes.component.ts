import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from "./hero.service";
import { Router} from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService, private router: Router) {}
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => {this.heroes = heroes; this.selectedHero = heroes[3]});
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}