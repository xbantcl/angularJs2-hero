import { Component } from '@angular/core';

@Component({
    selector: 'root-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
    topHeroes = [
        {id: 1, name: 'test1'},
        {id:2, name: 'test2'}
    ];
    selectedHero = {id: 1, name: 'jack'};
}