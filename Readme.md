# Clone the repository
git clone git@github.com:AlouiLouai/task-management.git

# Change directory
cd your-project

# Install dependencies
npm install

# Start the server
npm start

# Access the application in your web browser at http://localhost:3000

# Api routes : 

#### `/api/users`

- `GET /api/users`: Get a list of all users.
- `POST /api/users`: Create a new user.
- `GET /api/users/:id`: Get user details by ID.
- `PUT /api/users/:id`: Update user details by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

#### Environment Variables

- `PORT`: The port number on which the server will run. Default is `3000`.
- `MONGO_URL`: The MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT authentication.
- `JWT_ACCESS_EXPIRATION_MINUTES`: Number of minutes after which an access token expires.
- `JWT_REFRESH_EXPIRATION_DAYS`: Number of days after which a refresh token expires.
- `JWT_RESET_PASSWORD_EXPIRATION_MINUTES`: Number of minutes after which a reset password token expires.
- `JWT_VERIFY_EMAIL_EXPIRATION_MINUTES`: Number of minutes after which a verify email token expires
- `SMTP_HOST`: host of the mail server.
- `SMTP_PORT`: port of the mail server.
- `SMTP_USERNAME`: username credential.
- `SMTP_PASSWORD`: password credential.
- `Email_FROM`: the sender of the email.
