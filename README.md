# Student Test Express A

A lightweight Node.js + Express microservice created for College Cloud CI/CD Manager integration and multi-tenant testing.

## Service Specification
- **Student Owner:** Student A
- **Runtime:** Node.js (v20+) / Express
- **Container Port:** `3000`
- **Assigned Public Port:** `3021`

## API Endpoints
- `GET /` — Returns service metadata JSON:
  ```json
  {
    "service": "student-test-express-a",
    "student": "Student A",
    "status": "online"
  }
  ```
- `GET /health` — Returns health probe JSON:
  ```json
  {
    "status": "ok"
  }
  ```

## Local Development & Testing
```bash
# Install dependencies
npm install

# Run unit tests
npm test

# Start application locally
npm start
```

## Docker Build
```bash
docker build -t student-test-express-a .
docker run -p 3000:3000 student-test-express-a
```
test -1

