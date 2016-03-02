//Determines if tic tac toe board is solved and who the winner is

var isSolved = function (board) {

  var m = new Moves();
  var count = 0;

  for (var i = 0; i < board.length; i++) {
    for (var k = 0; k < board[i].length; k++) {
      if(board[i][k] !== 0) {
        var val = board[i][k];
        count++;
        //console.log(val, i, k);
        //loop through moves, starting at current val
          for (var mo = 0; mo < m.length; mo++) {
            var movedCoords = m[mo]([i, k]); 
            //console.log([i, k], movedCoords);
            if(movedCoords && board[movedCoords[0]][movedCoords[1]] === val) {
              var movedCoords2 = m[mo](movedCoords); 
              if(movedCoords2 && board[movedCoords2[0]][movedCoords2[1]] === val) {
                  return val;
              }
            }
          }
      }
    }
  }
  if(count <= 8) {
    return -1;
  }
  return 0;
}

var Moves = function () {
  var moves = [];

  var moveRight = function (coords) {
    var newCoords = [coords[0], coords[1]+1];
    if (newCoords[0] > 2 || newCoords[1] > 2) {
      newCoords = null;
    }
    return newCoords;
  }

  var moveDown = function (coords) {
    var newCoords = [coords[0]+1, coords[1]];
    if (newCoords[0] > 2 || newCoords[1] > 2) {
      newCoords = null;
    }
    return newCoords;
  }

  var moveDiag = function (coords) {
    var newCoords = [coords[0]+1, coords[1]+1];
    if (newCoords[0] > 2 || newCoords[1] > 2) {
      newCoords = null;
    }
    return newCoords;
  }

  var moveDiagBack = function (coords) {
    var newCoords = [coords[0]+1, coords[1]-1];
    if (newCoords[0] > 2 || newCoords[1] > 2 || newCoords[0] < 0 || newCoords[1] < 0) {
      newCoords = null;
    }
    return newCoords;
  }

  moves.push(moveRight);
  moves.push(moveDown);
  moves.push(moveDiag);
  moves.push(moveDiagBack);

  return moves;

}


var testBoard =  [[0,2,1],
                  [0,1,2],
                  [1,2,1]];

console.log(isSolved(testBoard));

