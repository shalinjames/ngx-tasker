import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-newboard-dialog",
  templateUrl: "./newboard-dialog.component.html",
  styleUrls: ["./newboard-dialog.component.css"]
})
export class NewboardDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<NewboardDialogComponent>) {}

  ngOnInit() {}
  close() {
    this.dialogRef.close();
  }
  onEnter(boardName: string) {
    this.dialogRef.close(boardName);
  }
}
