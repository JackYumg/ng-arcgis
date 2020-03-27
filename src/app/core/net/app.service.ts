import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {


  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: false
  };

  constructor(private http: HttpClient) {
  }

  // get请求
  getData(url, data): Observable<any> {
    return this.http.get(url + new HttpParams({
      fromObject: data
    }), this.options);
  }

  // post请求头部不携带cookies
  getSimpleHttp(url, data) {
    return this.http.get(url + new HttpParams({
      fromObject: data
    }));
  }

  // post请求头部不携带cookies
  postSimpleHttp(url, data) {
    return this.http.post(url + new HttpParams({
      fromObject: data
    }), {});
  }

  // post请求json
  postDataUrl(url, data): Observable<any> {
    return this.http.post(url + new HttpParams({
      fromObject: data
    }), {}, this.options);
  }


  // post body方式请求
  postDataByBody(url, data, bodyData): Observable<any> {
    return this.http.post(url + new HttpParams({
      fromObject: data
    }), bodyData, this.options);
  }

  // get请求文本内容
  getText(url) {
    return this.http.get(url, {responseType: 'text'});
  }

}
