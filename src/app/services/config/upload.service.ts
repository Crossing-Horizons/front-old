import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from '../../../environments/environment';
import { RequestService } from '../config/request.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  env
  constructor(private requestService: RequestService) { }
  const = this.requestService.request('GET', `${environment.endpoint}/authentication/rest/getenv`, {}, {}, false).then( res=>{
    this.env = res
  });

  uploadFile(file, folder) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: this.env.accessKeyId,
              secretAccessKey: this.env.secretAccessKey,
              region: this.env.region

          }
      );
      const params = {
          Bucket: 'crossing-horizons-images',
          Key: folder + "/" + file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
//for upload progress   
/*bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });*/
}
}
