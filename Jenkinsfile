pipeline {
    agent any
    tools {
        nodejs '18'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm version'
            }
        }
        stage('Build') {
            steps {
                echo 'Building....'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build -t myapp .'
            }
        }
    }
}
