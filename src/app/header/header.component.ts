import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  link1: String='Home';
  link2:String='Residences';
  url:String='https://esprit-tn.com/ESPOnline/Online/default.aspx';
  linkcolor:String =""


  changecolor(){
    this.linkcolor=this.linkcolor;
  }
  clickme(){
    alert("vous avez cliquer");
  }
}
