import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
test('CLI does not silently ignore missing option values or extra templates', () => {
  for (const args of [
    ['bug-report', '--title', 'Example', '--out'],
    ['bug-report', '--title', 'Example', '--date'],
    ['bug-report', '--title'],
    ['bug-report', 'extra', '--title', 'Example'],
    ['--list', 'extra'],
    ['bug-report', '--title', 'Example', '--out', ''],
  ]) {
    const r = spawnSync(process.execPath, ['src/cli.mjs', ...args], { encoding: 'utf8' });
    assert.equal(r.status, 2, JSON.stringify(args));
    assert.equal(r.stdout, '');
  }
});
test('a documented title and date render exactly in CLI output', () => {
  const r = spawnSync(
    process.execPath,
    [
      'src/cli.mjs',
      'architecture-decision',
      '--title',
      'Choose a job queue',
      '--date',
      '2026-11-13',
    ],
    { encoding: 'utf8' },
  );
  assert.equal(r.status, 0);
  assert.match(r.stdout, /# Architecture decision: Choose a job queue/);
  assert.match(r.stdout, /Date: 2026-11-13/);
});
