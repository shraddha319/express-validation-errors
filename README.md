## Validation and Handling Errors in Express API + DRY practices

_This repo contains the code snippets used in my blog post on validation and error handling in Express API_

Published on [hashnode](https://hashnode.com/draft/613e7ba022b7a41dfe5fee7f)

### Folder Structure

```
├── app.js
├── lib
│   ├── error        # Error handlers
│   └── res          # Response handlers
└── validations
 ├── custom          # Custom validation modules
 └── joi             # Joi schema definitions, validate
```

### Quick Start

1. Clone the repo:

```bash
git clone https://github.com/shraddha319/express-validation-errors.git
cd express-validation-errors
```

2. Install the dependencies

```bash
npm install
```

3. Run the app:

```bash
npm run start
```
