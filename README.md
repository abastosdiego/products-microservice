# Product Management Microservice

This is a microservice for product management, developed with **Node.js**, **Express**, **Typescript**, and **Jest**, configured to run in a **Docker** environment.

## Prerequisites

Make sure you have the following installed:
- **Docker**
- **Docker Compose**

## Environment Setup

1. **Check Configuration in `docker-compose.yml`:**
   - Ensure that the `INSTALL_NODE_MODULES` parameter is set to `true`.
   - Comment out the lines related to proxy configuration, if necessary.

2. **Create the `.env` File:**
   - Use the `.env.exemple` file as a template to create the `.env` file.

## Starting the Environment

In the terminal, run the following command to start the development environment:

```bash
docker compose up
```

Wait until the following message appears in the terminal:

```
Database connection established.
```

## Running Tests

To run unit and integration tests, follow the steps below:

1. Access the microservice container:
   ```bash
   docker exec -it product-microservice bash
   ```

2. Run the tests with the command:
   ```bash
   npx jest --verbose
   ```

## Notes

- Ensure all dependencies are correctly installed before starting the environment.
- Refer to the Docker and Docker Compose documentation if you encounter any issues during setup.