# Mirai Noodle

Site web pour les distributeurs automatiques de nouilles instantanées Mirai Ramen (Montréal).

## Technologies

- **Framework** : [React](https://react.dev/) 18
- **Build** : [Vite](https://vitejs.dev/) 6
- **Langage** : TypeScript
- **Routing** : [React Router](https://reactrouter.com/) 7
- **Styles** : [Tailwind CSS](https://tailwindcss.com/) 4
- **UI** : [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/) (composants), [MUI](https://mui.com/) (Material UI)
- **Animations** : [Motion](https://motion.dev/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Formulaires** : [React Hook Form](https://react-hook-form.com/)
- **Graphiques** : [Recharts](https://recharts.org/)
- **Thème** : [next-themes](https://github.com/pacocoursey/next-themes)

## Prérequis

- Node.js 18+
- npm (ou pnpm)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

## Aperçu du build

```bash
npm run preview
```

## Structure du projet

```
src/
├── app/
│   ├── components/   # Composants réutilisables
│   ├── layouts/      # Mise en page (RootLayout)
│   ├── pages/        # Pages (Home, Products, About, Contact)
│   ├── routes.ts     # Configuration du routeur
│   └── App.tsx
├── styles/           # Feuilles de style globales
└── main.tsx          # Point d’entrée
```

## Licence

Projet privé.
