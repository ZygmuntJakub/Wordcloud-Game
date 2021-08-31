export enum WordStates {
    GOOD,
    WRONG,
    NOT_CHECKED_GOOD,
    NOT_CHECKED_WRONG,
}

class Word {
    value: string;

    checked: boolean;

    correct: boolean | undefined;

    constructor(value: string) {
        this.value = value;
        this.checked = false;
    }

    getState() {
        if (this.checked && this.correct) return WordStates.GOOD;
        if (this.checked && !this.correct) return WordStates.WRONG;
        if (!this.checked && this.correct) return WordStates.NOT_CHECKED_GOOD;
        return WordStates.NOT_CHECKED_WRONG;
    }
}

export default Word;
