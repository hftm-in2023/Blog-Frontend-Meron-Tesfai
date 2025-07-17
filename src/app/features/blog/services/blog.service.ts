import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Blog } from '../model/model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = environment.apiUrl;

  http = inject(HttpClient);

  getBlogs(): Observable<Blog[]> {
    return this.http
      .get<{ data: Blog[] }>(this.apiUrl)
      .pipe(map((response) => response.data));
  }
}
