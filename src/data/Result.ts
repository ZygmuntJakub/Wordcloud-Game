class Result {
    score = 0;

    calculateScore(
        goodAnswers: number,
        wrongAnswers: number,
        emptyAnswers: number
    ) {
        this.score = goodAnswers * 2 - (wrongAnswers + emptyAnswers);
        return this;
    }
}

export default Result;
