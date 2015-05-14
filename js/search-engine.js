$(function() {

      google.load('search', '1', {language: 'en', style: google.loader.themes.MINIMALIST});
      google.setOnLoadCallback(function() {
        var customSearchOptions = {};
        var orderByOptions = {};
        orderByOptions['keys'] = [{label: 'Relevance', key: ''} , {label: 'Date', key: 'date'}];
        customSearchOptions['enableOrderBy'] = true;
        customSearchOptions['orderByOptions'] = orderByOptions;
        var imageSearchOptions = {};
        imageSearchOptions['layout'] = 'google.search.ImageSearch.LAYOUT_POPUP';
        customSearchOptions['enableImageSearch'] = true;
        customSearchOptions['overlayResults'] = true;
        var customSearchControl =   new google.search.CustomSearchControl('006364709504491078392:pi4jyhba8ow', customSearchOptions);
        customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
        var options = new google.search.DrawOptions();
        options.setAutoComplete(true);
        customSearchControl.draw('cse', options);
      }, true);

});