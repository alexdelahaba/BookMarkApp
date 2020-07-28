import { Action } from '@ngrx/store';
import { BookMark } from '../models/bookmark.interface';

export const ADD_BOOKMARK = 'Add bookmark';
export const DELETE_BOOKMARK = 'Delete bookmark';

export class AddBookmark implements Action {
  readonly type = ADD_BOOKMARK;
  constructor(public payload: BookMark) {}
}

export class DeleteBookmark implements Action {
  readonly type = DELETE_BOOKMARK;
  constructor(public payload: BookMark) {}
}

export type Actions = AddBookmark | DeleteBookmark;
