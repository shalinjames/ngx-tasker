export class UpdateListTitle {
  static readonly type = "[List] Update list title";
  constructor(public title: string, public listId: string) {}
}

export class AddListType {
  static readonly type = "[List] Add a new list";
  //@TODO , public boardId: string
  constructor(public title: string) {}
}
