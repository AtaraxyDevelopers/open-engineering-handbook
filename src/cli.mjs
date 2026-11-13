#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { listTemplates, renderTemplate, writeTemplate } from './index.mjs';
try {
  const { values, positionals } = parseArgs({
    options: {
      list: { type: 'boolean' },
      help: { type: 'boolean' },
      title: { type: 'string' },
      date: { type: 'string' },
      out: { type: 'string' },
    },
    strict: true,
    allowPositionals: true,
  });
  if (values.list) {
    if (positionals.length || Object.keys(values).length !== 1)
      throw new Error('--list cannot be combined with a template or other options');
    console.log((await listTemplates()).join('\n'));
  } else if (values.help || process.argv.length === 2) {
    console.log(
      'node src/cli.mjs TEMPLATE --title "Decision title" [--date YYYY-MM-DD] [--out new-file.md]\nUse --list to list templates. Omit --out to print to stdout. Existing files are never overwritten.',
    );
  } else {
    if (positionals.length !== 1) throw new Error('Specify exactly one template. Use --list.');
    if (values.out !== undefined && !values.out.trim())
      throw new Error('--out requires a nonempty filename');
    const options = { title: values.title, date: values.date };
    if (values.out !== undefined) await writeTemplate(positionals[0], values.out, options);
    else process.stdout.write(await renderTemplate(positionals[0], options));
  }
} catch (error) {
  console.error(error.code === 'EEXIST' ? 'Output exists; choose a new filename.' : error.message);
  process.exitCode = 2;
}
