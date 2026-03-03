# chrome-release-notes

Generate and display release notes in Chrome extensions.

## Installation

```bash
npm install chrome-release-notes
```

## Usage

```javascript
import { ReleaseNotes } from 'chrome-release-notes';

const notes = await ReleaseNotes.get();
ReleaseNotes.show(notes);
```

## License

MIT
