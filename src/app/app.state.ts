import { BookMark } from './models/bookmark.interface';

export interface AppState {
  readonly bookmarks: BookMark[];
}
