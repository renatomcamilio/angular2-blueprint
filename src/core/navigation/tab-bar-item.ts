// <a [router-link]="['/TasksPage']">
//   <label>Tasks List</label>
// </a>

import {Component, View, Input} from 'angular2/angular2'
import {Router, Location, ROUTER_DIRECTIVES, Instruction} from 'angular2/router'

@Component({
  selector: 'tab-bar-item'
})

@View({
  directives: [ROUTER_DIRECTIVES],
  styles: [`
    a {
      display: inline-block;
      color: #fff;
      width: 100%;
      height: 100%;
      text-align: center;
      padding: 12px 10px;
    }
    a:hover,
    a.router-link-active {
      background-color: #1F232B;
      text-decoration: none;
    }
  `],
  template: `
    <a [router-link]="item.linkParams">{{item.linkLabel}}</a>
  `
})

export class TabBarItem {

  @Input() item: any

  constructor(
    public router: Router,
    public location: Location
  ) {}

}
