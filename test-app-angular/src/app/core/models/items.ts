export class Item {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  editedAt: Date;
  constructor(values: any) {
    Object.assign(this, values);
  }
}
