import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /** holds all form inputs */
  form: FormGroup;

  /** holds flag if form submited or not */
  submitted: boolean;

  /** display error message from server */
  errorMessage: string;

  /**it will contain the targetUrl from the URL */
  targetUrl: string = '';

  /**
 * component constructor and all parameters will injected by angular (dependency injection)
 * @param router responsible for navigations
 * @param fb responsible for build reactive forms in Angular 
 * @param authService responsible for authenticate users
 * @param route responsible for get query parameters from URL
 */
  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      usernameField: ['', Validators.required],
      passwordField: ['', Validators.required],
      rememberMe: false
    });


    this.route.queryParams
      .subscribe(params => {

        /** check if we have targetURL as query string in url */
        this.targetUrl = params['targetURL'];

      });
  }

  /**
* submit login form and pass username & password to authenticate user
* @param username 
* @param password 
*/
  submit(username: string, password: string, rememberMe: boolean) {

    this.http.post('http://localhost:1234/api/login', { username, password }).subscribe(res => {
      console.log(res);
      // this.router.navigate([this.targetUrl || '/dashboard']);
    })


  }

}
