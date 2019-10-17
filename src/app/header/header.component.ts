import { DataStorageService } from './../shared/data-storgae.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {

  }
  onSaveDate() {
    this.dataStorageService.storeRecipe()
  }

  onFetchData(){
    this.dataStorageService.fetchRecipe().subscribe();
  }
}
