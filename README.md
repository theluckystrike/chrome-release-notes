# Chrome Release Notes

In-app release notes for Chrome extensions with version diff display, feature highlights, what's new UI, and dismiss tracking for Manifest V3.

## Overview

Chrome Release Notes provides a lightweight TypeScript library for displaying "What's New" modals in Chrome extensions. It handles version tracking using Chrome storage, automatically shows release notes when users upgrade, and tracks which versions have been dismissed.

## Installation

```bash
npm install chrome-release-notes
```

## API Reference

### ReleaseNotes.show

Displays the release notes modal immediately.

```typescript
ReleaseNotes.show(containerId: string, version: string, notes: Array<{ emoji: string; title: string; desc: string }>): void
```

Parameters:
- `containerId` - HTML element ID where the modal will be rendered
- `version` - Current version string (e.g., "1.2.0")
- `notes` - Array of note objects containing emoji, title, and description

Example:

```typescript
import { ReleaseNotes } from 'chrome-release-notes';

const notes = [
  { emoji: '🚀', title: 'New Feature', desc: 'Added dark mode support' },
  { emoji: '⚡', title: 'Performance', desc: 'Improved loading speed by 40%' },
  { emoji: '🔧', title: 'Bug Fix', desc: 'Fixed extension icon display' }
];

ReleaseNotes.show('app-root', '1.2.0', notes);
```

### ReleaseNotes.hasSeen

Checks whether the release notes for a specific version have been viewed.

```typescript
ReleaseNotes.hasSeen(version: string): Promise<boolean>
```

Returns `true` if the user has already seen the notes for the given version.

### ReleaseNotes.markSeen

Manually marks release notes as seen for a specific version.

```typescript
ReleaseNotes.markSeen(version: string): Promise<void>
```

### ReleaseNotes.autoShow

Conditionally shows release notes only if the version is new.

```typescript
ReleaseNotes.autoShow(containerId: string, version: string, notes: Array<{ emoji: string; title: string; desc: string }>): Promise<void>
```

This is the recommended method for most use cases. It checks if the user has already seen the notes and only displays the modal for new versions.

Example:

```typescript
import { ReleaseNotes } from 'chrome-release-notes';

const notes = [
  { emoji: '✨', title: 'New Dashboard', desc: 'Added analytics dashboard' }
];

// Call on extension startup
await ReleaseNotes.autoShow('app-root', '1.3.0', notes);
```

## Requirements

- Chrome extensions using Manifest V3
- TypeScript 5.3.3 or higher
- @types/chrome for TypeScript support

## Build

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` directory.

## License

MIT License

## About

Chrome Release Notes is maintained by theluckystrike. This project is part of the zovo.one ecosystem.

GitHub: https://github.com/theluckystrike/chrome-release-notes
