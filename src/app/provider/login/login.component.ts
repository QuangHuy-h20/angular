import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private accountService: AccountService) { }

  ngOnInit(): void { }
  login(account: string, password: string): void {
    const objectLogin = {
      taiKhoan: account,
      matKhau: password,
    };
    this.accountService.login(objectLogin).subscribe((res) => {
      if (res) {
        console.log(res);
        alert('Login successfully!');
      }
    });
  }
}
