export class AddCard {
  static readonly type = "[Card] Add new card to the list";

  constructor(public title: string, public listId: string) {}
}
