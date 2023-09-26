import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input('headerColorChange') headerColorChange:boolean = false;
  @Input('activeTab') activeTab:Number = 0;

  isBottom:boolean;
  inh:any;

  constructor(){
    this.isBottom=false;
    this.inh='';
  }
  ngOnInit(): void {}

  navigateToASection(sectionName:string){
    document.getElementById(sectionName)?.scrollIntoView();
  }

  // @HostListener('document:scroll',[])
  // onScroll() :void{
  //   this.inh=window.innerHeight;
  //   console.log('window.scrollY');
  //   console.log(window.scrollY);

  //   console.log('document.documentElement.offsetHeight');
  //   console.log(document.documentElement.scrollTop);

  //   console.log('document.body.offsetHeight');
  //   console.log(document.body.offsetHeight);

  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     this.isBottom = false;
  //   } else if (window.scrollY) {
  //     this.isBottom = false;
  //   } else  {
  //     this.isBottom = true;
  //   }
  // }

}
