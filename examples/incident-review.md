# Incident review: Fictional duplicate notification incident

This worked example is entirely fictional.

## Impact

In a synthetic staging test, 40 duplicate notifications were generated between
10:00 and 10:08 UTC. No real users received them.

## Timeline

| Time UTC | Observation or action                                          |
| -------- | -------------------------------------------------------------- |
| 10:00    | A worker restart interrupts acknowledgment after the send step |
| 10:02    | Retry delivers the same job again                              |
| 10:04    | Test monitor flags duplicate notification IDs                  |
| 10:08    | Worker paused; pending jobs preserved for inspection           |

## Contributing conditions

Delivery and acknowledgment were separate operations. The send adapter accepted
repeated job IDs, and existing tests covered retries only before the send step.

## Actions

| Action                                       | Owner                        | Verification                                           |
| -------------------------------------------- | ---------------------------- | ------------------------------------------------------ |
| Add durable idempotency at the send boundary | Assigned project engineer    | Concurrent and retry-after-send tests pass             |
| Add duplicate-ID alert                       | Assigned operations engineer | Synthetic duplicate triggers the staging alert         |
| Document replay procedure                    | Assigned maintainer          | Another engineer follows it without extra instructions |
