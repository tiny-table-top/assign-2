pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '106b43d0-b9c5-4380-8d5b-2068e702a4db'
        NETLIFY_AUTH_TOKEN = credentials('assign-2')
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:22.14.0-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm install
                    npm run build
                    ls -la
                '''
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:22.14.0-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    test -f build/index.html
                    npm test
                '''
            }
        }
        stage('Deploy') {
            agent {
                docker {
                    image 'node:22.14.0-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install netlify-cli
                    node_modules/.bin/netlify --version
                    echo "Deploying to production at Site ID: $NETLIFY_SITE_ID"
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy --prod '--dir=build'
                '''
            }
        } 
    }
}