$(function () {
    $("#query").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: ("http://vuzupy.api.indexden.com/v1/indexes/Snippets/autocomplete?field=description&query=" + request.term),
                dataType: "jsonp",
                data: {
                    featureClass: "P",
                    style: "full",
                    maxRows: 10,
                    name_startsWith: request.term
                },
                success: function (data) {
                    response($.map(data.suggestions, function (item) {
                        return {
                            label: item
                            //value: item
                        }
                    }));
                }
            });
        },
        minLength: 1,
        select: function (event, ui) {
            log(ui.item ?
              "Selected: " + ui.item.label :
              "Nothing selected, input was " + this.value);
        },
        open: function () {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });
});