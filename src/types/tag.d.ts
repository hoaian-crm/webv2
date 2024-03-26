export type ResourceTag = {
  id: string | number;
  key: string;
  value: string;
  resource: string;
  resource_id: string;
  tag: Tag;
}

export type Tag = {
  key: string;
  color: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
  deleteAt?: string;
}
