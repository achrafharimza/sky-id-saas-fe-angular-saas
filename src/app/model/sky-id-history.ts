import { SkyIdInput } from './sky-id-input';
export class SkyIdHistory {
    id: string;
    skyIdInput: SkyIdInput;
    output: any;
    statusCode:Boolean
    similarity:Boolean;

    createdDate: string;
    createdby: string;

    constructor(id: string, input: SkyIdInput, output: any, date: string, createdDate: string) {
        this.id = id;
        this.skyIdInput = input;
        this.output = output;
        this.createdDate = date;
        this.createdby = createdDate;
    }
}
