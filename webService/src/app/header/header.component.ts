import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../guards/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//@Output() featureSelected = new EventEmitter<string>();

/*onSelect(feature: string){
  this.featureSelected.emit(feature);
}*/

private subscription: Subscription;
constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

ngOnInit() {
  this.onLoguot();
}

onLoguot(){
  this.authService.logout();
  this.router.navigate(['signin'], {relativeTo: this.route});
}

}
