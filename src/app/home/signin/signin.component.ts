import { AuthService } from '../../core/user/auth/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'hb-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  @ViewChild('userNameInputFocus')
  userNameInputFocus!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  //chamar o service
  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    of([
      this.authService.userAuthenticate(userName, password).subscribe({
        next: () => this.router.navigate(['user', userName]),
      }),
    ]);
    this.loginForm.reset();
    this.userNameInputFocus.nativeElement.focus();
  }
}
