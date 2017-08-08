import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
    selector: 'redirect',
    template: ``
})
export class RedirectComponent {

    guid: string;

    constructor(private activateRoute: ActivatedRoute, private http: Http) {

        this.guid = activateRoute.snapshot.params['guid'];

        this.GetFullLink(this.guid);
    }

    GetFullLink(userLink: string): void {
        let params: URLSearchParams = new URLSearchParams();
        params.set('guid', this.guid);

        this.http.get('/link/getfulllink', {
            search: params
        }).subscribe((result) => { window.location.assign(result.text()); })

    }
}
