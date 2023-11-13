import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-juego-terminado-screens',
  templateUrl: './juego-terminado-screens.component.html',
  styleUrls: ['./juego-terminado-screens.component.scss']
})
export class JuegoTerminadoScreensComponent implements OnInit {

  constructor(private router: Router
    ){}

  ngOnInit(): void {
  }

  public goHome(){
    this.router.navigate(["home"]);
  }
}
