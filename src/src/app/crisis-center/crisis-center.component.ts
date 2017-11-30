import { Component, OnInit } from '@angular/core';
//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { CrisisService } from '../service/crisis.service';

//import class
import { Crisis } from '../domain/crisis';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.css'],
  providers: [CrisisService]
})
export class CrisisCenterComponent implements OnInit {

  crisises: Crisis[];
  selectedCrisis: Crisis;

  constructor(
    private crisisService: CrisisService
  ) { }

  ngOnInit() {
    this.crisisService.getCrisises()
    .then(crisises => this.crisises = crisises);
  }

  addCrisis(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.crisisService.createCrisisByName(name)
      .then(crisis => {
        this.crisises.push(crisis);
        this.selectedCrisis = null;
      });
  }

  deleteCrisis(crisis: Crisis): void {
    this.crisisService
        .deleteCrisisById(crisis.id)
        .then(() => {
          this.crisises = this.crisises.filter(h => h !== crisis);
          if (this.selectedCrisis === crisis) { this.selectedCrisis = null; }
        });
  }

}
