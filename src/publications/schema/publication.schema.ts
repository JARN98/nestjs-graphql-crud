import { Schema } from 'mongoose';

const PublicationSchema = new Schema({
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true },
});

PublicationSchema.index({ title: 1 }, { unique: true });

export default PublicationSchema;