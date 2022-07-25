import { Component, OnInit } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-sky-face-api-doc',
  templateUrl: './sky-face-api-doc.component.html',
  styleUrls: ['./sky-face-api-doc.component.scss']
})
export class SkyFaceApiDocComponent implements OnInit {

  position: NzTabPosition = 'left';
  constructor() { }

  ngOnInit(): void {
  }

  listOfData = [
    {
      key: 'guid',
      type: `String(128)`,
      Mandatorye: 'Yes',
      Description: 'Identifiant'
    },
    {
      key: 'token',
      type: `String(128)`,
      Mandatorye: 'Yes',
      Description: 'Licence key'
    },
    {
      key: 'application_id',
      type: `String(128)`,
      Mandatorye: 'Yes',
      Description: 'application id'
    },
    {
      key: 'doc_1_1',
      type: `ID card file`,
      Mandatorye: 'Yes',
      Description: 'ID Card, in the case of morocco is CIN or CINE'
    },
    {
      key: 'slf_1',
      type: `selfie`,
      Mandatorye: 'Yes',
      Description: 'selfie captured by JS Sky Face Analysis after liveness operation.'
    }
  ];
  
  listOfData1 = [
    {
      key: 'Status _code',
      type: `String (Max 10)`,
      Description: 'request code status'
    },
    {
      key: 'Status_label',
      type: `String (Max 255)`,
      Description: 'request code description.'
    },
    {
      key: 'multi_response_data (json)',
      type: `String (Max 255)`,
      Description: 'If sky_face_match_decision_code = 1 then is matched else not matched'
    },
  ];
  
  output = `
  "multi_response_data": {
    "doc_1": {
        "response_data": {
            "distance": 0.5077550886065643,
            "proba": -1,
            "similarity": 1,
            "sky_face_match_accuracy": -1,
            "sky_face_match_decision_code": 1,
            "sky_face_match_decision_label": "accepted",
            "sky_face_match_distance": 0.5077550886065643
        },
        "status_code": "000",
        "status_label": "request success"
    }
  },
  "similarity": 1,
  "sky_face_match_decision_code": 1,
  "sky_face_match_decision_label": "accepted",
  "status_code": "000",
  "status_label": "request success"
  `;


annexs: string = `
  function skyid_fa_base64ToArrayBuffer(base64) {
	const binary_string =  window.atob(base64);
	const len = binary_string.length;
	var bytes = new Uint8Array( len );
	for (var i = 0; i < len; i++)        {
		bytes[i] = binary_string.charCodeAt(i);
	}
	return bytes.buffer;
  }

  function skyid_fa_canvas2binary(req_canvas)
  {
      let skyid_fa_canvas_data = req_canvas.toDataURL('image/jpeg', 1.0);
      skyid_fa_canvas_data = skyid_fa_canvas_data.replace('data:image/jpeg;base64,', '');
      return skyid_fa_base64ToArrayBuffer(skyid_fa_canvas_data)
  }

  // lets have two input canvas object named selfie_frame and cin_canvas

  // — create image file
  const selfie_bin = skyid_fa_canvas2binary(selfie_frame);
  const  selfie_file = new File([selfie_bin], "selfie.jpg",{type:"application/octet-stream"});

  const cin_bin = skyid_fa_canvas2binary(cin_canvas);
  const  cin_file = new File([cin_bin], "cin.jpg",{type:"application/octet-stream"});

  // — insert to form data
  let form_data = new FormData();
  form_data.append("'slf_1",selfie_file);
  form_data.append("doc_1_1",cin_file);
`;

example2: string = `
  curl --location --request POST 'http://localhost:7002/compare_multi_doc_vs_selfie'
  --form 'guid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  --form 'token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  --form application_id=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  --form 'doc_1_1=@/home/skyid/Documents/cin.jpg'
  --form 'slf_1=@/home/skyid/Documents/slf.jpg'
`;

}
