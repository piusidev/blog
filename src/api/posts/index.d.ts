export interface IGistData {
  id: string;
  public: Boolean;
  created_at: string;
  description: string;
  files: IFiles;
  title: string;
  categories: Array<string>
}

interface IFile {
  filename: string;
  language: string;
  raw_url: string;
}

interface IFiles {
  [key: string]: IFile
}
