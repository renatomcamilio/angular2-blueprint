import {Component, View, NgFor} from 'angular2/angular2'
import {Router, Location, ROUTER_DIRECTIVES, Instruction} from 'angular2/router'
import {TabBarItem} from './tab-bar-item'

@Component({
  selector: 'tab-bar'
})

@View({
  directives: [ROUTER_DIRECTIVES, NgFor, TabBarItem],
  styles: [`
    tab-bar-item {
      width: 20%;
      height: 100%;
      display: inline-block;
    }
  `],
  template: `
    <tab-bar-item *ng-for="#item of tabBarItems" [item]="item"></tab-bar-item>
  `
})

export class TabBar {

  tabBarItems: Array<any> = [
    { linkParams: ['/TasksCreatePage'], linkLabel: 'Create Task' },
    { linkParams: ['/TasksPage'], linkLabel: 'Tasks List' }
  ]

  constructor(
    public router: Router,
    public location: Location
  ) {}

}
