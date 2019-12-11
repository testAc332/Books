export default class Message {
    data: any;
    type: string;

    constructor(data, type: string) {
        this.data = data;
        this.type = type;
    }
}
