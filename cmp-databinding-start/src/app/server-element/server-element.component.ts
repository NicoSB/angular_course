import { Component, OnInit, Input, 
 ViewEncapsulation, OnChanges, SimpleChanges,
 DoCheck, AfterContentInit, AfterContentChecked,
 ViewChild, ElementRef, AfterViewInit,
 ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
   OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
   AfterViewInit {
  @Input('srvElement')  element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('header') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log(this.header.nativeElement.textContent);
    console.log("ngOnInit");
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes); 
  }

  ngDoCheck() {
    console.log("docheck");
  }

  ngAfterContentInit() {
    console.log("aftercontentinti");
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  
  ngAfterContentChecked() {
    console.log("afterContentChecked");
  }
  
  ngAfterViewInit() {
    console.log("text content: " + this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log("onDestroy");
  }
}
