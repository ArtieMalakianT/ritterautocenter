# Architecture rules
- Keep advertising consent evidence in the visitor's browser, including notice version, visitor reference and choice history; this static site needs no customer-data backend for browser-only tracking.
- Centralize Meta loading, PageView and WhatsApp click reporting in one root consent controller so navigation and privacy controls share the same gate.
- Send Meta WhatsAppClick through a validated TanStack server function with a runtime-only credential and the browser's event ID for deduplication; require fresh explicit advertising acceptance and never queue events.