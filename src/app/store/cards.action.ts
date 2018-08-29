export class AddCard {
  static readonly type = "[Card] Add new card to the list";

  constructor(public title: string, public listId: string) {}
}

export class EditCardTitle {
  static readonly type = "[Card] Edit card title";

  constructor(public title: string, public cardId: string) {}
}
