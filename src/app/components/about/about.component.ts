import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser"

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  html=`<div><h1>Angular Router</h1></div>`;
   aboutLikes =100;

   safeHtml :any;

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.safeHtml= this.sanitizer .bypassSecurityTrustHtml(this.html);
  }

}
