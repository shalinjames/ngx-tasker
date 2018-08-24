import { Component, Input } from "@angular/core";
import { Store } from "@ngxs/store";
import { AddCard } from "../../store/cards.action";

@Component({
  selector: "ngxtasker-add-card",
  templateUrl: "./add-card.component.html",
  styleUrls: ["./add-card.component.css"]
})
export class AddCardComponent {
  @Input() listId: string;

  public openTextInput: boolean = false;

  constructor(public store: Store) { }

  public saveNewCardTitle(title): void {
    this.store.dispatch(new AddCard(title, this.listId));
    this.openTextInput = false;
  }

  public toggleCardTextEdit(): void {
    this.openTextInput = !this.openTextInput;
  }
}
