var Jenkins = require('../../lib/jenkins').Jenkins;

describe('Jenkins', function () {
    var jenkins;

    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
        done();
    };

    beforeEach(function (done) {
        jenkins = new Jenkins({baseUrl: 'http://craigcook.co.uk/build'});
        expect(jenkins).toBeDefined();
        done();
    });

    it('should get Jenkins core', function (done) {
        jenkins.getCore(error,
            function (data) {
                expect(JSON.parse(data).jobs).toBeDefined();
                done();
            }
        );
    });

    it('should get queue', function (done) {
        jenkins.getQueue(error,
            function (data) {
                expect(JSON.parse(data).items).toBeDefined();
                done();
            }
        );
    });

    it('should get users repos', function (done) {
        jenkins.getLoad(error,
            function (data) {
				data = JSON.parse(data);
                expect(data.busyExecutors).toBeDefined();
                expect(data.queueLength).toBeDefined();
                expect(data.totalExecutors).toBeDefined();
                expect(data.totalQueueLength).toBeDefined();
                done();
            }
        );
    });
});
