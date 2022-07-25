import { ocr_input } from './ocr_input';
export class APIhistory {
  id: number;
  ocrInput: ocr_input;
  output: any;
  statusCode:Boolean;
  similarity:Boolean;
  createdDate: string;
  createdby: string;

 constructor(id: number, input: ocr_input, output: any, createdDate: string) {
    this.id = id;
    this.ocrInput = input;
    this.output = output;
    this.createdDate = createdDate;
  }
}
