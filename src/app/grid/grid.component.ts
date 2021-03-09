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
  colLength: number;

  constructor() {}

  ngOnInit() {
    this.setColumnOrder();
    this.setGridTemplateColumns();
    this.colLength = this.columns.length - 1;
  }

  setColumnOrder() {
    this.columns.forEach((col, i) => {
      Object.defineProperty(col, "order", { writable: true, value: i });
      this.columnOrder[i] = col;
    });
  }

  setGridTemplateColumns() {
    this.gridTemplateColumns = this.columns
      .map(() => `minmax(150px, 1fr)`)
      .join(" ");
  }

  move(col, diff) {
    const oldItem = this.columnOrder[col.order + diff];
    this.columnOrder[col.order + diff] = col;
    this.columnOrder[col.order] = oldItem;

    oldItem.order = oldItem.order - diff;
    col.order = col.order + diff;
  }
}
