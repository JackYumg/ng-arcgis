import {Component, OnInit} from '@angular/core';
import {TestService} from '../service/test.service';
import {SearchService} from "./search.service";
// import {SearchService} from "./search.service";
// import {PostData} from "./post-data";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  filterSimpleOption: any = {
    searchWord: "",
    needPolygon: "true",
    needPre: "false",
    needSubInfo: "true",
    searchType: "1",
    needAll: "false",
  };

  constructor(
    private  testService: TestService,
    private  searchService: SearchService
  ) {
  }

  ngOnInit(): void {
  }

  search() {
    const obs = this.searchService.getAdministrative(this.filterSimpleOption);
    obs.subscribe((result) => {
      console.log(result);
    });
    this.testService.addLayer();
    // this.testService.addLine();
  }
}
