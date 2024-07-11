# Transport-management

## How to Run the Application with Docker

### Prerequisites

- Docker installed on your machine.

### Installation Instructions

1. **Clone the repository from GitHub:**

   ..*[git clone] (<https://github.com/ptr-10/)Transport-management.git>>
   ..*cd Transport-management
2. **Build Docker images:**

  ..*docker-compose build
3. **Start containers:**

..*For production-like setup (detached mode):..*

  ..*docker-compose up -d
..*For development (interactive mode with logs):..*

 ..*docker-compose up
4. **And the application runs!**
   ..*The application is running at <http://localhost:3010>.
5. **Stopping the Application**
..*To stop the application and remove containers, run:

..*docker-compose down
