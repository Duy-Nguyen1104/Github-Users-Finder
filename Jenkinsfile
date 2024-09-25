pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Duy-Nguyen1104/Github-Users-Finder.git'
        IMAGE_NAME = 'github-finder'
        TEST_ENV = 'test'
        PROD_ENV = 'production'
        DOCKER_CREDENTIALS_ID = 'dockerhub-pwd'  // Docker credentials ID stored in Jenkins
        DOCKER_REGISTRY = 'nguyenduy2004'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Login to Docker Hub before building the image
                    withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubpwd')]) {
                        bat "docker login -u nguyenduy2004 -p %dockerhubpwd% docker.io"
                    
                    }

                    // Build the application
                    bat 'npm install'
                    bat 'npm run build'

                    // Build and push the Docker image to the registry
                    bat "docker build -t nguyenduy2004/${IMAGE_NAME}:latest ."
                    bat "docker push nguyenduy2004/${IMAGE_NAME}:latest"
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests using Jest
                    bat 'npm test -- --watchAll=false'
                }
            }
        }

        stage('Code Quality Analysis') {
            steps {
                script {
                    // Run SonarQube analysis using 'bat' command for Windows
                    bat """
                    sonar-scanner.bat ^
                    -Dsonar.projectKey=SIT223HD ^
                    -Dsonar.sources=. ^
                    -Dsonar.host.url=http://localhost:9000 ^
                    -Dsonar.login=sqp_a325388119043de1e60e63109463bb7d58c24b7d
                    """
                }
            }
        }

        stage('Deploy to Test Environment') {
            steps {
                script {
                    // Pull and deploy the Docker image using Docker Compose
                    bat 'docker-compose pull'
                    bat 'docker-compose up -d'

                    // Logout from Docker after deployment
                                            // Logout from Docker after pushing the image
                    bat "docker logout ${DOCKER_REGISTRY}"
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            bat 'docker-compose down'
        }
    }
}
