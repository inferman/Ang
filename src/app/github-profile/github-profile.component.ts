import { Component, OnInit } from '@angular/core';
import {Router, ParamMap, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

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
