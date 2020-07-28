import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './../../actions/app.actions';
import { AppState } from 'src/app/app.state';
import { BookMark } from '../../models/bookmark.interface';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  bookmarks: BookMark[] = [];
  constructor(private store: Store<AppState>) {
    this.showData();
  }

  showData() {
    this.store.select('bookmarks').subscribe((resp) => {
      if (resp && resp.length > 0) {
        this.bookmarks = resp.filter((item) => item.name.length > 0);
      }
    });
  }

  deleteBookmark(bookmark: BookMark) {
    this.store.dispatch(new Actions.DeleteBookmark(bookmark));
  }
}
