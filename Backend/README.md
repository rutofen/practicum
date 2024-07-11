
# Transport-management

## How to Run the Application with Docker

### Prerequisites

- Docker installed on your machine.

### Installation Instructions

1. Clone the repository:

```bash
git clone https://github.com/ptr-10/Transport-management.git
cd Transport-management
```

2. Build Docker images:

```bash
docker-compose build
```

3. Start containers:
*For production-like setup:*

```bash
docker-compose up -d
```

*For development*

```bash
docker-compose up
```

4. And the application runs!
The application is running at <http://localhost:3010>

5. Stopping the Application

- To stop the application and remove containers, run:
  
```bash
docker-compose down
```
