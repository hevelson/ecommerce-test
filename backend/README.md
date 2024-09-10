## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
#Server environment
NODE_ENV=development
#Port number
PORT=8080

#Db configuration
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=change-me
DB_NAME=ecommerce

# CORS Settings
CORS_ORIGIN="http://localhost:*"

# Rate Limiting
COMMON_RATE_LIMIT_WINDOW_MS="1000" # Window size for rate limiting (ms)
COMMON_RATE_LIMIT_MAX_REQUESTS="20" # Max number of requests per window per IP

```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration
 |--controllers\    # Route controllers (controller layer)
 |--db\             # Migrations and Seed files
 |--helpers\        # Helper classes and functions
 |--middlewares\    # Request middlewares
 |--models\         # Sequelize models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--tests\    		# Tests
 |--validations\    # Request data validation schemas
 |--server.js       # Express app
 |--index.ts        # App entry point
```

## License

[MIT](LICENSE)
