# fx-tests-fail

Test fixture for an Autoheal vulnerability-remediation agent. Nothing here is production code.

- **Setup:** `lodash` is pinned to `4.17.20` (CVE-2021-23337, CVE-2020-28500; fixed in `4.17.21`).
- **Upgrade breaks a test:** `test/index.test.js` asserts the installed lodash version equals `4.17.20`. This deliberately brittle test fails after any upgrade, which simulates a repo whose tests break on a dependency bump.
- **Expected agent outcome:** a **draft** pull request with the failing test and the diagnosis attached, not a ready-to-merge PR.
