pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        SONAR_TOKEN = credentials('SonarQube-token')
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout branch feature/lab
                git url: 'https://github.com/6510110379-Maisoon/simple-express-app.git', branch: 'feature/lab'
            }
        }

        stage('Build') {
            steps {
                // ติดตั้ง dependencies
                sh 'npm install'
            }
        }

        stage('Scan') {
            steps {
                // ใช้งาน SonarQube environment ชื่อ sq1
                withSonarQubeEnv('SonarQube') {
                    // รัน Sonar Scanner
                    sh '''
                        npx sonar-scanner \
                          -Dsonar.projectKey=mywebapp \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=http://172.17.0.3:9001 \
                          -Dsonar.login=$SONAR_TOKEN
                    '''
                }
            }
        }
    }
}
