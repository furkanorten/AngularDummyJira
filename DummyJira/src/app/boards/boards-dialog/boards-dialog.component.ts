import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.css']
})
export class BoardsDialogComponent implements OnInit {

  boardForm = new FormGroup(
    {
      title: new FormControl(null, [Validators.required])
    }
  )

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
  }

  createBoard() {
    this.boardService.createBoard(this.boardForm.get('title')?.value)
  }

}
