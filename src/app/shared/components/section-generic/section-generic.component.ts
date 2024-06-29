import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {
@Input() title: string = ''
@Input() mode: 'small' | 'big' ='big'
@Input() dataTracks: Array<any> = []
constructor(){}

ngOnInit():void {

}
}