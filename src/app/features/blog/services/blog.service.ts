import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Blog } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl =
    'https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io/entries';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http
      .get<{ data: Blog[] }>(this.apiUrl)
      .pipe(map((response) => response.data));
  }
}
