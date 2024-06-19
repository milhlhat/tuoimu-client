pipeline {
    tools {
        nodejs 'node'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
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
