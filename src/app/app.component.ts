import { Component, OnInit } from '@angular/core';
import { enumValues, WorkEnum } from './enum.helper';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  public work = WorkEnum.waite;
  public WorkEnum = WorkEnum;
  public enumValues = enumValues;

  ngOnInit(): void
  {
    console.log(WorkEnum);
  }

}
