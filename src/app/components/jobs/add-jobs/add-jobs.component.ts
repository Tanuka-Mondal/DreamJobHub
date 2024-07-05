import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';
import { UserNavigateService } from 'src/app/services/user-navigate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent {
  job: Job;
  addJobFormRef: FormGroup;
  
  constructor(private jobService: JobService,
    private userNavigateService: UserNavigateService,
    private formBuilder: FormBuilder
  ){
    this.job = new Job();
    this.addJobFormRef = formBuilder.group({
      jobTitle: ["", Validators.compose([Validators.required])],
      companyName: ["", Validators.compose([Validators.required])],
      jobDescription: ["", Validators.compose([Validators.required])],
      jobLocation: ["", Validators.compose([Validators.required])],
      category: ["", Validators.compose([Validators.required])],
      salary: ["", Validators.compose([Validators.required])]
    });
  }

  addJob(addJobFormRef: FormGroup) {

    this.job = addJobFormRef.value;
    console.log(this.job.jobTitle);
    
    this.job.isBlocked = false;
 
    this.jobService.addJob(this.job).subscribe({
      next : (res) => {
        Swal.fire({
          title: "Add Job!",
          text: `${this.job.jobTitle} Added Successfully!!`,
          icon: "success"
        });
        // console.log(res);      
        this.userNavigateService.gotoJobs(); 
      },
      error : (e) => console.log(e),
      complete : () => console.info('complete')      
    });
  }
}

