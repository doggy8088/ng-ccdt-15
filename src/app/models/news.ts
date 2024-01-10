export interface News {
  news: NewsElement[];
}

export interface NewsElement {
  title: string;
  description: string;
  category: string;
  author: string;
  date: Date;
}
