import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlogData } from '../smart/blog/model/model';

export interface getBlogs {
  blogs: BlogData[];
  loading: boolean;
  error: string | null;
}

export const BlogListState: getBlogs = {
  blogs: [],
  loading: false,
  error: null,
};

@Injectable({
  providedIn: 'root',
})
export class BlogListStatServiceService {
  private state$ = new BehaviorSubject<getBlogs>(BlogListState);

  state = signal(this.state$.getValue());

  constructor() {
    this.state$.subscribe((s) => this.state.set(s));
  }

  get snapshot(): getBlogs {
    return this.state();
  }

  setLoading(loading: boolean) {
    this.patch({ loading });
  }

  setItems(blogs: BlogData[]) {
    this.patch({ blogs, loading: false, error: null });
  }

  setError(error: string) {
    this.patch({ error, loading: false });
  }

  private patch(partial: Partial<getBlogs>) {
    this.state$.next({ ...this.snapshot, ...partial });
  }
}
