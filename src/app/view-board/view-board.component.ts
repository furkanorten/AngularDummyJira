import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';
import { ViewBoardDialogComponent } from './view-board-dialog/view-board-dialog.component';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {

  boardIndex: any = 0
  boardTitle: string = ''

  constructor(private route: ActivatedRoute, public boardService: BoardService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex')
    this.boardTitle = this.boardService.boards[this.boardIndex].title
  }

  openNewCardDialog() {
    const dialogRef = this.matDialog.open(ViewBoardDialogComponent, {
      width:'500px',
      data: {boardIndex: this.boardIndex, editMode: false}
    })
  }

  deleteCard(index: number) {
    this.boardService.boards[this.boardIndex].cards.splice(index, 1)
    this.boardService.updateDataToLocalStorage()
  }

  updateCard(index: number, card:any) {
    const dialogRef = this.matDialog.open(ViewBoardDialogComponent, {
      width:'500px',
      data: {boardIndex: this.boardIndex, cardIndex: index, editMode: true}
    })
  }

}
