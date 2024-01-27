import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/model/Club';
import { Event } from 'src/app/model/Event';
import { ClubserviceService } from 'src/app/services/clubservice.service';
import { ServiceeventService } from 'src/app/services/serviceevent.service';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  event!: Event;  
  clubs: Club[] = []; // Initialisez le tableau ici
  constructor ( private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventservice: ServiceeventService,
    private clubserv: ClubserviceService,){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
      console.log(params['id']);
      if (params['id']) {
        this.event = this.eventservice.getEventById(params['id']) as any;
        for (let i in this.event.clubs) {
          this.clubs.push (this.clubserv.getClubById(this.event.clubs[i]) as any);
          console.log("dddd")
          console.log(this.clubs);
        }
        /*
          this.cvService.getPersonneById(params['id']).subscribe(
            (response) => {
              this.personne = response;
            },
          );*/
        console.log(this.eventservice.getEventById(1));
      } else {
        console.error("ID is undefined");
      }
      }
    );
  }
  participer() {
    // Logique pour participer à l'événement
    console.log('Participating...');
  }
}
