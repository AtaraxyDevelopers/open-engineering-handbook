# Code review

Review the behavior and failure cases first. Read the problem statement, run the
reproduction, and check that the change actually addresses it. Evaluate inputs,
authorization, concurrent requests, cleanup, and migration or rollback effects.

Separate required fixes from suggestions. Explain the consequence of a defect and
suggest a concrete verification. Avoid style debates when a formatter can decide.
For a small change, use a short description and proportionate tests. For a broad
change, agree on a design before implementation. Reviewers share responsibility for
clarity; the author should not have to guess which comments block approval.

Example: "Two requests can both pass the existence check and create duplicates.
Please add a uniqueness constraint and a concurrent-request test" gives a concrete
reason and a way to demonstrate the fix.
