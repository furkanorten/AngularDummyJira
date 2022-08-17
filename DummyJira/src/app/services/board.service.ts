import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public boards: Array<any> = []

  constructor() {
    let localBoards = localStorage.getItem('boards')
    if(localBoards != null) {
      this.boards = JSON.parse(localBoards)
    }
   }

  public createBoard(title: any) {
    let newBoardObject = {
      title: title,
      cards: []
    }
    this.boards.push(newBoardObject)
    this.updateDataToLocalStorage()
  }

  public deleteBoard(index: number) {
    this.boards.splice(index, 1)
    this.updateDataToLocalStorage()
  }

  public updateDataToLocalStorage() {
    localStorage.setItem('boards', JSON.stringify(this.boards))
  }

}
