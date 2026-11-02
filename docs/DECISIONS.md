# Decisions

- Audio seed: generated 3s sine WAVs (no copyrighted content).
- Refresh tokens: rotating, reuse detection (Phase 2 wiring).
- MinIO bucket auto-created via init container.
- Offline storage uses Web Crypto AES-GCM with key in localStorage (demo; production should use IndexedDB + non-extractable key).
- SSRF protection: https-only allowlist, private IP block, timeout, size cap.
