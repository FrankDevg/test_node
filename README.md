# Demo DevOps Node.js

This is a simple application to be used in the technical test of DevOps.

## Deployment Decisions

For the deployment of this application, the following decisions were made:

1. **Dockerization**: The application was containerized using Docker. The Dockerfile was created to package the application and its dependencies into a Docker image. The following considerations were taken into account:
   - Environment variables
   - Run user
   - Port configuration
   - Health check setup
     
 ![image](https://github.com/FrankDevg/test_node/assets/52903207/e0bda2da-3476-4fc0-accc-e64589ec26e4)

2. **Pipeline as Code**: A pipeline was implemented as code to automate the build and deployment process. The pipeline includes the following steps:


   - **Code Build**: The application's source code is built and compiled to generate the executable files and necessary artifacts.

   - **Unit Tests**: Automated tests are executed to verify the correctness of the application's individual units or components.

   - **Static Code Analysis**: Static code analysis tools are used to analyze the source code for potential bugs, vulnerabilities, and adherence to coding standards.

   - **Code Coverage**: Code coverage tools are employed to measure the percentage of code exercised by the automated tests.

   - **Docker Build & Push**: The Docker image is built using the Dockerfile, and it is pushed to a container registry for later deployment.
   - **Copy K8s and Deploy Kubernetes **:  The Docker image is built using the Dockerfile, and it is pushed to a container registry for later deployment. In the deployment process, Kubernetes manifests are created to define the desired state of the application in the Kubernetes cluster. These manifests include the deployment, service, config maps, secrets, and ingress resources.

The deployment manifest specifies the desired number of replicas, container image, and other configuration parameters. It ensures that the application is deployed and running inside the Kubernetes cluster. The service manifest exposes the deployed application internally or externally, allowing other services or users to access it.
   ![Pipeline Diagram](https://media.discordapp.net/attachments/789543560374255679/1120775399341834371/d3265c7f-c59e-48a6-ba84-da53ef26b936.png?width=175&height=422)
3. **Kubernetes Deployment**: The Dockerized application was deployed on Kubernetes. The deployment was set up to ensure the application is production-ready. The following resources were used:

 

   - **ConfigMaps**: Kubernetes ConfigMaps were used to store configuration data that can be consumed by the application.

   - **Secrets**: Sensitive information, such as API keys or database credentials, was stored securely in Kubernetes Secrets.

   - **Ingress**: An Ingress resource was defined to expose the application to external traffic. However, it is important to note that in the given scenario, the Ingress functionality was not fully implemented due to resource constraints.

   - **Horizontal Scaling**: The deployment was configured with a minimum of two replicas to ensure high availability and fault tolerance.
  ![image](https://media.discordapp.net/attachments/789543560374255679/1120773317125750804/adef2312-2e02-4440-a2c3-2917248e5d22.png?width=1025&height=388)

4. **Documentation**

   The following diagrams illustrate the development and production architectures, as well as the deployment setup for AKS (Azure Kubernetes Service):

   - Development Architecture Diagram

   - Production Architecture Diagram

   - AKS Deployment Diagram:

   The documentation for the project should include these diagrams along with a detailed explanation of each step taken during the deployment process.

