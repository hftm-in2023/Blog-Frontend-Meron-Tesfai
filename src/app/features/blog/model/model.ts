export interface Blog {
  id: number;
  title: string;
  contentPreview: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  comments: number;
  likedByMe: boolean;
  createdByMe: boolean;
  headerImageUrl: string;
}
