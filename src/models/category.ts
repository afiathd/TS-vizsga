export class Category {
    constructor(public name: string) {}
}

export class Hiphop extends Category {
    constructor(name: string, public era: string) {
        super(name);
    }
}

export class Rock extends Category {
    constructor(name: string, public genre: string) {
        super(name);
    }
}