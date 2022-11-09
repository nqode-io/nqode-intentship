export class Book implements BookInterface {
  public id: number;
  public title: string;
  public author: string;
  public description: string;
  public imagePath: string;
  public numOfCopies: number;

  constructor(bookCfg: BookInterface) {
    this.id = bookCfg.id;
    this.title = bookCfg.title;
    this.author = bookCfg.author;
    this.description = bookCfg.description;
    this.imagePath = bookCfg.imagePath;
    this.numOfCopies = bookCfg.numOfCopies;
  }
}

interface BookInterface {
  id: number;
  title: string;
  author: string;
  description: string;
  imagePath: string;
  numOfCopies: number;
}
