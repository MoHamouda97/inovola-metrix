export class Token {
    public static _instance = new Token();

    token: string = '';

    private constructor () {}

    static setToken(token: string) {
        this._instance.token = token;
    }
}