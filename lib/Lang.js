Lang = {
    getDefaultLang: function() {
        return 'us';
    },
    strings: {
        'us_US': {
            // Here starts string declarations //////////////////////////////
            general: {
                notfound: 'Record not found',
                deletetitle: 'Confirm delete',
                deleteconfirm: 'Are you sure?',
                btnsave: 'Save',
                btncancel: 'Cancel',
                name: 'Name',
                notes: 'Notes',
                owner: 'Owner',
                publish: 'Published',
                information: 'Information',
                statistics: 'Statistics',
                action: 'Actions',
                productcategory: 'Product category',
                category: 'Category',
                createdat: 'Created at',
                updatedat: 'Updated at',
                tags: 'Tags',
                excelexport: 'Export to excel',
                viewdata: 'View data',
                url: 'URL',
                variables: 'Variables'
            },
            login: {
                title: 'Please Login',
                email: 'E-mail',
                password: 'Password',
                login: 'Login',
                register: 'Don\'t have an account. Create one now!',
                forgot: 'Forgot password?',
                logout: 'Logout',
            },
            forgot: {
                title: 'Forgot password?',
                email: 'E-mail',
                text: 'Please enter your email to reset password',
                button: 'Reset',
                remember: 'Remembered it? login here',
                emailsent: 'Email with password reset link sent'
            },
            register: {
                title: 'Register',
                email: 'E-mail',
                username: 'User name',
                password: 'Password',
                verify: 'Verify',
                notequal: 'Passwords do not match',
                pwdshort: 'Password should be at least 6 characters long',
                emailsent: 'Verification email is sent',
                button: 'Register',
                login: 'Already have an account? Login here'
            },
            reset: {
                title: 'Reset password',
                password: 'Enter new password',
                button: 'Set password',
                passwordset: 'Password set successfully'
            },

            navig: {
                secure: 'Secure',
                wip: 'Work in progress',
                workflow: 'Workflows',
                personnel: 'Personnel',
                settings: 'Settings',
                exporter: 'Exporters',
                domain: 'Domain',
                myaccount: 'My Account',
                help: 'Help',

                exporterdetail: 'Report',
                _new_: 'to be added'
            },

            exporter: {
                masterviewtitle: 'Selected exporter details',
                searchtext: 'search exporters',
                filtercategory: 'filter by category',
                actionsbutton: 'Actions',
                addbutton: 'Add',
                deletebutton: 'Delete',
                duplicatebutton: 'Duplicate',
                onlymybox: 'Only my exporters',
                lastrunat: 'Last run at',
                runs: '# of runs',
                avgruntime: 'Avg time [sec]',
                exceltemplate: 'Upload excel template',
                addlinkeddata: 'Add linked report',
                addexporter: 'Add exporter',
                selectcategory: 'Select category'
            }
            // end of string declarations //////////////////////////////////
        },
        // shortcuts
        us: 'us_US'
    },

    getStrings: function (lang) {
        if (!lang || _.isUndefined(this.strings[lang]))
            lang = this.getDefaultLang();
        if (_.isString(this.strings[lang])) // got an aliase
            lang = this.strings[lang];
        return !_.isUndefined(this.strings[lang])
            ? this.strings[lang]
            : {};
    },
    // Do the translation
    t: function (label, lang) {
        let path = label.toLowerCase().split('.'),
            p = this.getStrings(lang); // strings
        for (let i = 0; i < path.length; i++) {
            if (!_.isUndefined(p[path[i]])) {
                p = p[path[i]];
            } else {
                let v = label.split('.')[1];
                if (label.split('.')[0] !== 'general') {
                    let val = this.t('general.' + v);
                    return val || v; // not found return default
                } else {
                    return v;
                }
            }
        }
        return p;
    },

    constructor: function (config) {
        this.initConfig(config);
        if (!this.getCurrentLang())
            this.setCurrentLang(this.getDefaultLang());
    }
}


i8n = function (label, lang) {
    return Lang.t(label, lang);
}