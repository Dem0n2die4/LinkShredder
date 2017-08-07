import { Component } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
    selector: 'data-view',
    template: `<div>
                    <input [(ngModel)]="userLink" placeholder="Enter your link here..."><button class="btn btn-default" (click)="GetShortLink(userLink)">Shred it!</button>
                </div>
                <div>
                    <h1>{{shortLink}}</h1>
                </div>`
})
export class ShredderView {
    constructor(private http: Http) { }

    public shortLink = '';

    GetShortLink(userLink: string): void {

        // Parameters obj-
        let params: URLSearchParams = new URLSearchParams();
        params.set('link', userLink);

        //Http request-
        this.http.get('/home/getshortlink', {
            search: params
        }).subscribe((result) => { this.shortLink = result.text(); }
            //(response) => this.onGetForecastResult(response.json()),
            //(error) => this.onGetForecastError(error.json()),
            //() => this.onGetForecastComplete()
            );
        //send request to server side! If it isn't exist when create otherwise just return

        //this.shortLink = "this is a SHORT link!";
    }
}