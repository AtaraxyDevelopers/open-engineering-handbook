#!/usr/bin/env node
import { listTemplates, renderTemplate, writeTemplate } from './index.mjs';
try {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === '--list') {
    console.log((await listTemplates()).join('\n'));
  } else if (!args.length || args[0] === '--help') {
    console.log(
      'node src/cli.mjs TEMPLATE --title "Decision title" [--date YYYY-MM-DD] [--out new-file.md]\nOmit --out to print to stdout. Existing files are never overwritten.',
    );
  } else {
    const name = args.shift();
    let title, date, output;
    for (let i = 0; i < args.length; i++) {
      if (args[i] === '--title') title = args[++i];
      else if (args[i] === '--date') date = args[++i];
      else if (args[i] === '--out') output = args[++i];
      else throw new Error('Unknown option');
    }
    if (output) await writeTemplate(name, output, { title, date });
    else process.stdout.write(await renderTemplate(name, { title, date }));
  }
} catch (e) {
  console.error(e.code === 'EEXIST' ? 'Output exists; choose a new filename.' : e.message);
  process.exitCode = 2;
}
