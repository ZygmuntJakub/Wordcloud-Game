import Word from "./Word";

class Question {
    question: string;

    allWords: Word[];

    goodWords: string[];

    constructor(question: string, allWords: string[], goodWords: string[]) {
        this.question = question;
        this.allWords = allWords.map((word) => new Word(word));
        this.goodWords = goodWords;
    }
}

export default Question;
