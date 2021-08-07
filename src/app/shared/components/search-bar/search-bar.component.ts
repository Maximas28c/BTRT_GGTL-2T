import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { faSortAmountDown, faSortAmountUp, faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() placeHolderValue!: string

  @Output() inputValueEvent = new EventEmitter<string>()
  @Output() changeSortDirectionEvent = new EventEmitter<boolean>()
  @Output() closeSearchBarEvent = new EventEmitter<boolean>()

  public inputValue!:string
  public isAscending!:boolean
  public isValid!: boolean

  public sortDown = faSortAmountDown
  public sortUp = faSortAmountUp
  public close = faTimes

  constructor() { }

  ngOnInit(): void {

    this.isAscending = true
    this.isValid = false
  }

  emitFilterValue(){
    if (this.inputValue.length > 2){
      this.isValid = true
      this.inputValueEvent.emit(this.inputValue)
    } else {
      this.isValid = false
    }
  }

  changeSortDirection(){
    this.isAscending = !this.isAscending
    this.changeSortDirectionEvent.emit(this.isAscending)
  }

  closeSearchBar(){
    this.closeSearchBarEvent.emit(true)
  }

}
