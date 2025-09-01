pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/6510110379-Maisoon/simple-express-app.git', branch: 'feature/lab'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Scan') {
            steps {
                withSonarQubeEnv('sq1') {
                    sh '''
                        npx sonar-scanner \
                          -Dsonar.projectKey=mywebapp \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=http://<sonarqube-ip>:9000 \
                          -Dsonar.login=$SONAR_TOKEN
                    '''
                }
            }
        }
    }
}
