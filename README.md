## Description
A Jenkins client written in Javascript

## Usage
    var jenkins = new Jenkins({baseUrl: 'http://mydomina.com/jenkins'});
    jenkins.getCore();
    jenkins.getQueue();
    jenkins.getLoad();
