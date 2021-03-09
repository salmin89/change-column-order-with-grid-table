import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"]
})
export class GridComponent implements OnInit {
  @Input() items = [
    { name: "Adam", age: 35 },
    { name: "Eve", age: 25 },
    { name: "Pat", age: 40 },
    { name: "Steve", age: 30 }
  ];

  ngOnInit() {}
}
