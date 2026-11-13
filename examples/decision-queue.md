# Architecture decision: Keep the first job queue in the database

This is a fictional worked example, not a statement about Ataraxy Developers' infrastructure.

Date: 2026-11-13
Status: Accepted for this fictional project

## Context

A small reporting app produces 200 jobs per day. Its two maintainers already
operate a transactional database and can tolerate one-minute queue latency.

## Options

A database-backed queue reduces additional operational work but needs locking and
an index for pending jobs. A dedicated broker provides richer delivery mechanisms
but adds a service the team must deploy, monitor, and recover.

## Decision

Use a database-backed queue with transactional job claiming, bounded retries, and
an idempotency key for each report. Record a failed terminal state for inspection.

## Consequences and review trigger

Monitor queue age and database load. Revisit if the 95th-percentile queue age exceeds
the agreed target for a week or queue traffic materially affects user requests.
The job payload format remains independent of the queue implementation.
