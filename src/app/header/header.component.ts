import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storgae.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;


  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) { }



  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    })
  }

  onSaveDate() {
    this.dataStorageService.storeRecipe()
  }

  onFetchData() {
    this.dataStorageService.fetchRecipe().subscribe();
  }

  onLogout(){
    this.authService.logout()
  }


  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
