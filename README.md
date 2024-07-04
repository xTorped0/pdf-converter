To start he project u have to install all dependencies via

```bash
npm i
# or
yarn install
# or
pnpm install
```

After that, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:8081](http://localhost:8081) with your browser to see the result.
U`re able to change in in package.json

## TODO

I've struggled to write tests using Jest for react-pdf, but unfortunately, I encountered numerous issues, so I've decided to put it aside for better times. From what I found on the internet, it might be better to use Playwright instead of Jest.

### Project Structure

The project structure is standard for Next.js:

```
pdf-converter/
├── src/
│   ├── __tests__/
│   │   └── PdfViewer.test.tsx
│   ├── components/
│   │   └── pdf/
│   │       └── PfdViewer.tsx
│   ├── app/
│   │   └── (hooks)/
│   │       └── useConvertor.ts
│   │       └── useDialog.ts
│   │   └── saved/
│   │       └── index.tsx
│   │   └── Converter.tsx
├── jest.config.ts
├── jest.setup.ts
├── babel.config.js
├── package.json
├── tsconfig.json
└── ...
```

### Main Modules

**Saved PDFs Page (`pages/saved/index.tsx`):**
This page displays the list of saved PDFs. It uses components like `PdfViewer` to render PDFs and hooks such as `useSaved` to manage the state of saved documents.

**Converter Page (`pages/converter/index.tsx`):**
This page provides a text-to-PDF conversion tool. It includes a form to input text, a button to trigger the conversion, and uses hooks like `useConvertor` to handle the conversion logic and `useDialog` to manage save dialogs.

---
