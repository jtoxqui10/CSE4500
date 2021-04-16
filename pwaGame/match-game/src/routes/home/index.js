import { h } from 'preact';
import { route } from "preact-router";
import style from './style.css';

export default class Home extends Component {
	startGame = () => {
		route("/game");
	};

	render() {
		return (
			<div class={style.home}>
				<div class={style.head}>
					<h2>MATCH GAME</h2>
			</div>
			<button class={style.button} onClick={this.startGame}>
				NEW GAME
			</button>
			</div>
		);
	}
}
