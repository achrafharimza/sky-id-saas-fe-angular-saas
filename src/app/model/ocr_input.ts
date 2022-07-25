export class ocr_input {
  institution_id: string;
  application_id: string;
  channel_id: string;
  service_id: string;
  sub_service_id: string;
  token: string;
  request_data: string;
  document_id: string;

  constructor(institution_id: string, application_id: string, channel_id: string, service_id: string, sub_service_id: string, token: string, request_data: string, document_id: string) {
    this.institution_id = institution_id;
    this.application_id = application_id;
    this.channel_id = channel_id;
    this.service_id = service_id;
    this.sub_service_id = sub_service_id;
    this.token = token;
    this.request_data = request_data;
    this.document_id = document_id;
  }
}
