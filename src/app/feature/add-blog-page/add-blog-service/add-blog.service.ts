import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import z from 'zod';
import { environment } from '../../../../environments/environment';

const CreatedBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type CreatedBlog = z.infer<typeof CreatedBlogSchema>;

@Injectable({
  providedIn: 'root',
})
export class AddBlogService {
  private httpClient = inject(HttpClient);

  async addBlog(title: string, content: string): Promise<unknown> {
    const blog: CreatedBlog = { title, content };

    // Validierung
    CreatedBlogSchema.parse(blog);

    return lastValueFrom(
      this.httpClient.post(`${environment.apiUrl}/entries`, blog),
    );
  }
}
