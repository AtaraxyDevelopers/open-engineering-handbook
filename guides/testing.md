# Testing

Start with the public contract: given an input and state, what should a caller
observe? Test a successful path, a boundary, and a relevant failure. Add integration
tests for database transactions, HTTP responses, filesystem behavior, or queues
when those boundaries are the source of risk.

Prefer deterministic clocks and synthetic data. Avoid sleeps when a completion
signal exists. A mock should isolate an external dependency, not restate the
implementation. A regression test should fail for the original defect and pass for
the fix. Document which browsers and operating systems are covered.

Keep examples runnable from a clean checkout. Treat outdated setup instructions as
a bug because they stop contributors before they reach the code.
