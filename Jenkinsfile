pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '875b136f-327b-4b64-a378-03a97218b54d'
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
                    npm test App.test.js
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