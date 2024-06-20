pipeline {
    agent any
    tools {
        nodejs 'node 18'
    }

    stages {
        stage('Install') {
            steps {
                    sh '''
                    node -v && npm -v
                    '''
                    sh '''
                    CACHE_FOLDER=${HOME}/.cache/md5
                    echo "EXECUTOR_NUMBER: ${EXECUTOR_NUMBER}"
                    MD5_FILE_NAME=package-json_${EXECUTOR_NUMBER}.md5sum

                    [ -d ${CACHE_FOLDER} ] || mkdir -p ${CACHE_FOLDER}
                    ls ${CACHE_FOLDER}

                    if [ -f ${CACHE_FOLDER}/${MD5_FILE_NAME} ];then
                      cp ${CACHE_FOLDER}/${MD5_FILE_NAME} ${MD5_FILE_NAME}
                      md5sum package.json
                      cat ${MD5_FILE_NAME}
                      md5sum -c ${MD5_FILE_NAME} || npm ci
                    else
                      echo "No md5sum backup"
                      npm ci
                    fi

                    echo "create new md5sum backup"
                    md5sum package.json
                    md5sum package.json > ${MD5_FILE_NAME}
                    cp ${MD5_FILE_NAME} ${CACHE_FOLDER}
                    '''
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
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
