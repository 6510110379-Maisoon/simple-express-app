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
                          -Dsonar.projectKey=SonarQube-Jenkins-for-simple-express-app \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=http://172.24.103.78:9001 \
                          -Dsonar.login=$SONAR_TOKEN
                    '''
                }
            }
        }
    }
}
