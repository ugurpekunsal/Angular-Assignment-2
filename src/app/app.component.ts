import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  allowResetUsername = false;
  userName = ``;

  ngOnInit() {}

  onChangeUsername(event: Event) {
    this.allowResetUsername = true;
  }
  onResetUsername(event: Event) {
    this.userName = ``;
    this.allowResetUsername = false;
  }
}
