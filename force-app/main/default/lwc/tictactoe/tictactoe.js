import { LightningElement } from 'lwc';

export default class TicTacToe extends LightningElement {
		
		playerXTurn = true;
		subText = "New Game";
	
		handleResetClick(event){
				eval("$A.get('e.force:refreshView').fire();");
		}
		handleBoxClick(event){
				event.target.disabled = true;
				if (this.playerXTurn == true) {
						event.target.label = "x";
						this.changeTurn();
				} else {
						event.target.label = "o";
						this.changeTurn();
				}
				this.checkForGameOver();
		}
		changeTurn() {
				if (this.playerXTurn) {
						this.playerXTurn = false;
						this.subText = "Turn: o";
				} else {
						this.playerXTurn = true;
						this.subText = "Turn: x";
				}
		}
		checkForGameOver() {
				const game = {
						b1: this.refs.b1,
						b2: this.refs.b2,
						b3: this.refs.b3,
						b4: this.refs.b4,
						b5: this.refs.b5,
						b6: this.refs.b6,
						b7: this.refs.b7,
						b8: this.refs.b8,
						b9: this.refs.b9,
						
						checkForDraw : function() {
								if (this.b1.disabled == true &&
										this.b2.disabled == true &&
										this.b3.disabled == true &&
										this.b4.disabled == true &&
										this.b5.disabled == true &&
										this.b6.disabled == true &&
										this.b7.disabled == true &&
										this.b8.disabled == true &&
										this.b9.disabled == true) {
												alert("It's a Draw");
												this.subText = "Draw";
										}
						},
						wins : function(shape) {
								if (this.b1.label == shape && this.b4.label == shape && this.b7.label == shape) return true;
								if (this.b2.label == shape && this.b5.label == shape && this.b8.label == shape) return true;
								if (this.b3.label == shape && this.b6.label == shape && this.b9.label == shape) return true;
								if (this.b1.label == shape && this.b2.label == shape && this.b3.label == shape) return true;
								if (this.b4.label == shape && this.b5.label == shape && this.b6.label == shape) return true;
								if (this.b7.label == shape && this.b8.label == shape && this.b9.label == shape) return true;
								if (this.b1.label == shape && this.b5.label == shape && this.b9.label == shape) return true;
								if (this.b3.label == shape && this.b5.label == shape && this.b7.label == shape) return true;
						}
				};

				if (game.wins("x")) {
						this.declareWinner(game,"x");
				} else if (game.wins("o")) {
						this.declareWinner(game,"o");
				} else {
						game.checkForDraw();
				}
		}
		declareWinner(game, shape){
				alert("Player " + shape + " Wins");
				this.subText = "Player " + shape + " Wins";
				game.b1.disabled = true;
				game.b2.disabled = true;
				game.b3.disabled = true;
				game.b4.disabled = true;
				game.b5.disabled = true;
				game.b6.disabled = true;
				game.b7.disabled = true;
				game.b8.disabled = true;
				game.b9.disabled = true;
		}
}