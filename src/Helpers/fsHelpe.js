// fsHelper.js
import { promises as fs } from 'fs';

export async function readFile(filePath) {
  try {
    const data = await fs.readdir(filePath);
    console.log('File contents:', data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}