import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { windowWhen } from 'rxjs';
// import Typewriter from 't-writer.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  
  title = 'my-portfolio';
  activeTab:number=0;
  
  changeHeaderColor:boolean;
  
  constructor(private router: Router){
    this.changeHeaderColor = false;
  }

  ngAfterViewInit(): void {
  
  }

  ngOnInit(): void {
    const target = document.querySelector('.tw');

      // const writer = new Typewriter(target, {
      //   loop: true,
      //   typeSpeed: 80,
      //   deleteSpeed: 80,
      //   typeColor: 'red'
      // })
      
      // writer
      //   .type('You can type')
      //   .rest(500)
      //   .changeOps({ deleteSpeed: 80 })
      //   .remove(4)
      //   .type('edit')
      //   .rest(500)
      //   .remove(4)
      //   .type('synchronize callbacks')
      //   .rest(500)
      //   .changeOps({ deleteSpeed: 20 })
      //   .remove(21)
      //   .type('change options on the go')
      //   .rest(500)
      //   .clear()
      //   .start()
  
    }

  @HostListener('window:scroll',[])
  onScroll():void{
    // changing the color of navBar Header on Scroll
    if( window.scrollY > 250 ){
      this.changeHeaderColor = true;
    }
    else
    {
      this.changeHeaderColor = false;
    }

    // --------------------------
    // Changing the active navBar Links on scroll
    if(window.scrollY + 67 >= document.getElementById('heroSection')!.offsetTop && window.scrollY < document.getElementById('heroSection')!.offsetTop + document.getElementById('heroSection')!.clientHeight){
      this.activeTab = 0
    }
    else if(window.scrollY + 67 >= document.getElementById('aboutSection')!.offsetTop && window.scrollY < document.getElementById('aboutSection')!.offsetTop + document.getElementById('aboutSection')!.clientHeight){
      this.activeTab = 1
    }
    else{
      this.activeTab = 2;
    }

  }

}
