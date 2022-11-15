export default interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  imagePath: string | File;
  numOfCopies: number;
}