export class Item {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  editedAt: Date;
  constructor(values: any) {
    Object.assign(this, values);
    if (values) {
      this.createdAt = values.createdAt ? new Date(values.createdAt) : new Date();
      this.editedAt = values.createdAt ? new Date() : null;
    }
  }
}
