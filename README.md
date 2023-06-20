# Demo DevOps Node.js

This is a simple application to be used in the technical test of DevOps.

## Deployment Decisions

For the deployment of this application, the following decisions were made:

1. **Dockerization**: The application was containerized using Docker. The Dockerfile was created to package the application and its dependencies into a Docker image. The following considerations were taken into account:
   - Environment variables
   - Run user
   - Port configuration
   - Health check setup
     
 ![image](https://media.discordapp.net/attachments/789543560374255679/1120783431555633163/44fa212d-1c87-468a-8d76-73e0c3d2043b.png?width=968&height=422)

2. **Pipeline as Code**: A pipeline was implemented as code to automate the build and deployment process. The pipeline includes the following steps:

   - **Code Build**: The application's source code is built and compiled to generate the executable files and necessary artifacts.

   - **Unit Tests**: Automated tests are executed to verify the correctness of the application's individual units or components.

   - **Static Code Analysis**: Static code analysis tools are used to analyze the source code for potential bugs, vulnerabilities, and adherence to coding standards.

   - **Code Coverage**: Code coverage tools are employed to measure the percentage of code exercised by the automated tests.

   - **Docker Build & Push**: The Docker image is built using the Dockerfile, and it is pushed to a container registry for later deployment. The following commands are used:

     ```bash
     # Build the Docker image
     docker build -t your-image-name .

     # Tag the Docker image
     docker tag your-image-name your-container-registry/your-image-name:tag

     # Push the Docker image to the container registry
     docker push your-container-registry/your-image-name:tag
     ```

   - **Copy K8s and Deploy Kubernetes**: The Docker image is built using the Dockerfile, and it is pushed to a container registry for later deployment. In the deployment process, Kubernetes manifests are created to define the desired state of the application in the Kubernetes cluster. These manifests include the deployment, service, config maps, secrets, and ingress resources. The following commands are used:

     ```bash
     # Apply the Kubernetes manifests
     kubectl apply -f your-kubernetes-manifests.yaml

     # Check the deployment status
     kubectl get deployments

     # Check the service status
     kubectl get services

     # Check the pod status
     kubectl get pods

     # Check the ingress status
     kubectl get ingress
     ```

   ![image](https://github.com/FrankDevg/test_node/assets/52903207/37c4d1e0-318d-4a65-b8b5-ce1b08fc1a27)
   
   ![Pipeline Diagram](https://media.discordapp.net/attachments/789543560374255679/1120775399341834371/d3265c7f-c59e-48a6-ba84-da53ef26b936.png?width=175&height=422)

   
4. **Kubernetes Deployment**: The Dockerized application was deployed on Kubernetes. The deployment was set up to ensure the application is production-ready. The following resources were used:

   - **ConfigMaps**: Kubernetes ConfigMaps were used to store configuration data that can be consumed by the application.

   - **Secrets**: Sensitive information, such as API keys or database credentials, was stored securely in Kubernetes Secrets.

   - **Ingress**: An Ingress resource was defined to expose the application to external traffic. However, it is important to note that in the given scenario, the Ingress functionality was not fully implemented due to resource constraints.

   - **Horizontal Scaling**: The deployment was configured with a minimum of two replicas to ensure high availability and fault tolerance. The following command is used to scale the deployment:

     ```bash
     # Scale the deployment to a desired number of replicas
     kubectl scale deployment your-deployment-name --replicas=2
     ```

  ![image](https://media.discordapp.net/attachments/789543560374255679/1120783395828543498/65b010b9-fdbe-4daa-9e54-d43a3b62acdc.png?width=1025&height=378)

   The diagrams illustrate the development and production architectures, as well as the deployment setup for AKS (Azure Kubernetes Service):

   - Development Architecture Diagram

   - Production Architecture Diagram

   - AKS Deployment Diagram Process
     
  ![image](https://media.discordapp.net/attachments/789543560374255679/1120783475193159772/6e49ac19-1bfe-44b3-a9b5-3b795111cf22.png?width=979&height=422)
