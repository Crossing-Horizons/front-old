import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  connected: string;

  ngOnInit(): void {
    this.connected = localStorage.getItem('token') == null ? sessionStorage.getItem('token') : localStorage.getItem('token');
  }

  disconnect(){
    localStorage.getItem('token') == null ? sessionStorage.removeItem('token') : localStorage.removeItem('token');
    if(this.router.url=='/'){
      location.reload()
    }else{
      this.router.navigate(['/'])
    }
  }

}
