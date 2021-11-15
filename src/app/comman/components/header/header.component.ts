import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  accountId :string = ''
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signIn() {
    console.log("KKK")
    this.authService.signInWithMetaMask().subscribe(response => {
      this.accountId = response[0]
    }, err => {
      alert(err.message)
    })
  }
}
