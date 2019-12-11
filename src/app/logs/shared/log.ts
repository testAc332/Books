
export default class Log {
    data: any;
    action: string;
    description: string;

    constructor(data: any, action: string, description: string) {
        this.data = data;
        this.action = action;
        this.description = description;
    }
}
