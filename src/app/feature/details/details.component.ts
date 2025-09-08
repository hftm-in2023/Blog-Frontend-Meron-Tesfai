import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { map } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DatePipe } from '@angular/common';
import { BlogData } from '../blog/model/model';
import { BlogService } from '../../core/blog/blog-backend';

@Component({
  selector: 'app-details',
  imports: [MatListModule, MatDividerModule, DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {
  id = input<string>();

  blog?: BlogData;

  blogService = inject(BlogService);

  ngOnInit(): void {
    this.blogService.blogs$
      .pipe(map((blogs) => blogs.find((blog) => blog.id === Number(this.id()))))
      .subscribe((blog) => {
        this.blog = blog;
      });
  }
}
