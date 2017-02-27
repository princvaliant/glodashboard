

Accounts.validateLoginAttempt(function (attempt) {
    if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified
    ) {
        throw new Meteor.Error(100002, 'Email not verified.');
    }
    return true;
});


Meteor.startup(function () {
    let smtp = {
        username: 'opssupport@kaiam.com',
        password: '6analytic7',
        server: 'smtp.gmail.com',
        port: 465
    };
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' +
        encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

Meteor.methods({
    getEnvironment: function() {
        return process.env.NODE_ENV;
    }
});