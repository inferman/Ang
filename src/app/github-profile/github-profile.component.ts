import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const snapId = this.route.snapshot.paramMap.get('id');
    console.log(snapId);

    /*this.route.paramMap
      .subscribe(params => {
        const id = +params.get('id');
        console.log(id, params);
      });*/
  }

}
