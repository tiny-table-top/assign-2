pipeline {
    agent {
        docker {
            image 'node:22.14.0' 
        }
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test App.test.js'
            }
        }
    }

    
}

/*
post {
        always {
            echo 'Pipeline completed - check logs for details'
        }
        success {
            echo 'Build and tests passed successfully! ✅'
        }
        failure {
            echo 'Build or tests failed! ❌'
        }
    }
*/