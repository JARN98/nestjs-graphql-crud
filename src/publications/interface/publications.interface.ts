import { Document } from 'mongoose';

export interface Publications extends Document {
  readonly title: String;
  readonly content: String;
}