import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginData = { username: this.username, password: this.password };

    this.http.post<any>('http://localhost:8081/api/authenticate', loginData).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.jwt);
        this.router.navigate(['/dashboard']); // Navigate to a secure page
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }
}