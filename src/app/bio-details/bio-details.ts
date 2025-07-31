import { Component } from '@angular/core';
import { DeveloperService } from '../developer-service';
import { Developer } from '../developer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bio-details',
  imports: [],
  templateUrl: './bio-details.html',
  styleUrl: './bio-details.css'
})
export class BioDetails {
  dev!: Developer | undefined;

  constructor(private developerService: DeveloperService, private route: ActivatedRoute) {
    
  }

  getDeveloper():void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.dev = this.developerService.getDeveloperById(id);
  }
  
  ngOnInit(): void {
    this.getDeveloper();
  }

}
