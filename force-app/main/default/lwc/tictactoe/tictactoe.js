import { LightningElement } from 'lwc';

export default class TicTacToe extends LightningElement {
		
		playerXTurn = true;
		playerXStarted = true;

		xScoreBox = "slds-badge slds-badge_inverse";
		oScoreBox = "slds-badge";
		xWinCount = 0;
		oWinCount = 0;
	
		handleResetClick(event){
			if(this.playerXStarted == true) {
				this.playerXStarted = false;
				this.playerXTurn = false;
			} else {
				this.playerXStarted = true;
				this.playerXTurn = true;
			}
			
			if(this.playerXTurn == true) {
				this.xScoreBox = "slds-badge slds-badge_inverse";
				this.oScoreBox = "slds-badge";
			} else {
				this.xScoreBox = "slds-badge";
				this.oScoreBox = "slds-badge slds-badge_inverse";
			}
			//this.xScoreBox = "slds-badge";
			//this.oScoreBox = "slds-badge";

			this.refs.b1.disabled = false;
			this.refs.b2.disabled = false;
			this.refs.b3.disabled = false;
			this.refs.b4.disabled = false;
			this.refs.b5.disabled = false;
			this.refs.b6.disabled = false;
			this.refs.b7.disabled = false;
			this.refs.b8.disabled = false;
			this.refs.b9.disabled = false;

			this.refs.b1.label = "";
			this.refs.b2.label = "";
			this.refs.b3.label = "";
			this.refs.b4.label = "";
			this.refs.b5.label = "";
			this.refs.b6.label = "";
			this.refs.b7.label = "";
			this.refs.b8.label = "";
			this.refs.b9.label = "";

			this.refs.b1.style.backgroundColor = "";
			this.refs.b2.style.backgroundColor = "";
			this.refs.b3.style.backgroundColor = "";
			this.refs.b4.style.backgroundColor = "";
			this.refs.b5.style.backgroundColor = "";
			this.refs.b6.style.backgroundColor = "";
			this.refs.b7.style.backgroundColor = "";
			this.refs.b8.style.backgroundColor = "";
			this.refs.b9.style.backgroundColor = "";
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
						this.xScoreBox = "slds-badge";
						this.oScoreBox = "slds-badge slds-badge_inverse";
						this.playerXTurn = false;
				} else {
						this.xScoreBox = "slds-badge slds-badge_inverse";
						this.oScoreBox = "slds-badge slds";
						this.playerXTurn = true;
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
						
						
						highlightWinningSquares : function(b1, b2, b3) {
							b1.style.backgroundColor = "#CDEFC4";
							b2.style.backgroundColor = "#CDEFC4";
							b3.style.backgroundColor = "#CDEFC4";
						},
						wins : function(shape) {
								if (this.b1.label == shape && this.b4.label == shape && this.b7.label == shape) {
									this.highlightWinningSquares(this.b1, this.b4, this.b7);
									return true;
								}
								if (this.b2.label == shape && this.b5.label == shape && this.b8.label == shape) {
									this.highlightWinningSquares(this.b2, this.b5, this.b8);
									return true;
								}
								if (this.b3.label == shape && this.b6.label == shape && this.b9.label == shape) {
									this.highlightWinningSquares(this.b3, this.b6, this.b9);
									return true;
								}
								if (this.b1.label == shape && this.b2.label == shape && this.b3.label == shape) {
									this.highlightWinningSquares(this.b1, this.b2, this.b3);
									return true;
								}
								if (this.b4.label == shape && this.b5.label == shape && this.b6.label == shape) {
									this.highlightWinningSquares(this.b4, this.b5, this.b6);
									return true;
								}
								if (this.b7.label == shape && this.b8.label == shape && this.b9.label == shape) {
									this.highlightWinningSquares(this.b7, this.b8, this.b9);
									return true;
								}
								if (this.b1.label == shape && this.b5.label == shape && this.b9.label == shape) {
									this.highlightWinningSquares(this.b1, this.b5, this.b9);
									return true;
								}
								if (this.b3.label == shape && this.b5.label == shape && this.b7.label == shape) {
									this.highlightWinningSquares(this.b3, this.b5, this.b7);
									return true;
								}
						}
				};

				if (game.wins("x")) {
						this.declareWinner(game,"X");
				} else if (game.wins("o")) {
						this.declareWinner(game,"O");
				} else {
						this.checkForDraw(game);
				}
		}
		checkForDraw(game) {
			if (game.b1.disabled == true &&
				game.b2.disabled == true &&
				game.b3.disabled == true &&
				game.b4.disabled == true &&
				game.b5.disabled == true &&
				game.b6.disabled == true &&
				game.b7.disabled == true &&
				game.b8.disabled == true &&
				game.b9.disabled == true) {
					this.xScoreBox = "slds-badge";
					this.oScoreBox = "slds-badge";
					}
		}
		declareWinner(game, shape){
				if(shape == "X") {
					this.xScoreBox = "slds-badge slds-theme_success";
					this.oScoreBox = "slds-badge";
					this.xWinCount++;
				} else {
					this.xScoreBox = "slds-badge";
					this.oScoreBox = "slds-badge slds-theme_success";
					this.oWinCount++;
				}
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