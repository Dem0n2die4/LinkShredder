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
        alert(this.guid);

        this.GetFullLink(this.guid);
    }

    GetFullLink(userLink: string): void {
        alert("in GetFullLink");

        let params: URLSearchParams = new URLSearchParams();
        params.set('guid', this.guid);

        alert(params);

        this.http.get('/link/getfulllink', {
            search: params
        }).subscribe((result) => { alert("result"); alert(result); window.location.assign(result.text()); })

    }
}
