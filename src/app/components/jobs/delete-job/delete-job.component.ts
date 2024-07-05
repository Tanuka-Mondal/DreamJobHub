import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-job',
  template: `
    <button mat-button color="warn" (click)="confirmDelete()">DELETE</button>
  `,
  styles: []
})
export class DeleteJobComponent {
  @Input() jobId!: number;
  @Output() jobDeleted = new EventEmitter<void>();

  constructor(private jobService: JobService) {}

  confirmDelete(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.jobService.deleteJob(this.jobId).subscribe({
          next: (res) => {
            Swal.fire(
              'Deleted!',
              'The job has been deleted.',
              'success'
            );
            this.jobDeleted.emit(); // Notify the parent component
          },
          error: (e) => {
            Swal.fire(
              'Error!',
              'There was an error deleting the job. Please try again.',
              'error'
            );
            console.error(e);
          }
        });
      }
    });
  }
}
