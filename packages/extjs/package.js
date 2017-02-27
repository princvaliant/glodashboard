Package.describe({
    name: 'extjs',
    version: '6.2.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.1');

    // Specify the source code for the package.
    api.addFiles('lib/ext-all-debug.js', 'client');
    api.addFiles('lib/charts.js', 'client');
    api.addFiles('resources/charts-all.css', 'client');
    api.addFiles('resources/font-awesome.css', 'client');

    // Triton theme
    api.addFiles('lib/theme-crisp.js', 'client');
    api.addFiles('resources/theme-crisp-all_1.css', 'client');
    api.addFiles('resources/theme-crisp-all_2.css', 'client');

    api.addAssets('resources/font-awesome/fonts/fontawesome-webfont.eot', 'client');
    api.addAssets('resources/font-awesome/fonts/fontawesome-webfont.svg', 'client');
    api.addAssets('resources/font-awesome/fonts/fontawesome-webfont.ttf', 'client');
    api.addAssets('resources/font-awesome/fonts/fontawesome-webfont.woff', 'client');
    api.addAssets('resources/font-awesome/fonts/fontawesome-webfont.woff2', 'client');
    api.addAssets('resources/font-awesome/fonts/Fontawesome.otf', 'client');

    api.addAssets('resources/font-ext/fonts/ExtJS.eot', 'client');
    api.addAssets('resources/font-ext/fonts/ExtJS.svg', 'client');
    api.addAssets('resources/font-ext/fonts/ExtJS.ttf', 'client');
    api.addAssets('resources/font-ext/fonts/ExtJS.woff', 'client');

    api.addAssets('resources/ext/ext-watermark/fonts/ext-watermark.woff', 'client');
    api.addAssets('resources/ext/ext-watermark/fonts/ext-watermark.ttf', 'client');

    api.addAssets('resources/images/breadcrumb/default-arrow-open-rtl.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-arrow-open.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-arrow.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-scroll-left.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-scroll-right.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-split-arrow-open-rtl.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-split-arrow-open.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-split-arrow-over-rtl.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-split-arrow-over.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-split-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/breadcrumb/default-split-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-large-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-large-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-large-s-arrow-b-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-large-s-arrow-b.png', ['client']);
    api.addAssets('resources/images/button/default-large-s-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-large-s-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-medium-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-medium-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-medium-s-arrow-b-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-medium-s-arrow-b.png', ['client']);
    api.addAssets('resources/images/button/default-medium-s-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-medium-s-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-small-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-small-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-small-s-arrow-b-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-small-s-arrow-b.png', ['client']);
    api.addAssets('resources/images/button/default-small-s-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-small-s-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-large-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-large-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-large-s-arrow-b.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-large-s-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-large-s-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-medium-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-medium-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-medium-s-arrow-b-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-medium-s-arrow-b.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-medium-s-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-medium-s-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-small-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-small-arrow.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-small-s-arrow-b-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-small-s-arrow-b.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-small-s-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/default-toolbar-small-s-arrow.png', ['client']);
    api.addAssets('resources/images/button/grid-cell-small-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/grid-cell-small-arrow.png', ['client']);
    api.addAssets('resources/images/button/grid-cell-small-s-arrow-b.png', ['client']);
    api.addAssets('resources/images/button/grid-cell-small-s-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/grid-cell-small-s-arrow.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-large-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-large-arrow.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-large-s-arrow-b-rtl.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-large-s-arrow-b.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-large-s-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-large-s-arrow.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-medium-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-medium-arrow.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-medium-s-arrow-b-rtl.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-medium-s-arrow-b.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-medium-s-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-medium-s-arrow.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-small-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-small-arrow.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-small-s-arrow-b-rtl.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-small-s-arrow-b.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-small-s-arrow-rtl.png', ['client']);
    api.addAssets('resources/images/button/plain-toolbar-small-s-arrow.png', ['client']);
    api.addAssets('resources/images/datepicker/arrow-left.png', ['client']);
    api.addAssets('resources/images/datepicker/arrow-right.png', ['client']);
    api.addAssets('resources/images/datepicker/month-arrow.png', ['client']);
    api.addAssets('resources/images/editor/tb-sprite.png', ['client']);
    api.addAssets('resources/images/fieldset/collapse-tool.png', ['client']);
    api.addAssets('resources/images/form/checkbox.png', ['client']);
    api.addAssets('resources/images/form/clear-trigger-rtl.png', ['client']);
    api.addAssets('resources/images/form/clear-trigger.png', ['client']);
    api.addAssets('resources/images/form/date-trigger-rtl.png', ['client']);
    api.addAssets('resources/images/form/date-trigger.png', ['client']);
    api.addAssets('resources/images/form/exclamation.png', ['client']);
    api.addAssets('resources/images/form/radio.png', ['client']);
    api.addAssets('resources/images/form/search-trigger-rtl.png', ['client']);
    api.addAssets('resources/images/form/search-trigger.png', ['client']);
    api.addAssets('resources/images/form/spinner-down-rtl.png', ['client']);
    api.addAssets('resources/images/form/spinner-down.png', ['client']);
    api.addAssets('resources/images/form/spinner-rtl.png', ['client']);
    api.addAssets('resources/images/form/spinner-up-rtl.png', ['client']);
    api.addAssets('resources/images/form/spinner-up.png', ['client']);
    api.addAssets('resources/images/form/spinner.png', ['client']);
    api.addAssets('resources/images/form/tag-field-item-close.png', ['client']);
    api.addAssets('resources/images/form/trigger-rtl.png', ['client']);
    api.addAssets('resources/images/form/trigger.png', ['client']);
    api.addAssets('resources/images/grid/columns.png', ['client']);
    api.addAssets('resources/images/grid/group-by.png', ['client']);
    api.addAssets('resources/images/grid/group-collapse.png', ['client']);
    api.addAssets('resources/images/grid/group-expand.png', ['client']);
    api.addAssets('resources/images/grid/hd-pop.png', ['client']);
    api.addAssets('resources/images/grid/hmenu-asc.png', ['client']);
    api.addAssets('resources/images/grid/hmenu-desc.png', ['client']);
    api.addAssets('resources/images/grid/hmenu-lock.png', ['client']);
    api.addAssets('resources/images/grid/hmenu-unlock.png', ['client']);
    api.addAssets('resources/images/grid/page-first.png', ['client']);
    api.addAssets('resources/images/grid/page-last.png', ['client']);
    api.addAssets('resources/images/grid/page-next.png', ['client']);
    api.addAssets('resources/images/grid/page-prev.png', ['client']);
    api.addAssets('resources/images/grid/refresh.png', ['client']);
    api.addAssets('resources/images/grid/sort_asc.png', ['client']);
    api.addAssets('resources/images/grid/sort_desc.png', ['client']);
    api.addAssets('resources/images/grid/filters/equals.png', ['client']);
    api.addAssets('resources/images/grid/filters/find.png', ['client']);
    api.addAssets('resources/images/grid/filters/greater_than.png', ['client']);
    api.addAssets('resources/images/grid/filters/less_than.png', ['client']);
    api.addAssets('resources/images/menu/default-checked.png', ['client']);
    api.addAssets('resources/images/menu/default-group-checked.png', ['client']);
    api.addAssets('resources/images/menu/default-menu-parent-left.png', ['client']);
    api.addAssets('resources/images/menu/default-menu-parent.png', ['client']);
    api.addAssets('resources/images/menu/default-menubar-menu-parent.png', ['client']);
    api.addAssets('resources/images/menu/default-scroll-bottom.png', ['client']);
    api.addAssets('resources/images/menu/default-scroll-top.png', ['client']);
    api.addAssets('resources/images/menu/default-unchecked.png', ['client']);
    api.addAssets('resources/images/shared/icon-error.png', ['client']);
    api.addAssets('resources/images/shared/icon-info.png', ['client']);
    api.addAssets('resources/images/shared/icon-question.png', ['client']);
    api.addAssets('resources/images/shared/icon-warning.png', ['client']);
    api.addAssets('resources/images/tab/tab-default-close.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-more-left.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-more.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-plain-more-left.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-plain-more.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-plain-scroll-bottom.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-plain-scroll-left.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-plain-scroll-right.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-plain-scroll-top.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-scroll-bottom.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-scroll-left.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-scroll-right.png', ['client']);
    api.addAssets('resources/images/tab-bar/default-scroll-top.png', ['client']);
    api.addAssets('resources/images/toolbar/default-more-left.png', ['client']);
    api.addAssets('resources/images/toolbar/default-more.png', ['client']);
    api.addAssets('resources/images/toolbar/default-scroll-bottom.png', ['client']);
    api.addAssets('resources/images/toolbar/default-scroll-left.png', ['client']);
    api.addAssets('resources/images/toolbar/default-scroll-right.png', ['client']);
    api.addAssets('resources/images/toolbar/default-scroll-top.png', ['client']);
    api.addAssets('resources/images/toolbar/footer-more-left.png', ['client']);
    api.addAssets('resources/images/toolbar/footer-more.png', ['client']);
    api.addAssets('resources/images/toolbar/footer-scroll-left.png', ['client']);
    api.addAssets('resources/images/toolbar/footer-scroll-right.png', ['client']);
    api.addAssets('resources/images/tools/tool-sprites-dark.png', ['client']);
    api.addAssets('resources/images/tools/tool-sprites.png', ['client']);
    api.addAssets('resources/images/tree/arrows-rtl.png', ['client']);
    api.addAssets('resources/images/tree/arrows.png', ['client']);
    api.addAssets('resources/images/tree/elbow-end-minus-rtl.png', ['client']);
    api.addAssets('resources/images/tree/elbow-end-minus.png', ['client']);
    api.addAssets('resources/images/tree/elbow-end-plus-rtl.png', ['client']);
    api.addAssets('resources/images/tree/elbow-end-plus.png', ['client']);
    api.addAssets('resources/images/tree/elbow-end-rtl.png', ['client']);
    api.addAssets('resources/images/tree/elbow-end.png', ['client']);
    api.addAssets('resources/images/tree/elbow-line-rtl.png', ['client']);
    api.addAssets('resources/images/tree/elbow-line.png', ['client']);
    api.addAssets('resources/images/tree/elbow-minus-nl-rtl.png', ['client']);
    api.addAssets('resources/images/tree/elbow-minus-nl.png', ['client']);
    api.addAssets('resources/images/tree/elbow-minus-rtl.png', ['client']);
    api.addAssets('resources/images/tree/elbow-minus.png', ['client']);
    api.addAssets('resources/images/tree/elbow-plus-nl-rtl.png', ['client']);
    api.addAssets('resources/images/tree/elbow-plus-nl.png', ['client']);
    api.addAssets('resources/images/tree/elbow-plus-rtl.png', ['client']);
    api.addAssets('resources/images/tree/elbow-plus.png', ['client']);
    api.addAssets('resources/images/tree/elbow-rtl.png', ['client']);
    api.addAssets('resources/images/tree/elbow.png', ['client']);
    api.addAssets('resources/images/tree/folder-open-rtl.png', ['client']);
    api.addAssets('resources/images/tree/folder-open.png', ['client']);
    api.addAssets('resources/images/tree/folder-rtl.png', ['client']);
    api.addAssets('resources/images/tree/folder.png', ['client']);
    api.addAssets('resources/images/tree/leaf-rtl.png', ['client']);
    api.addAssets('resources/images/tree/leaf.png', ['client']);
    api.addAssets('resources/images/util/splitter/mini-bottom.png', ['client']);
    api.addAssets('resources/images/util/splitter/mini-left.png', ['client']);
    api.addAssets('resources/images/util/splitter/mini-right.png', ['client']);
    api.addAssets('resources/images/util/splitter/mini-top.png', ['client']);


    api.export('Ext', 'client');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    // api.use('extjs');
    // api.mainModule('extjs-tests.js');
});
