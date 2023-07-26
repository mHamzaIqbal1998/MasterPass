# Master Pass - Your Password Manager

![Master Pass](https://i.imgur.com/XFrcy2E.png)

Master Pass is an open-source password manager web application built with Next.js 13, NextAuth.js, Prisma, Pscale, and a UI inspired by [Shadcn](https://github.com/shadcn-ui). It provides a secure and user-friendly solution for managing and storing your login credentials for various websites and applications.

## Features

- **Client-Side Encryption**: Master Pass encrypts your passwords on the client side before they are sent to the server, ensuring your sensitive data remains secure and confidential.

- **NextAuth.js Authentication**: The application uses NextAuth.js to provide robust authentication with various providers, making it easy for users to log in securely.

- **Prisma and Pscale Integration**: Prisma is used as the ORM (Object-Relational Mapping) tool to manage database interactions, while Pscale ensures seamless and scalable deployments.

- **UI Inspired by [Shadcn](https://github.com/shadcn-ui)**: The user interface is designed with inspiration from [Shadcn](https://github.com/shadcn-ui), providing an elegant and modern look that enhances user experience.

## Getting Started

Follow these steps to set up and run Master Pass locally:

1. Clone this repository: `git clone https://github.com/mHamzaIqbal1998/MasterPass.git`.

2. Install dependencies: `cd master-pass` and `npm install`.

3. Set up the database: Ensure you have Pscale setup and get DATABASE_URL. Update the .env file set your DATABASE_URL.

4. Update Database: `npx prisma generate && npx prisma db push`.

5. Set up environment variables: Create a `.env` file in the root directory and add necessary environment variables (e.g., database credentials, NextAuth.js secret, etc.) look into .env.example file.

6. Start the development server: `npm run dev`.

## Contribution Guidelines

Master Pass welcomes contributions from the community. To contribute:

1. Fork the repository.

2. Create a new branch for your feature/bug fix: `git checkout -b feature-name`.

3. Make your changes and commit them: `git commit -m "Add feature-name"`.

4. Push the changes to your forked repository: `git push origin feature-name`.

5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of Next.js, NextAuth.js, Prisma, and Pscale for their incredible tools and frameworks.
- UI inspiration from [Shadcn](https://github.com/shadcn-ui)
