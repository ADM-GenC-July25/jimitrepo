import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { CommonModule } from '@angular/common';
import { DeveloperService } from '../developer-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bio.html',
  styleUrl: './bio.css'
})
export class BioComponent implements OnInit {

  // constructor(private developerService: DeveloperService) {
  //   this.devs = this.developerService.getAllDevelopers();
  // }

  constructor(private developerService: DeveloperService) {
    this.developerService.getAllDevelopers().subscribe(
      response => this.devs = response);
  }

  ngOnInit(): void {
    //this.loadDeveloper();
  }

  //dev!: Developer;
  devs: Developer[] = [];

  loadDeveloper() {
    //this.devs = [new Developer('John', 'Doe', 'TypeScript', 2015), 
      //new Developer('Jane', 'Smith', 'JavaScript', 2018)];
  }

}
