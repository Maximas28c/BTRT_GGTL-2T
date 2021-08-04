import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  public pdfSrc = 'assets/task/task.pdf'

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


}
