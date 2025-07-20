import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Blog } from '../model/model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = environment.apiUrl;

  private datasource = new BehaviorSubject<Blog[]>([]);

  blogs$ = this.datasource.asObservable();

  updateData(data: Blog[]) {
    this.datasource.next(data);
  }

  http = inject(HttpClient);

  getBlogs(): Observable<Blog[]> {
    return this.http
      .get<{ data: Blog[] }>(this.apiUrl)
      .pipe(map((response) => response.data));
  }
}
