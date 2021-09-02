class Word {
    value: string;

    checked: boolean;

    correct: boolean | undefined;

    constructor(value: string) {
        this.value = value;
        this.checked = false;
    }
}

export default Word;
