import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  recuerdame: boolean = false;

  auth2: any;
  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  googleInit() {
  gapi.load('auth2', () => {
    this.auth2 =  gapi.auth2.init({
      client_id: '707618129456-i85tfju5oogp9dl59vk88g44dvch7lf9.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      scope: 'profile email'
    });
    this.attachSignIn(document.getElementById('btnGoogle'));
  });

  }
  attachSignIn(elemet) {
  this.auth2.attachClickHandler(elemet, {}, googleUser => {
  // let profile = googleUser.getBasicProfile();
  let token = googleUser.getAuthResponse().id_token;
  this._usuarioService.loginGoogle(token)
    .subscribe(() => window.location.href = '#/dashboard');
  });
  }
  ingresar(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let usuario = new Usuario(null, form.value.email, form.value.password);
    this._usuarioService.login(usuario, form.value.recuerdame)
      .subscribe(correcto => this.router.navigate(['/dashboard']));


    console.log(form.valid);
    console.log(form.value);
// this.router.navigate(['/dashboard']);
  }

}
