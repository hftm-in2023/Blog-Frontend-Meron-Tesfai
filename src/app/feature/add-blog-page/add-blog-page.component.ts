import { Component, DestroyRef, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AddBlogService } from './add-blog-service/add-blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-blog-page',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './add-blog-page.component.html',
  styleUrl: './add-blog-page.component.scss',
})
export class AddBlogPageComponent {
  private router = inject(Router);
  blogService = inject(AddBlogService);
  submitButtonDisabled = signal<boolean>(false);
  destroyRef = inject(DestroyRef);
  constructor() {
    this.addBlogForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        console.log('Form Value changed:', value);
      });

    this.addBlogForm.statusChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((status) => {
        console.log('Form status changed:', status);
      });
  }

  addBlogForm = new FormGroup<{
    title: FormControl<string>;
    content: FormControl<string>;
  }>({
    title: new FormControl<string>('an exciting title', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[A-Z].*'),
        this.customValidator,
      ],
      asyncValidators: [this.costomAsyncValidator], // todo falls noch Zeit
    }),
    content: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(50)],
      asyncValidators: [], // todo falls noch Zeit
    }),
  });

  async onSubmit() {
    if (this.addBlogForm.valid) {
      this.submitButtonDisabled.set(true);
      try {
        const blogData = this.addBlogForm.value;
        console.log('Blog submitted', blogData);

        await this.blogService.addBlog(blogData.title!, blogData.content!);

        this.router.navigate(['/blog']);
      } catch (error) {
        console.error('Error submitting blog:', error);
        this.submitButtonDisabled.set(false);
      }
    } else {
      console.log('Form is invalid');
    }
  }

  customValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value && value.toLowerCase() === 'test') {
      return { custom: true };
    }
    return null;
  }

  costomAsyncValidator(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'Test Aysnc') {
          resolve({ customAysnc: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
