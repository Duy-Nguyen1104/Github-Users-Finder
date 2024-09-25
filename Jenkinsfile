pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Duy-Nguyen1104/Github-Users-Finder.git'
        IMAGE_NAME = 'github-finder'
        TEST_ENV = 'test'
        PROD_ENV = 'production'
        // OCTOPUS_SERVER = 'http://your-octopus-server'  // Replace with your Octopus Deploy server URL
        // OCTOPUS_API_KEY = 'your-octopus-api-key'  // Replace with your Octopus Deploy API key
        // OCTOPUS_PROJECT_NAME = 'YourProjectName'  // Replace with your Octopus project name
        // OCTOPUS_ENVIRONMENT_NAME = 'Production'  // Replace with your target environment name
        DOCKER_CREDENTIALS_ID = 'd933c439-0b13-405f-9309-13a519912eff	'  // Docker credentials ID stored in Jenkins
        DOCKER_REGISTRY = 'nguyenduy2004'  
    }

        stage('Build') {
            steps {
                script {
                    // Login to Docker before building the image (if necessary for private registry)
                    withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        bat "docker login -u ${DOCKER_USER} -p ${DOCKER_PASS} ${DOCKER_REGISTRY}"
                    }

                    // Build the application
                    bat 'npm install'
                    bat 'npm run build'

                    // Build and push the Docker image to the registry
                    bat "docker build -t ${DOCKER_REGISTRY}/${DOCKER_USER}/${IMAGE_NAME}:latest ."
                    bat "docker push ${DOCKER_REGISTRY}/${DOCKER_USER}/${IMAGE_NAME}:latest"

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
                    bat "docker logout ${DOCKER_REGISTRY}"
                }
            }
        }

        // stage('Release') {
        //     steps {
        //         script {
        //             // Promote the application to production using Octopus Deploy
        //             bat """
        //             octo push --package=${IMAGE_NAME} --replace-existing --server=${OCTOPUS_SERVER} --apiKey=${OCTOPUS_API_KEY}
        //             octo deploy-release --project=${OCTOPUS_PROJECT_NAME} --version=1.0.0 --deployTo=${OCTOPUS_ENVIRONMENT_NAME} --server=${OCTOPUS_SERVER} --apiKey=${OCTOPUS_API_KEY}
        //             """
        //         }
        //     }
        // }

        // stage('Monitoring and Alerting') {
        //     steps {
        //         script {
        //             // Example of setting up monitoring
        //             bat 'echo "Monitoring set up with Datadog/New Relic"'
        //         }
        //     }
        // }
    }

    post {
        always {
            echo 'Cleaning up...'
            bat 'docker-compose down'  
        }
    }
}
