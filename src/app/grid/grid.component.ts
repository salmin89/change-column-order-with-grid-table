import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"]
})
export class GridComponent implements OnInit {
  @Input() items = [
    { name: "Adam", age: 35, favColor: "red" },
    { name: "Eve", age: 25, favColor: "blue" },
    { name: "Pat", age: 40, favColor: "green" },
    { name: "Steve", age: 30, favColor: "pink" }
  ];

  @Input() columns = [
    { propertyName: "name" },
    { propertyName: "age" },
    { propertyName: "favColor" }
  ];

  columnOrder = {};
  gridTemplateColumns: string;

  ngOnInit() {
    this.setColumnOrder();
    this.setGridTemplateColumns();
  }

  setColumnOrder() {
    this.items.forEach((item, i) => {
      Object.defineProperty(item, "order", { writable: true, value: i });
      this.columnOrder[i] = item;
    });
  }

  setGridTemplateColumns() {
    this.gridTemplateColumns = this.columns
      .map(() => `minmax(150px, 1fr)`)
      .join(" ");
  }
}
