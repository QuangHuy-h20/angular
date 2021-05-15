import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  signUp(form: any) {
    const { value } = form;
    const objSignUp = {
      taiKhoan: value.account,
      matKhau: value.password,
      email: value.email,
      soDt: value.phoneNumber,
      maNhom: 'GP01',
      maLoaiNguoiDung: 'KhachHang',
      hoTen: value.fullName
    }
    console.log(form);

    this.accountService.signUp(objSignUp).subscribe((res) => {
      if (res) {
        console.log(res);
        alert('Sign up successfully!');
      }
    });
  }
  // signUp(form: any): void {
  //   console.log(form);
  // }
}
