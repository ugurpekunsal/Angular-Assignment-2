import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  allowResetUsername = false;
  username = "";

  ngOnInit() {}

  onChangeUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    this.allowResetUsername = this.username == "" ? false : true;
    console.log("fdafadfda");
  }
  onResetUsername(event: Event) {
    this.username = "";
    this.allowResetUsername = false;
  }
}
