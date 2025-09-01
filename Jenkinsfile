pipeline {
    agent any

    tools {
        nodejs 'NodeJS'  // ใช้ชื่อ NodeJS จาก Global Tool Configuration
        jdk 'Java17'   
    }

    environment {
        SONAR_TOKEN = credentials('SonarQube-token')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'feature/lab', url: 'https://github.com/6510110379-Maisoon/simple-express-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        npx sonar-scanner \
                          -Dsonar.projectKey=SonarQube-Jenkins-for-simple-express-app \
                          -Dsonar.sources=. \
                          -Dsonar.host.url=http://172.24.103.78:9001 \
                          -Dsonar.login=$SONAR_TOKEN \
                          -Dsonar.branch.name=feature/lab
                    '''
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
