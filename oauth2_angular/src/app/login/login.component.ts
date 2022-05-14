import { Component, OnInit } from '@angular/core';

import redirectUrl from '../constants/redirect';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirect(){
    window.location.href = redirectUrl();
  }
}
