import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  blogId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.blogId = this.route.snapshot.paramMap.get('id');
  }
}
