# chrome-release-notes — In-App "What's New"
> **Built by [Zovo](https://zovo.one)** | `npm i chrome-release-notes`

Styled What's New modal, version tracking, auto-show on updates, and dismiss persistence.

```typescript
import { ReleaseNotes } from 'chrome-release-notes';
await ReleaseNotes.autoShow('container', '2.0.0', [
  { emoji: '✨', title: 'Dark Mode', desc: 'New dark theme for the popup.' },
  { emoji: '🚀', title: 'Performance', desc: '3x faster startup time.' },
]);
```
MIT License
