import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "ngx-tasker-inline-text-editor",
  templateUrl: "./inline-text-editor.component.html",
  styleUrls: ["./inline-text-editor.component.css"]
})
export class InlineTextEditorComponent {
  @Input() value: string;
  @Output() newvalue = new EventEmitter<string>();

  public editTitle = false;
  constructor() {}

  toggleEditTitle() {
    this.editTitle = !this.editTitle;
  }

  public onEnter(newValue) {
    this.toggleEditTitle();
    this.newvalue.emit(newValue);
  }
}
