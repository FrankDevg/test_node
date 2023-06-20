# Demo DevOps Node.js

This is a simple application to be used in the technical test of DevOps.

## Deployment Decisions

For the deployment of this application, the following decisions were made:

1. **Dockerization**: The application was containerized using Docker. The Dockerfile was created to package the application and its dependencies into a Docker image. The following considerations were taken into account:
   - Environment variables
   - Run user
   - Port configuration
   - Health check setup

2. **Pipeline as Code**: A pipeline was implemented as code to automate the build and deployment process. The pipeline includes the following steps:

   ![Pipeline Diagram](pipeline.png)

   - **Code Build**: The application's source code is built and compiled to generate the executable files and necessary artifacts.

   - **Unit Tests**: Automated tests are executed to verify the correctness of the application's individual units or components.

   - **Static Code Analysis**: Static code analysis tools are used to analyze the source code for potential bugs, vulnerabilities, and adherence to coding standards.

   - **Code Coverage**: Code coverage tools are employed to measure the percentage of code exercised by the automated tests.

   - **Docker Build & Push**: The Docker image is built using the Dockerfile, and it is pushed to a container registry for later deployment.

3. **Kubernetes Deployment**: The Dockerized application was deployed on Kubernetes. The deployment was set up to ensure the application is production-ready. The following resources were used:

   ![Architecture Diagram](![image](https://github.com/FrankDevg/test_node/assets/52903207/6b8d7bcc-d30f-4316-acc0-caada8ed954f)
)

   - **ConfigMaps**: Kubernetes ConfigMaps were used to store configuration data that can be consumed by the application.

   - **Secrets**: Sensitive information, such as API keys or database credentials, was stored securely in Kubernetes Secrets.

   - **Ingress**: An Ingress resource was defined to expose the application to external traffic. However, it is important to note that in the given scenario, the Ingress functionality was not fully implemented due to resource constraints.

   - **Horizontal Scaling**: The deployment was configured with a minimum of two replicas to ensure high availability and fault tolerance.

4. **Documentation**

   The following diagrams illustrate the development and production architectures, as well as the deployment setup for AKS (Azure Kubernetes Service):

   - Development Architecture Diagram:

     ![Development Architecture](development_architecture.png)

   - Production Architecture Diagram:

     ![Production Architecture](production_architecture.png)

   - AKS Deployment Diagram:

     ![AKS Deployment](aks_deployment.png)

   The documentation for the project should include these diagrams along with a detailed explanation of each step taken during the deployment process.

Please note that the mentioned steps are for illustrative purposes and should be adjusted according to your specific deployment requirements and architecture.
