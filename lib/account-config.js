/**
 * Created by aleksandarvolos on 3/4/16.
 */

Accounts.config({
    sendVerificationEmail: true,
    restrictCreationByEmailDomain: function(address) {
        let arr = address.match(/glo-usa\.com|avolos@gmail.com/i);
        return (arr !== null);
    }
});

Accounts.emailTemplates = {
    from: 'GLO MES App Support <no-reply@glo-usa.com>',
    siteName: Meteor.absoluteUrl().replace(/^https?:\/\//, '').replace(/\/$/, ''),

    resetPassword: {
        subject: function() {
            return 'How to reset your password on ' + Accounts.emailTemplates.siteName;
        },
        text: function(user, url) {
            let url2 = url.replace('#/reset-password/', '#:auth:reset:');
            let greeting = (user.profile && user.profile.name) ?
                ('Hello ' + user.profile.name + ',') : 'Hello,';
            return greeting + '\n' + '\n' + 'To reset your password, simply click the link below.\n' +
                '\n' + url2 + '\n' + '\n' + 'Thanks.\n';
        }
    },
    verifyEmail: {
        subject: function() {
            return 'GLO MES App verify email address on ' + Accounts.emailTemplates.siteName;
        },
        text: function(user, url) {
            let greeting = (user.profile && user.profile.name) ?
                ('Hello ' + user.profile.name + ',') : 'Hello,';
            return greeting + '\n' + '\n' + 'To verify your account email, simply click the link below.\n' +
                '\n' + url + '\n' + '\n' + 'Thanks.\n';
        }
    },
    enrollAccount: {
        subject: function() {
            return 'GLO MES App account has been created for you on ' + Accounts.emailTemplates.siteName;
        },
        text: function(user, url) {
            let greeting = (user.profile && user.profile.name) ?
                ('Hello ' + user.profile.name + ',') : 'Hello,';
            return greeting + '\n' + '\n' + 'To start using the service, simply click the link below.\n' +
                '\n' + url + '\n' + '\n' + 'Thanks.\n';
        }
    }
};

