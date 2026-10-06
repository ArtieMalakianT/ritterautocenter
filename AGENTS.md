# Architecture rules
- Keep advertising consent evidence in the visitor's browser, including notice version, visitor reference and choice history; this static site needs no customer-data backend for browser-only tracking.
- Centralize Meta loading and PageView reporting in one consent controller mounted by the root layout, so navigation and privacy controls share the same gate.