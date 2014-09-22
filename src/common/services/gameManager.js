/**
* service.game Module
*
* Description
*/
angular.module('service.GameManager', [
    'resource.GameData',
    'service.GridService',
    'service.Piece'
])
.factory('GameManager', [
    'GameData',
    'GridService',
    'Piece',
function (
    GameData,
    GridService,
    Piece
){
    var game = {
        currentPiece: null
    };

    game.newGame = function newGame() {
        game.currentPiece = new Piece({
            x: 4,
            y: 0
        });
        GridService.buildEmptyGameBoard();
        game.setGameStart();
    };

    game.setGameStart = function setGameStart() {
        GameData.gameStart = true;
        return this;
    };

    game.setGameEnd = function setGameEnd() {
        GameData.gameStart = false;
        return this;
    };

    game.isGameStart = function isGameStart() {
        return GameData.gameStart;
    };

    game.getCurrentPiece = function getCurrentPiece() {
        return game.currentPiece;
    };

    game.getCurrentPattern = function getCurrentPattern() {
        return game.currentPiece.getPattern();
    };

    game.rotatePiece = function rotatePiece() {
        return game.currentPiece.rotatePiece();
    };

    game.getPositionX = function getPositionX() {
        return game.currentPiece.getPositionX();
    };

    game.getPositionY = function getPositionY() {
        return game.currentPiece.getPositionY();
    };

    game.moveCurrentPiece = function moveCurrentPiece() {
        var speedY = game.getPositionY() + 0.01;
        game.currentPiece.updatePosition({
            y: speedY
        });
    };

    game.move = function move(key) {
        console.log(key);
        switch(key) {
            case 'up': game.rotatePiece();
                break;
            default:
                break;
        }
    };
    
    return game;
}]);