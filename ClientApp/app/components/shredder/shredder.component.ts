import { Component } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
    selector: 'shredder',
    template: `<div style="margin-top: 30%; text-align: -webkit-center;">
                    <input [(ngModel)]="userLink" placeholder="Enter your link here..."><button class="btn btn-default" (click)="GetShortLink(userLink)">Shred it!</button>
                </div>
                <div style="text-align: -webkit-center;">
                    <h1>{{shortLink}}</h1>
                </div>`
})
export class ShredderComponent {
    constructor(private http: Http) { }

    public shortLink = '';

    GetShortLink(userLink: string): void {

        userLink

        let params: URLSearchParams = new URLSearchParams();
        params.set('link', userLink);

        this.http.get('/link/getshortlink', {
            search: params
        }).subscribe((result) => { this.shortLink = window.location.host + '/' + result.text(); }
            );
    }
}