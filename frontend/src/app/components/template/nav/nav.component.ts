import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @ViewChild('navBurger') navBurger: ElementRef
  @ViewChild('navMenu') navMenu: ElementRef
  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active')
    this.navMenu.nativeElement.classList.toggle('is-active')
  }
}
