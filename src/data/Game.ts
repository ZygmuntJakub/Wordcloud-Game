import ERRORS from "utils/errors";

import Player from "./Player";
import Question from "./Question";
import Result from "./Result";

class Game {
    player: Player | undefined;

    question: Question | undefined;

    result: Result | undefined;

    addPlayer(player: Player) {
        this.player = player;
    }

    addQuestion(question: Question) {
        this.question = question;
    }

    calculateResult() {
        if (!this.player) {
            throw new Error(ERRORS.PLAYER_NOT_EXISTS);
        }
        if (!this.question) {
            throw new Error(ERRORS.QUESTION_NOT_EXISTS);
        }

        let goodAnswers = 0;
        let wrongAnswers = 0;
        let emptyAnswers = 0;

        this.question.allWords.forEach((word, index) => {
            if (this.question!.goodWords.includes(word.value)) {
                this.question!.allWords[index].correct = true;
                if (word.checked) {
                    goodAnswers += 1;
                } else {
                    emptyAnswers += 1;
                }
            } else if (word.checked) {
                this.question!.allWords[index].correct = false;
                wrongAnswers += 1;
            }
        });

        this.result = new Result().calculateScore(
            goodAnswers,
            wrongAnswers,
            emptyAnswers
        );
    }
}

export default Game;
