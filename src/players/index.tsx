import Mario from "../assets/img/mariohead.png";
import MarioGif from "../assets/img/mario-gif.gif";
import Yoshi from "../assets/img/yoshihead.png";
import YoshiGif from "../assets/img/yoshi-gif.gif";
import MarioDead from "../assets/img/marioDead.png";

export const PLAYERS = [
    {
        id: 1,
        name: "Mario",
        image: Mario,
        gif: MarioGif,
        gameOver: MarioDead,
    },
    {
        id: 2,
        name: "Yoshi",
        image: Yoshi,
        gif: YoshiGif,
    },
]