import { Component } from '@angular/core';
import { Http } from '@angular/http';

export class LinkInfo {
    shortLink: string;
    creationDate: string;
    redirectsCount: string;
    originalLink: string;

    constructor(shortLink: string, creationDate: string, redirectsCount: string, originalLink: string) {
        this.originalLink = originalLink;
        this.shortLink = shortLink;
        this.creationDate = creationDate;
        this.redirectsCount = redirectsCount;
    }
}

@Component({
    selector: 'statistic-view',
    template: `<div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Full link</th>
                                <th>Short link</th>
                                <th>Creation date</th>
                                <th>Redirects count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ngFor="let item of items">
                                <td><a href="{{item.originalLink}}">{{item.originalLink}}</a></td>
                                <td>{{hostname}}/{{item.shortLink}}</td>
                                <td>{{item.creationDate}}</td>
                                <td>{{item.redirectsCount}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
})
export class StatisticComponent {
    items: LinkInfo[] = [];
    hostname: string = window.location.host;

    constructor(private http: Http) {
        this.GetLinkStatistic();
    }

    GetLinkStatistic(): void {
        this.http.get('/link/getlinksstatistics').subscribe(result => {
            var resultData = result.json();

            for (var i = 0; i < resultData.length; ++i) {

                this.items.push(new LinkInfo(resultData[i].shortLink, resultData[i].creationDate, resultData[i].redirectsCount, resultData[i].originalLink));
            }
        });
    }
}