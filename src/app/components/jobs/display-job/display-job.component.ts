// display-job.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-display-job', // The CSS selector that represents this component
  templateUrl: './display-job.component.html', // The path to the HTML template file
  styleUrls: ['./display-job.component.css'] // The path to the CSS styles file
})
export class DisplayJobComponent implements OnInit {
  jobDetails?: Job;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService
  ) {}

  ngOnInit() {
    const jobId = this.route.snapshot.params['id'];
    if (jobId) {
      this.jobService.getJobById(jobId).subscribe(jobDetails => {
        this.jobDetails = jobDetails;
      });
    } else {
      // Handle the case where jobId is not provided
      console.error('Job ID is not provided');
      // Redirect back to the job list or show an error message
    }
  }
}
