# Repositree - Git Repo File Tree Generator

A sleek, modern web application that generates a beautiful file tree structure from any public GitHub repository. Perfect for documenting your project's structure in README files.

![File Tree Generator](https://github.com/stackblitz/file-tree-generator/raw/main/preview.png)

## Features

- 🌳 Generate beautiful file trees from any public GitHub repository
- 🎨 Clean, minimal interface with system-based dark/light theme
- 📋 One-click copy functionality with visual feedback
- ⚡ Built with React and Vite for optimal performance

## Usage

1. Visit [Repositree](https://repositree.vercel.app)
2. Enter a public GitHub repository URL (e.g., `https://github.com/abishekvenkat/repositree`)
3. Click "Generate Tree" or press Enter
4. Copy the generated tree structure with one click

Example output:
```
src/
├── components/
│   ├── ErrorMessage.tsx
│   ├── FileTree.tsx
│   ├── Header.tsx
│   ├── TreeDisplay.tsx
│   └── UrlInput.tsx
├── types/
│   └── index.ts
├── utils/
│   ├── github.ts
│   └── treeFormatter.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Development

### Setup

1. Clone the repository:
```bash
git clone https://github.com/stackblitz/file-tree-generator.git
cd file-tree-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:7456](http://localhost:7456) in your browser

## License

MIT License - feel free to use this in your own projects!

- Inspired by the design of [OpenAuth](https://openauth.js.org/)