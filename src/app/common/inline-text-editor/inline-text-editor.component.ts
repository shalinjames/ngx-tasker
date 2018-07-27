import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "ngx-tasker-inline-text-editor",
  templateUrl: "./inline-text-editor.component.html",
  styleUrls: ["./inline-text-editor.component.css"]
})
export class InlineTextEditorComponent implements OnInit {
  @Input() value: string;
  @Input() open: boolean;
  @Input() label: string;
  @Input() placeholder: string;
  @Output() newvalue = new EventEmitter<string>();
  @Output() closed = new EventEmitter<boolean>();

  public editTitle;
  constructor() {}

  cancelEdit() {
    this.closed.emit(this.editTitle);
    this.toggleEditTitle(false);
  }

  toggleEditTitle(flag: boolean) {
    this.editTitle = flag;
  }

  public onEnter(newValue) {
    this.toggleEditTitle(false);
    this.newvalue.emit(newValue);
  }

  ngOnInit() {
    this.editTitle = this.open;
  }
}
