import { Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {

 mainMenu: {
  defaultOptions: Array<any>, accessLink:Array<any>
} = {defaultOptions: [], accessLink: []}

 customOptions: Array<any> = []

  constructor(){}

  ngOnInit(): void {
    
  }

}
