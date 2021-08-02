import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menuInitializer: any
  @Input() sortable!: boolean
  @Output() menuClickEvent = new EventEmitter<number>()
  @Output() sortEvent = new EventEmitter<boolean>()

  public isAsc!: boolean
  public sortMsg!: string

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.sortMsg = 'none'
    if (this.sortable){
      this.isAsc = true
    } else {
      this.isAsc = false
    }
  }

  clickOnMenuItem(itemId:number){
    this.menuClickEvent.emit(itemId)
  }
  navigateToHome(){
    this.router.navigate(['/home'])
  }
  navigateToTaskPage(){
    this.router.navigate(['/task'])
  }
  toggleSortDir(){
    this.isAsc = !this.isAsc
    if (this.isAsc){
      this.sortMsg = 'ASC'
    } else {
      this.sortMsg = 'DESC'
    }
  }
  triggerSort(){
    this.toggleSortDir()
    this.sortEvent.emit(this.isAsc)
  }
}
