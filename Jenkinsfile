pipeline {
    agent { label 'master' }

  tools { nodejs "nodejs" }

    stages {
        stage('Test npm') {
      steps {
        sh """
          npm --version
        """
      }
    }
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
                echo 'Deploying....'
            }
        }
    }
}