import {Component, OnInit} from '@angular/core';
import { SearchService } from './search.service';
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
    needPolygon: "false",
    needPre: "false",
    needSubInfo: "false",
    searchType: "1",
    needAll: "false",
  };

  constructor(
    private  searchService: SearchService
  ) {
  }

  ngOnInit(): void {
  }

  search() {
    const obs = this.searchService.getSimpleResult(this.filterSimpleOption);
    obs.subscribe((result) => {
      console.log(result);
    });
  }
}
