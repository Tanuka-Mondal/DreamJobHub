import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'src/app/services/job.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  editJobFormRef: FormGroup;
  jobId!: number;

  constructor(
    private jobService: JobService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editJobFormRef = this.formBuilder.group({
      id: [null, Validators.required],
      companyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      jobDescription: ['', Validators.required],
      jobLocation: ['', Validators.required],
      category: ['', Validators.required],
      salary: [null, Validators.required],
      isBlocked: [false]
    });
  }

  ngOnInit(): void {
    this.jobId = +this.route.snapshot.params['id']; // Use '+' to convert string to number
    if (this.jobId) {
      this.jobService.getJobById(this.jobId).subscribe(jobDetails => {
        this.editJobFormRef.patchValue(jobDetails);
      });
    }
  }

  updateJob() {
    if (this.editJobFormRef.valid) {
      this.jobService.updateJob(this.editJobFormRef.value).subscribe({
        next: (res) => {
          Swal.fire('Success', 'Job updated successfully!', 'success');
          this.router.navigate(['/display-jobs']);
        },
        error: (e) => {
          Swal.fire('Error', 'Failed to update job. Please try again later.', 'error');
          console.error(e);
        }
      });
    }
  }
}
