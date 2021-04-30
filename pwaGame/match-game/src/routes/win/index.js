import { Component } from "preact";
import { route } from "preact-router";
import style from "./styles.css";

export default class Win extends Component {
    startGame = () => {
        route("/game");
    };

    render() {
        return(
            <div class={style.win}>
                <div class={style.head}>
                    <div class={style.emoji}>🎉</div>
                    <div>YOU WON!</div>
                </div>
                <button class={style.button} onClick={this.startGame}>
                    NEW GAME
                </button>
            </div>
        );
    }
}