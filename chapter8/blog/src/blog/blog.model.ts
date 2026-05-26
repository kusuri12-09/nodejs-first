export interface PostDto {
  title: string;
  content: string;
  name: string;
  createDt: Date;
  updateDt?: Date;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  name: string;
  createDt: Date;
  updateDt?: Date;
}
