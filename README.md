<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://media.discordapp.net/attachments/836284594948407366/1079636506022527096/image.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">DevOps</h1>

  <p align="center">
  
    <br />
     <!--a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a-->
    <br />
    <br />
    <a href="http://20.242.129.177:8080/client">View Demo</a>
    ·
    <!--a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a-->
    ·
    <!--a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a-->
  </p>
</div>
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

   - **Run Trivy Vulnerability Scan**: To scan the Docker image for vulnerabilities using Trivy.This code will download Trivy, extract it, and then scan the Docker image "frankdevg/test-node:latest" for    vulnerabilities using Trivy. The --exit-code 1 flag ensures that the scan will exit with a non-zero status code if vulnerabilities are found, and the --no-progress flag disables the    progress bar during the scan.
     ```bash
      # Download and extract Trivy
      wget https://github.com/aquasecurity/trivy/releases/download/v0.17.2/trivy_0.17.2_Linux-64bit.tar.gz
      tar zxvf trivy_0.17.2_Linux-64bit.tar.gz
      
      # Run Trivy vulnerability scan on the Docker image
      ./trivy --exit-code 1 --no-progress frankdevg/test-node:latest

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

### Accessing the Resource with Postman

To access the resource using Postman, you can use the following endpoints:

- GET request: `http://20.120.120.202:80/api/users`
- POST request: `http://20.120.120.202:80/api/users`

For the POST request, use the following JSON body:

```json
 {
    "name": "John Doe1",
    "dni": "123456744"
  }
```
You can access the postman collection here:
https://www.postman.com/frankdevg/workspace/devsu-test


## Terraform Commands

To deploy the infrastructure on Azure using Terraform, follow these steps:

1. Install Azure CLI (az), Terraform, and kubectl on your machine.
2. Authenticate with Azure using `az login` and follow the prompts.
3. Change to the directory where your Terraform configuration files are located.
4. Initialize Terraform with `terraform init` to download the required provider plugins.
5. Modify the Terraform configuration files as needed to define your desired infrastructure.
6. Run `terraform plan` to see the execution plan and verify the changes that will be made.
7. If the plan looks good, execute `terraform apply` to deploy the infrastructure.
8. Review the changes that Terraform will make and confirm by typing `yes` when prompted.

Here are the commands in sequence:

```bash
# Install Azure CLI (az), Terraform, and kubectl
# Follow the official documentation for your operating system

# Authenticate with Azure CLI
az login

# Change to the Terraform configuration directory
cd /path/to/terraform/files

# Initialize Terraform
terraform init

# Modify the Terraform configuration files as needed

# Plan the Terraform changes
terraform plan

# Deploy the infrastructure
terraform apply

# Review the changes and confirm by typing "yes"

```
## Be Mindful of Secrets and Environment Variables

It is crucial to maintain the security of secrets and environment variables in your application. These contain sensitive information such as database credentials, API keys, and passwords, which could compromise security if mishandled. Here are some best practices to follow:

1. **Avoid including secrets in source code**: Avoid directly including secrets in your source code, as this could expose them to unauthorized access. Use secure methods for storing and accessing secrets, such as environment variables or secret management services.

2. **Use environment variables**: Instead of storing secrets in configuration files or source code, use environment variables to access them. This provides an additional layer of security, as secrets are not directly stored in visible code or files.

3. **Protect your configuration files**: If you need to store secrets in configuration files, ensure that these files are properly protected. Limit access permissions to the files and consider encrypting them to prevent unauthorized reading.

4. **Utilize secret management services**: Consider using specialized secret management services such as Azure Key Vault or AWS Secrets Manager. These services provide a secure environment for storing and managing your secrets, allowing controlled access and automated key rotation.

5. **Avoid printing or logging secrets**: Ensure that you do not print or log secrets in your application's logs or outputs. This can expose sensitive information and increase the risk of security breaches.

Remember, the security of your secrets and environment variables is critical for protecting your applications and data. Follow security best practices and keep your secrets confidential at all times.



