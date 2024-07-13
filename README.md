# Amaravati Chamber of Commerce

Welcome to the Amaravati Chamber of Commerce website repository. This project is designed to create an online presence for the Amaravati Chamber, providing valuable resources and information to businesses and the community.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The Amaravati Chamber of Commerce website serves as a hub for business resources, community events, and networking opportunities in the Amaravati region. Our mission is to support local businesses and foster economic growth in the community.

## Features

- **Home Page**: Overview of the Chamber, mission statement, and latest news.
- **About Us**: Detailed information about the Chamber, its history, and leadership.
- **Events**: Calendar of upcoming events and workshops.
- **Membership**: Information on membership benefits and how to join.
- **Resources**: Business resources, guides, and useful links.
- **Contact Us**: Contact form and contact details.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap** (Start Bootstrap Template)
- **Node.js**
- **Nginx**
- **GitHub Actions** for CI/CD
- **DigitalOcean** for hosting

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/amaravati-chamber/landing-page.git
    cd landing-page
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the website in action.

## Deployment

The website is automatically deployed to DigitalOcean whenever changes are pushed to the `main` branch. This is achieved using GitHub Actions. The build output is stored in the `/dist` directory and served using Nginx.

To manually deploy the website, follow these steps:

1. **Build the project**:
    ```bash
    npm run build
    ```

2. **Copy the build output** to the server:
    ```bash
    scp -r dist/* root@your_droplet_ip:/var/www/your_website
    ```

3. **Restart Nginx**:
    ```bash
    ssh root@your_droplet_ip 'sudo systemctl restart nginx'
    ```

## Contributing

We welcome contributions to improve the Amaravati Chamber of Commerce website. To contribute, please fork the repository, create a new branch, and submit a pull request with your changes. 

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Commit your changes**:
    ```bash
    git commit -m 'Add some feature'
    ```

4. **Push to the branch**:
    ```bash
    git push origin feature/your-feature-name
    ```

5. **Open a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact us at [contact@amaravati-chamber.org](mailto:contact@amaravati-chamber.org).

---

Thank you for visiting the Amaravati Chamber of Commerce website repository!
