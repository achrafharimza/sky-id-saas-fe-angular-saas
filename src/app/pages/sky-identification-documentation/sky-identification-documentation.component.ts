import { Component, OnInit } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-sky-identification-documentation',
  templateUrl: './sky-identification-documentation.component.html',
  styleUrls: ['./sky-identification-documentation.component.scss']
})
export class SkyIdentificationDocumentationComponent implements OnInit {
  position: NzTabPosition = 'left';
  constructor() { }
code: string = `
  function process_check_timeOut()
  {
    //  actions after no live face is detected
  }

  function api_check_callback(my_frame, api_result)
    {
    	// actions after potential liveness check ends.
    }
  skyid_fa_start_face_scan(api_check_callback, process_check_timeOut);

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
output = {
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
}

  ngOnInit(): void {
  }

}
