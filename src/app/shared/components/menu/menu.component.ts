import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() menuClickEvent = new EventEmitter<any>()

  public search = faSearch
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {

  }

  clickOnMenuItem(){
    this.menuClickEvent.emit()
  }
  navigateToHome(){
    this.router.navigate(['/home'])
  }
  navigateToTaskPage(){
    this.router.navigate(['/task'])
  }

}
