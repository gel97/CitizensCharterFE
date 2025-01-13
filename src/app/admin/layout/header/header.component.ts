import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(
    //private Auth: AuthService,
    //private ProfilePicture: UtlityService
  ) {}

  public fullName: string | any;
  public officeName: string | any;
  public divisionName: string |any;
  public profilePicture: any = {};

  //utilsService = inject(UtilsService);
  //globalSearch = this.utilsService.globalSearch();
  search:string = "";
  ngOnInit(): void {
    this.fullName = localStorage.getItem('fullName');
    this.officeName = localStorage.getItem('officeName');
    this.divisionName = localStorage.getItem('divisionName');
    this.get_profile_picture();
  }

  onGlobalSearchChange(){
    //this.utilsService.setGlobalSearch(this.search);
  }

  setSidebarMobileView(){
    //this.utilsService.isShowSidebar.set(!this.utilsService.isShowSidebar())
  }

  get_profile_picture() {
    // this.ProfilePicture.get_profile_picture(
    //   localStorage.getItem('userId')
    // ).subscribe({
    //   next: (data: any) => {
    //     this.profilePicture = data;
    //   },
    //   error: (error: any) => {},
    //   complete: () => {},
    // });
  }

  Logout() {
    //this.Auth.signout();
  }
}
