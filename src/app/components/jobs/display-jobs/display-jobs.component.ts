import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-jobs',
  templateUrl: './display-jobs.component.html',
  styleUrls: ['./display-jobs.component.css']
})
export class DisplayJobsComponent implements OnInit {
  jobs?:Job[];
  userLoggedinStatus: boolean = false;
  userRole: string | null = null;
  constructor(private jobService:JobService,
    private router: Router,
    private loginService: LoginService
  )
  {
   
    
  }
  ngOnInit(): void {
    this.getAllJobs();
    this.loginService.isLoggedIn.subscribe(status => {
      this.userLoggedinStatus = status;
      if (status) {
        this.userRole = this.loginService.getUserRole();
      } else {
        this.userRole = null;
      }
    });
  }
  getAllJobs() {
    console.log('In getAll Jobs');
    
    this.jobService.getAllJobs().subscribe({
      next: (res) => {
        console.log(res);
        
        this.jobs=res;
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })
  }

  viewJobDetails(jobId?: number) {
    if (jobId == null) {
      // Handle the case where jobId is undefined
      console.error('Job ID is undefined');
      return;
    }
    this.jobService.getJobById(jobId).subscribe(jobDetails => {
      // Navigate to the display-job component with the job details
      this.router.navigate(['/display-job', jobId], { state: { jobDetails } });
    });
  }

  editJob(jobId: number): void {
    this.router.navigate(['/edit-job', jobId]);
  }

  // deleteJob(jobId: number): void {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.jobService.deleteJob(jobId).subscribe({
  //         next: (res) => {
  //           Swal.fire(
  //             'Deleted!',
  //             'The job has been deleted.',
  //             'success'
  //           );
  //           // Refresh the job list
  //           this.getAllJobs();
  //         },
  //         error: (e) => {
  //           Swal.fire(
  //             'Error!',
  //             'There was an error deleting the job. Please try again.',
  //             'error'
  //           );
  //           console.error(e);
  //         }
  //       });
  //     }
  //   });
  // }

  onJobDeleted(): void {
    this.getAllJobs(); // Refresh the job list
  }
}
