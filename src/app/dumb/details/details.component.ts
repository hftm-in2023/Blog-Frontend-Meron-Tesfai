import { Component, inject, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DatePipe } from '@angular/common';
import { BlogService } from '../../smart/blog/services/blog.service';
import { BlogData } from '../../smart/blog/model/model';

@Component({
  selector: 'app-details',
  imports: [MatListModule, MatDividerModule, DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  @Input() id!: string;

  blog?: BlogData;

  blogService = inject(BlogService);

  ngOnInit(): void {
    this.blogService.blogs$
      .pipe(map((blogs) => blogs.find((blog) => blog.id === Number(this.id))))
      .subscribe((blog) => {
        this.blog = blog;
      });
  }
}
