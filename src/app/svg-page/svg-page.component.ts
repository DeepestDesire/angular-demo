import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-page',
  templateUrl: './svg-page.component.html',
  styleUrls: ['./svg-page.component.less']
})
export class SvgPageComponent implements OnInit {

  fillColor: String = ""

  constructor() {

  }

  ngOnInit(): void {
  }

  changeColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    this.fillColor = `rgb(${r},${g},${b})`
  }

}
