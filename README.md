<p><a href="https://ataraxydevelopers.com"><img src="docs/brand/ataraxy-developers-logo.png" alt="Ataraxy Developers — Turning Digital Visions Into Reality" width="520"></a></p>

# Open Engineering Handbook

[![CI](https://github.com/AtaraxyDevelopers/open-engineering-handbook/actions/workflows/ci.yml/badge.svg)](https://github.com/AtaraxyDevelopers/open-engineering-handbook/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Adaptable engineering practices, fictional worked examples, and a safe template generator.

An open-source project from [Ataraxy Developers](https://github.com/AtaraxyDevelopers).

## Quick start

Install [Node.js](https://nodejs.org/en/download) 22 or 24 (npm is included). Check
`node --version` and `npm --version` in your terminal. The commands below run from
this repository's root folder, the one containing `package.json`.

**With Git:**

```sh
git clone https://github.com/AtaraxyDevelopers/open-engineering-handbook.git
cd open-engineering-handbook
npm ci
npm test
```

**Without Git:** choose **Code → Download ZIP** on GitHub, extract the archive,
and open a terminal in the extracted `open-engineering-handbook-main` folder (release archives may
include the version in the folder name). Run `npm ci` and `npm test` there.
Use the **source-code ZIP**, not an npm `.tgz` package, to follow this developer walkthrough.
The install step may need internet access; the examples run locally afterward.

On Windows PowerShell, if `npm.ps1` is blocked by execution policy, use `npm.cmd`
in place of `npm` in these commands. No execution-policy change is required.

```sh
npm run demo
node src/cli.mjs architecture-decision --title "Choose a job queue"
node src/cli.mjs bug-report --title "Duplicate notification" --out bug-report.md
```

The generator prints to stdout by default. With --out it creates a **new** file and
refuses to overwrite an existing one. After the first run, open `bug-report.md` in
your editor. For another document, choose a different output filename. The destination
directory must already exist. Options such as `--out` and `--date` require a value.
Use --date YYYY-MM-DD for a reproducible date; otherwise the current UTC date is used.

## Read and adapt

- [Code review](guides/code-review.md)
- [Testing](guides/testing.md)
- [Releases and recovery](guides/releases.md)
- [Incidents](guides/incidents.md)
- [Onboarding](guides/onboarding.md)

Five templates cover bug reports, architecture decisions, incident reviews,
release checklists, and onboarding. Worked examples include a
[queue decision](examples/decision-queue.md) and an
[incident review](examples/incident-review.md).

## Scope and limitations

These are adaptable recommendations and fictional examples, not claims about
company procedures, certifications, staffing, or historical incidents. Choose owners
and policies that fit your own team before adopting them. The existing
[Engineering Playbook](https://github.com/AtaraxyDevelopers/engineering-playbook)
provides related project briefs; this repository adds practice guides and executable
template generation. No external services or accounts are required.

## Validation

Tests render every template, verify date and title validation, reject unknown paths,
and confirm an existing document cannot be overwritten.

## Expected first run

The demo lists five templates. The architecture command prints a document. The `--out` command creates `bug-report.md`; a second attempt using that filename fails without overwriting it.

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md), [community expectations](CODE_OF_CONDUCT.md),
and [SECURITY.md](SECURITY.md). Open an issue with a minimal synthetic reproduction.
This project is maintained on a best-effort basis. No paid service or account is
required to run the local examples.

## License

[MIT](LICENSE). You may use, adapt, and redistribute this project under its license.
