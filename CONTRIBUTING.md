# Contributing to Chrome Release Notes

Thank you for your interest in contributing. This guide covers how to report issues, develop locally, follow code style, and run tests.

## REPORTING ISSUES

When reporting bugs or requesting features, please use the GitHub issue templates. Include the following information:

- A clear description of the issue or feature request
- Steps to reproduce (for bugs)
- Extension manifest version (MV3)
- Chrome version and OS
- Any relevant code snippets or error messages

Before submitting, search existing issues to avoid duplicates.

## DEVELOPMENT WORKFLOW

1. Fork the repository
2. Clone your fork locally

```bash
git clone https://github.com/theluckystrike/chrome-release-notes.git
cd chrome-release-notes
```

3. Install dependencies

```bash
npm install
```

4. Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

5. Make your changes and commit with clear messages
6. Push to your fork and submit a pull request

## CODE STYLE

This project follows these conventions:

- TypeScript with strict mode enabled
- Use 4 spaces for indentation
- Maximum line length of 100 characters
- Use semicolons
- Prefer `const` over `let` when appropriate
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

Run the build to check for TypeScript errors:

```bash
npm run build
```

## TESTING

Before submitting changes, verify the build completes without errors:

```bash
npm run build
```

Ensure no TypeScript compilation errors exist. The project uses strict TypeScript checking.

## LICENSE

By contributing to chrome-release-notes, you agree that your contributions will be licensed under the MIT License.
