import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { listTemplates, renderTemplate, writeTemplate } from '../src/index.mjs';
test('all five templates render supplied titles and dates', async () => {
  const names = await listTemplates();
  assert.equal(names.length, 5);
  for (const name of names) {
    const body = await renderTemplate(name, { title: 'Synthetic decision', date: '2026-11-13' });
    assert.match(body, /Synthetic decision/);
    assert.match(body, /2026-11-13/);
    assert.ok(!body.includes('{{'));
  }
});
test('generator refuses overwrite and invalid input', async (t) => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'handbook-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const file = path.join(dir, 'decision.md');
  await writeTemplate('architecture-decision', file, { title: 'Example' });
  await assert.rejects(writeTemplate('architecture-decision', file, { title: 'Replacement' }), {
    code: 'EEXIST',
  });
  assert.match(await fs.readFile(file, 'utf8'), /Example/);
  await assert.rejects(renderTemplate('../secret', { title: 'Example' }));
  await assert.rejects(renderTemplate('onboarding', { title: 'bad\nline' }));
  await assert.rejects(renderTemplate('onboarding', { title: 'Example', date: '2025-02-29' }));
});
