# Personal Blog Website

A modern and responsive personal blog and portfolio website built with React and Chakra UI, featuring multilingual support (English and Turkish).

![Website Screenshot](https://i.hizliresim.com/b8aamxt.png)

## Features

- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Multilingual Support**: Full support for English and Turkish
- **Dark Theme**: Modern retro-inspired dark theme with neon accents
- **About Page**: Showcasing personal information and skills
- **Blog Section**: Ready for content (coming soon)
- **Smooth Animations**: Page transitions and element animations

## Tech Stack

- **Frontend**:
  - React
  - TypeScript
  - Chakra UI for styling
  - Framer Motion for animations
  
- **Internationalization**:
  - i18next for translations
  - Language detection and switching

- **Deployment & DevOps**:
  - Docker & Docker Compose
  - Kubernetes
  - CI/CD pipeline
  - Git version control

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/nurullahgd/my-website.git
   cd my-website
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser

## Building for Production

To create a production build, run:
```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Project Structure

```
my-website/
├── public/           # Public assets
├── src/
│   ├── components/   # Reusable components
│   ├── i18n/         # Internationalization files
│   │   └── locales/  # Language translations
│   ├── pages/        # Page components
│   ├── theme/        # Chakra UI theme
│   └── App.tsx       # Main application component
└── package.json      # Project dependencies
```

## Customization

- Edit translations in `src/i18n/locales/` directory
- Modify theme settings in the `src/theme/` directory
- Add new pages in the `src/pages/` directory

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Nurullah Gündoğdu - nurullahgundogdu2304@gmail.com

Project Github Link: [https://github.com/nurullahgd/my-website](https://github.com/nurullahgd/my-website)

Project Live Link: [https://nurullahgundogdu.com](https://nurullahgundogdu.com)
