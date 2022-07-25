export class ApiUrl {
    // http://192.168.1.13:9091/
    // https://mongonproject.herokuapp.com/
    private Url: string = "http://192.168.1.55:8080/SAAS_BE/";

    getUrl(): string {
        return this.Url;
    }
}