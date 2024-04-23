import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner/banner.component";
import { BoostComponent } from "./boost/boost.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { ActionComponent } from "./action/action.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [BannerComponent, BoostComponent, StatisticsComponent, ActionComponent]
})
export class HomeComponent {

}
