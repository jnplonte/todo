import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { ApiModel } from './../../models/api.model';
import { environment } from './../../../environments/environment';

const httpOptions: Object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class HelperService {
    constructor(private http: HttpClient) {

    }

    getData(apiEndpoint: any = null): Observable<ApiModel[]> {
        return this.http.get<any>(environment.api[apiEndpoint]).pipe(
            map(this.handleObservableSuccess),
            catchError(this.handleObservableError('getData', null))
        );
    }

    postData(apiEndpoint: any = null, data: Object = {}): Observable<ApiModel[]> {
        return this.http.post<any>(environment.api[apiEndpoint], this.prepareData(data), httpOptions).pipe(
            map(this.handleObservableSuccess),
            catchError(this.handleObservableError('postData', null))
        );
    }

    putData(apiEndpoint: any = null, id: number = null, data: Object = {}): Observable<ApiModel[]> {
        return this.http.put<any>(environment.api[apiEndpoint] + '/' + id, this.prepareData(data), httpOptions).pipe(
            map(this.handleObservableSuccess),
            catchError(this.handleObservableError('putData', null))
        );
    }

    deleteData(apiEndpoint: any = null, id: number = null): Observable<ApiModel[]> {
        return this.http.delete<any>(environment.api[apiEndpoint] + '/' + id).pipe(
            map(this.handleObservableSuccess),
            catchError(this.handleObservableError('deleteData', null))
        );
    }

    cleanData(data: any) {
        if (typeof(data) === 'object') {
            data.forEach((value, key) => {
                if (typeof(value) === 'object') {
                    this.cleanData(value);
                } else {
                    if (typeof(value.replace) !== 'undefined') {
                        data[key] = value.replace(/[^A-Za-z0-9 @._,-]/g, '').trim();
                    }
                }
            });
            return data;
        } else {
            if (typeof(data.replace) !== 'undefined') {
                return data.replace(/[^A-Za-z0-9 @._,-]/g, '').trim();
            } else {
                return data;
            }
        }
    }

    prepareData(srcjson: Object = {}) {
        let urljson: string = '';
        const keys: any = Object.keys(srcjson);

        for (let i = 0; i < keys.length; i++) {
            urljson += encodeURIComponent(keys[i]) + '=' + encodeURIComponent(srcjson[keys[i]]);
            if (i < (keys.length - 1 )) {
                urljson += '&' ;
            }
        }
        return urljson;
    }

    handleObservableError<T> (operation: string = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          return of(result as T);
        };
    }

    handleObservableSuccess<T> (result?: T) {
        if (typeof(result) !== 'undefined' && result['status'] === 'success' ) {
            return result;
        } else {
            return null;
        }
    }
}
