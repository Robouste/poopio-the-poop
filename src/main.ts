import { Boot } from "./scenes/boot.scene";
import { GameOver } from "./scenes/game-over.scene";
import { Game as MainGame } from "./scenes/game.scene";
import { MainMenu } from "./scenes/main-menu.scene";
import { Preloader } from "./scenes/preloader.scene";

import { Game, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	parent: "game-container",
	backgroundColor: "#028af8",
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	scene: [Boot, Preloader, MainMenu, MainGame, GameOver],
};

export default new Game(config);
