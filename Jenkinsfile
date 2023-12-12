pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/SyedaSheharBano/SP20-BCS-049-Syeda-Shehar-Bano.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            configName: 'MyServer',
                            transfers: [sshTransfer(sourceFiles: '*/', remoteDirectory: '/myapp/')],
                            
                        )
                    ]
                )
            }
        }
    }
}