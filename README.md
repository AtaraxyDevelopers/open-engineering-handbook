# Open Engineering Handbook

[![CI](https://github.com/AtaraxyDevelopers/open-engineering-handbook/actions/workflows/ci.yml/badge.svg)](https://github.com/AtaraxyDevelopers/open-engineering-handbook/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Adaptable engineering practices, fictional worked examples, and a safe template generator.

An open-source project from [Ataraxy Developers](https://github.com/AtaraxyDevelopers).

## Quick start

Requires Node.js 22 or 24 and npm. Git is optional if you download the source ZIP.

```sh
git clone https://github.com/AtaraxyDevelopers/open-engineering-handbook.git
cd open-engineering-handbook
npm ci
npm test
```

```sh
npm run demo
node src/cli.mjs architecture-decision --title "Choose a job queue"
node src/cli.mjs bug-report --title "Duplicate notification" --out bug-report.md
```

The generator prints to stdout by default. With --out it creates a **new** file and
refuses to overwrite an existing one. The destination directory must already exist.
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

## Contributing and support

See [CONTRIBUTING.md](CONTRIBUTING.md), [community expectations](CODE_OF_CONDUCT.md),
and [SECURITY.md](SECURITY.md). Open an issue with a minimal synthetic reproduction.
This project is maintained on a best-effort basis. No paid service or account is
required to run the local examples.

## License

[MIT](LICENSE). You may use, adapt, and redistribute this project under its license.
