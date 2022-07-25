export class SkyIdInput {
    guid: string;
    token: string;
    application_id: string;
    doccument_id: string;
    selfie_id: string;

    constructor(guid: string, token: string, application_id: string, doccument_id: string, selfie_id: string) {
        this.guid = guid;
        this.token = token;
        this.application_id = application_id;
        this.doccument_id = doccument_id;
        this.selfie_id = selfie_id;
    }
}
