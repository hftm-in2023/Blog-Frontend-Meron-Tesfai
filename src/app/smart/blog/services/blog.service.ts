import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BlogData } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = environment.apiUrl;

  private datasource = new BehaviorSubject<BlogData[]>([]);

  blogs$ = this.datasource.asObservable();

  updateData(data: BlogData[]) {
    this.datasource.next(data);
  }

  http = inject(HttpClient);

  getBlogs(): Observable<BlogData[]> {
    return this.http
      .get<{ data: BlogData[] }>(this.apiUrl)
      .pipe(map((response) => response.data));
  }
}
