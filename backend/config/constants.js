import path from 'path';

export const UPLOADS_DIRECTORY = process.env.UPLOADS_DIRECTORY || path.join(process.cwd(), 'uploads');