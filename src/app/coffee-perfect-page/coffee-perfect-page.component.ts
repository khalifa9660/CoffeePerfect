import { Component } from '@angular/core';

@Component({
  selector: 'app-coffee-perfect-page',
  templateUrl: './coffee-perfect-page.component.html',
  styleUrls: ['./coffee-perfect-page.component.scss']
})
export class CoffeePerfectPageComponent {

}

const menuIsOpen = document.querySelector("#menu-open-button");
menuIsOpen?.addEventListener("click", () =>{
  // Toggle Mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});