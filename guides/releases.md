# Releases and recovery

Assign a release owner and record the exact artifact, configuration changes, and
expected result. Run the release checklist before deploying. For stateful changes,
verify a backup can be restored into an isolated environment and check that the
previous application version can read the new data, or document an alternate
recovery plan.

After deployment, exercise a representative user journey and inspect error signals.
Set an observation window appropriate to the application's traffic. If the agreed
failure threshold is crossed, follow the documented rollback or recovery process.
Do not call a release complete only because the deployment command returned zero.
