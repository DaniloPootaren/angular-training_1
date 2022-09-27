import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() links = ['link1', 'link2', 'link3']

  constructor() { }

  ngOnInit(): void {
  }

}
