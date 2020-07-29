import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './../../actions/app.actions';
import { AppState } from 'src/app/app.state';
import { BookMark } from '../../models/bookmark.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  bookmarks: BookMark[] = [];
  @Output() changeTab = new EventEmitter();

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.showData();
  }

  showData() {
    this.store.select('bookmarks').subscribe((resp) => {
      if (resp && resp.length > 0) {
        const arrayBookmarks = resp.filter((item) => item.name.length > 0);
        this.bookmarks = this.groupBy(arrayBookmarks, 'group');
      } else {
        this.bookmarks = [];
      }
    });
  }

  deleteBookmark(bookmark: BookMark) {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(new Actions.DeleteBookmark(bookmark));
      } else {
        return;
      }
    });
  }

  groupBy(collection: BookMark[], property: string) {
    let i = 0;
    let val;
    let index;
    const values = [];
    const result = [];
    for (; i < collection.length; i++) {
      val = collection[i][property];
      index = values.indexOf(val);
      if (index > -1) {
        result[index].push(collection[i]);
      } else {
        values.push(val);
        result.push([collection[i]]);
      }
    }
    return result;
  }

  changeToEditTab(changingBoolean: string) {
    this.changeTab.emit(changingBoolean);
  }
}
