import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import * as skyid from 'oth116'
import { Skyface } from 'src/app/model/skyface';
import { SkyFaceService } from 'src/app/service/sky-face.service';


@Component({
  selector: 'app-sky-face-web-demo',
  templateUrl: './sky-face-web-demo.component.html',
  styleUrls: ['./sky-face-web-demo.component.scss']
})
export class SkyFaceWebDemoComponent implements OnInit {
  url: any;
  showWebcam = false;
  checked = false;
  check_true = false;
  check_false = false;
  result_score:any;
  result_class:any;

  constructor(private sky: SkyFaceService) { }

  ngOnInit(): void {

    
  }

  showImage(){
    this.showWebcam = true;
    let skyid_liveness = document.getElementById('liveness');
    skyid_liveness!.innerHTML = skyid.skyid_component;
    var result;
    var image;
    var class_name;
    if(result){
      this.result_class = class_name;
      this.result_score = result;
      if(class_name == 'Real'){
        this.check_true = true;
      }else {
        this.check_false = true;
      }
    }
    
    var image_url;
    if(image_url){
      this.url = image_url;
    }
    function process_spoof_timeOut() {
      console.log("the face is SPOOF");

      $("#skyid_fa_start_button").html("Redemarrer");
      $("#skyid_fa_start_button").show();
      $("#msg").html("operation non reussie");
    }
    
    const api_check_callback = (my_frame: any, api_result: any) => {
      console.log('client respond');
      console.log(api_result);
      console.log('frame =>'+ my_frame);
      // image = my_frame;
      result = api_result['score'];
      console.log('result ==> '+ result);
      // convert the my_frame to base64

      var base64 = my_frame.toDataURL("image/png");
      console.log(base64);
      
      // send the image_url to the server


      // var blob = new Blob([my_frame], { type: 'image/jpeg' });
      // var url = URL.createObjectURL(blob);
      // console.log(url);
      // var file = new File([blob], 'my_frame.jpeg', { type: 'image/jpeg' });
      // console.log(file);

      const arr = base64.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      const file = new File([u8arr], 'image.jpeg', { type: mime });
        
      // reader.onload = function () {
      //   var dataURL = reader.result;
      //   console.log(dataURL);
      // }
      image = file;
      class_name = api_result['class'];
      // image_url = url;

      if(result){
        this.result_class = class_name;
        this.result_score = result;
        if(class_name == 'Real'){
          this.check_true = true;
        }else if(class_name != '' && class_name != 'Real'){
          this.check_false = true;
        }
        var formData: any = new FormData();
        formData.append("document", image);
        formData.append("result", result);
        formData.append("classresult", class_name);
        this.sky.addFace(formData).subscribe((data:any) => {})
      }

      

      $('#skyid_fa_start_button').html('Redemarrer');
      $('#skyid_fa_start_button').show();
      $('#msg').html(
        'Result :' + api_result['class'] + ' score ' + api_result['score']
      );
    }
    
    const skyid_fa_sdk_token = '027874587451263596874514215647856';
    const skyid_fa_sdk_appId = 'idc.web.sdk';

    skyid.skyid_fa_setup_sdk(skyid_fa_sdk_token, skyid_fa_sdk_appId);

    $('#skyid_fa_start_button').click(function () {
        skyid.skyid_fa_start_face_scan(api_check_callback, process_spoof_timeOut);
      $('#skyid_fa_start_button').hide();
      $('#msg').html('Processing ....');
    });
  }

}




