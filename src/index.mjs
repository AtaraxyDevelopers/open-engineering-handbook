import fs from 'node:fs/promises';
import path from 'node:path';
const directory = new URL('../templates/', import.meta.url);
export async function listTemplates() {
  return (await fs.readdir(directory))
    .filter((n) => n.endsWith('.md'))
    .map((n) => n.slice(0, -3))
    .sort();
}
export async function renderTemplate(
  name,
  { title, date = new Date().toISOString().slice(0, 10) } = {},
) {
  if (!(await listTemplates()).includes(name)) throw new Error('Unknown template. Use --list.');
  if (typeof title !== 'string' || !title.trim() || title.length > 200 || /[\r\n]/.test(title))
    throw new Error('Title must be one line, 1..200 characters.');
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !Number.isFinite(Date.parse(date)) ||
    new Date(date).toISOString().slice(0, 10) !== date
  )
    throw new Error('Date must be a valid YYYY-MM-DD date.');
  const template = await fs.readFile(new URL(name + '.md', directory), 'utf8');
  return template.replace(/\{\{(title|date)\}\}/g, (_, key) => (key === 'title' ? title : date));
}
export async function writeTemplate(name, output, options) {
  const body = await renderTemplate(name, options);
  await fs.writeFile(path.resolve(output), body, { encoding: 'utf8', flag: 'wx' });
  return body;
}
