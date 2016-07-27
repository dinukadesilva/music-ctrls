/*! sisiliano - v1.0.0 - 2016-07-20 

*/var htmlTempl = htmlTempl || {};
htmlTempl["templates"] = {"src/controllers/knob/knob.html":"<svg\r\n        aria-hidden=\"true\"\r\n        viewBox=\"0 0 300 300\"\r\n        width=\"100%\"\r\n        height=\"100%\"\r\n        class=\"sisiliano-knob\">\r\n    <defs\r\n            id=\"defs4\">\r\n        <filter\r\n                style=\"color-interpolation-filters:sRGB;\"\r\n                id=\"filter6244\">\r\n            <feFlood\r\n                    flood-opacity=\"0.4\"\r\n                    flood-color=\"black\"\r\n                    result=\"flood\"\r\n                    id=\"feFlood6246\" />\r\n            <feComposite\r\n                    in=\"flood\"\r\n                    in2=\"SourceGraphic\"\r\n                    operator=\"in\"\r\n                    result=\"composite1\"\r\n                    id=\"feComposite6248\" />\r\n            <feGaussianBlur\r\n                    in=\"composite1\"\r\n                    stdDeviation=\"3\"\r\n                    result=\"blur\"\r\n                    id=\"feGaussianBlur6250\" />\r\n            <feOffset\r\n                    dx=\"-1\"\r\n                    dy=\"1\"\r\n                    result=\"offset\"\r\n                    id=\"feOffset6252\" />\r\n            <feComposite\r\n                    in=\"SourceGraphic\"\r\n                    in2=\"offset\"\r\n                    operator=\"over\"\r\n                    result=\"composite2\"\r\n                    id=\"feComposite6254\" />\r\n        </filter>\r\n        <filter\r\n                style=\"color-interpolation-filters:sRGB;\"\r\n                id=\"filter6245\">\r\n            <feFlood\r\n                    flood-opacity=\"0.5\"\r\n                    flood-color=\"black\"\r\n                    result=\"flood\"\r\n                    id=\"feFlood6246\" />\r\n            <feComposite\r\n                    in=\"flood\"\r\n                    in2=\"SourceGraphic\"\r\n                    operator=\"in\"\r\n                    result=\"composite1\"\r\n                    id=\"feComposite6248\" />\r\n            <feGaussianBlur\r\n                    in=\"composite1\"\r\n                    stdDeviation=\"3.5\"\r\n                    result=\"blur\"\r\n                    id=\"feGaussianBlur6250\" />\r\n            <feOffset\r\n                    dx=\"2\"\r\n                    dy=\"-2\"\r\n                    result=\"offset\"\r\n                    id=\"feOffset6252\" />\r\n            <feComposite\r\n                    in=\"SourceGraphic\"\r\n                    in2=\"offset\"\r\n                    operator=\"over\"\r\n                    result=\"composite2\"\r\n                    id=\"feComposite6254\" />\r\n        </filter>\r\n    </defs>\r\n\r\n    <style>\r\n        .sisiliano-knob-circle {\r\n            filter: url(\"#filter6244\");\r\n        }\r\n        .sisiliano-border, .sisiliano:focus .sisiliano-knob-circle {\r\n            filter: url(\"#filter6245\");\r\n        }\r\n        .sisiliano-border, .sisiliano:focus .sisiliano-border {\r\n            filter: none;\r\n        }\r\n    </style>\r\n\r\n    <g style=\"display:inline\">\r\n        <circle\r\n                class=\"sisiliano-border\"\r\n                r=\"147\" cx=\"150\"\r\n                cy=\"150\">\r\n        </circle>\r\n        <circle\r\n                class=\"sisiliano-knob-circle sisiliano-knob-background-circle\"\r\n                id=\"circle5634\"\r\n                r=\"130\"\r\n                cx=\"150\"\r\n                cy=\"150\"/>\r\n        <text xmlns=\"http://www.w3.org/2000/svg\" x=\"40\" y=\"170\"\r\n              class=\"unselectable sisiliano-knob-value-text\">\r\n            100\r\n        </text>\r\n        <circle\r\n                class=\"sisiliano-knob-circle sisiliano-knob-value-circle\"\r\n                fill=\"transparent\"\r\n                id=\"circle5636\"\r\n                r=\"130\"\r\n                cx=\"150\"\r\n                cy=\"150\"\r\n                transform=\"rotate(90, 150, 150)\"\r\n                stroke-width=\"20\"/>\r\n    </g>\r\n</svg>","src/controllers/linear-slider/linear-slider.html":"<svg\r\n        aria-hidden=\"true\"\r\n        viewBox=\"0 0 500 80\"\r\n        width=\"100%\"\r\n        height=\"100%\"\r\n        class=\"sisiliano-linear-slider\">\r\n    <defs\r\n            id=\"defs4\">\r\n        <filter\r\n                style=\"color-interpolation-filters:sRGB;\"\r\n                id=\"filter6244\">\r\n            <feFlood\r\n                    flood-opacity=\"0.4\"\r\n                    flood-color=\"black\"\r\n                    result=\"flood\"\r\n                    id=\"feFlood6246\" />\r\n            <feComposite\r\n                    in=\"flood\"\r\n                    in2=\"SourceGraphic\"\r\n                    operator=\"in\"\r\n                    result=\"composite1\"\r\n                    id=\"feComposite6248\" />\r\n            <feGaussianBlur\r\n                    in=\"composite1\"\r\n                    stdDeviation=\"3\"\r\n                    result=\"blur\"\r\n                    id=\"feGaussianBlur6250\" />\r\n            <feOffset\r\n                    dx=\"-1\"\r\n                    dy=\"1\"\r\n                    result=\"offset\"\r\n                    id=\"feOffset6252\" />\r\n            <feComposite\r\n                    in=\"SourceGraphic\"\r\n                    in2=\"offset\"\r\n                    operator=\"over\"\r\n                    result=\"composite2\"\r\n                    id=\"feComposite6254\" />\r\n        </filter>\r\n        <filter\r\n                style=\"color-interpolation-filters:sRGB;\"\r\n                id=\"filter6245\">\r\n            <feFlood\r\n                    flood-opacity=\"0.5\"\r\n                    flood-color=\"black\"\r\n                    result=\"flood\"\r\n                    id=\"feFlood6246\" />\r\n            <feComposite\r\n                    in=\"flood\"\r\n                    in2=\"SourceGraphic\"\r\n                    operator=\"in\"\r\n                    result=\"composite1\"\r\n                    id=\"feComposite6248\" />\r\n            <feGaussianBlur\r\n                    in=\"composite1\"\r\n                    stdDeviation=\"3.5\"\r\n                    result=\"blur\"\r\n                    id=\"feGaussianBlur6250\" />\r\n            <feOffset\r\n                    dx=\"-1\"\r\n                    dy=\"1\"\r\n                    result=\"offset\"\r\n                    id=\"feOffset6252\" />\r\n            <feComposite\r\n                    in=\"SourceGraphic\"\r\n                    in2=\"offset\"\r\n                    operator=\"over\"\r\n                    result=\"composite2\"\r\n                    id=\"feComposite6254\" />\r\n        </filter>\r\n    </defs>\r\n\r\n    <style>\r\n        .sisiliano-linear-slider .sisiliano-linear-slider-background-rect,\r\n        .sisiliano-linear-slider .sisiliano-linear-slider-value-rect,\r\n        .sisiliano-linear-slider .sisiliano-linear-slider-value-circle,\r\n        .sisiliano-linear-slider .sisiliano-linear-slider-value-label {\r\n            filter: url(\"#filter6244\");\r\n        }\r\n\r\n        .sisiliano:focus .sisiliano-linear-slider .sisiliano-linear-slider-background-rect,\r\n        .sisiliano:focus .sisiliano-linear-slider .sisiliano-linear-slider-value-rect {\r\n            filter: url(\"#filter6245\");\r\n        }\r\n    </style>\r\n\r\n    <rect\r\n            class=\"sisiliano-linear-slider-rect sisiliano-linear-slider-background-rect\"\r\n            height=\"8\"\r\n            width=\"420\"\r\n            x=\"40\"\r\n            y=\"37\"/>\r\n    <rect\r\n            class=\"sisiliano-linear-slider-rect sisiliano-linear-slider-value-rect\"\r\n            height=\"10\"\r\n            width=\"200\"\r\n            x=\"40\"\r\n            y=\"36\"/>\r\n    <circle\r\n            class=\"sisiliano-linear-slider-value-circle sisiliano-linear-slider-value-circle-hover\"\r\n            r=\"25\"\r\n            cx=\"115\"\r\n            cy=\"40\">\r\n    </circle>\r\n    <circle\r\n            class=\"sisiliano-linear-slider-value-circle\"\r\n            r=\"16\"\r\n            cx=\"115\"\r\n            cy=\"40\">\r\n    </circle>\r\n    <rect\r\n            class=\"sisiliano-linear-slider-value-label\"\r\n            x=\"10\"\r\n            y=\"0\"\r\n            fill=\"{{color}}\"\r\n            width=\"50\"\r\n            height=\"20\"\r\n            rx=\"5\"\r\n            ry=\"5\">\r\n    </rect>\r\n    <text x=\"10\"\r\n          y=\"15\"\r\n          class=\"unselectable sisiliano-linear-slider-value-text\">\r\n        100\r\n    </text>\r\n</svg>","src/controllers/piano/piano.html":"<div tabindex=\"0\" class=\"sisiliano\" aria-label=\"{{title}} ,{{description}}\" id=\"{{id}}\">\r\n    <svg\r\n            class=\"sisiliano-piano\"\r\n            width=\"100%\"\r\n            height=\"100%\"\r\n            viewBox=\"0 0 {{viewBox.width}} {{viewBox.height}}\">\r\n        <defs\r\n                id=\"defs4\">\r\n            <filter\r\n                    style=\"color-interpolation-filters:sRGB;\"\r\n                    id=\"filter6244\">\r\n                <feFlood\r\n                        flood-opacity=\"0.5\"\r\n                        flood-color=\"black\"\r\n                        result=\"flood\"\r\n                        id=\"feFlood6246\"/>\r\n                <feComposite\r\n                        in=\"flood\"\r\n                        in2=\"SourceGraphic\"\r\n                        operator=\"in\"\r\n                        result=\"composite1\"\r\n                        id=\"feComposite6248\"/>\r\n                <feGaussianBlur\r\n                        in=\"composite1\"\r\n                        stdDeviation=\"3\"\r\n                        result=\"blur\"\r\n                        id=\"feGaussianBlur6250\"/>\r\n                <feOffset\r\n                        dx=\"0\"\r\n                        dy=\"1\"\r\n                        result=\"offset\"\r\n                        id=\"feOffset6252\"/>\r\n                <feComposite\r\n                        in=\"SourceGraphic\"\r\n                        in2=\"offset\"\r\n                        operator=\"over\"\r\n                        result=\"composite2\"\r\n                        id=\"feComposite6254\"/>\r\n            </filter>\r\n            <filter\r\n                    style=\"color-interpolation-filters:sRGB;\"\r\n                    id=\"filter6245\">\r\n                <feFlood\r\n                        flood-opacity=\"0.5\"\r\n                        flood-color=\"black\"\r\n                        result=\"flood\"\r\n                        id=\"feFlood6246\"/>\r\n                <feComposite\r\n                        in=\"flood\"\r\n                        in2=\"SourceGraphic\"\r\n                        operator=\"in\"\r\n                        result=\"composite1\"\r\n                        id=\"feComposite6248\"/>\r\n                <feGaussianBlur\r\n                        in=\"composite1\"\r\n                        stdDeviation=\"8\"\r\n                        result=\"blur\"\r\n                        id=\"feGaussianBlur6250\"/>\r\n                <feOffset\r\n                        dx=\"-3\"\r\n                        dy=\"3.5\"\r\n                        result=\"offset\"\r\n                        id=\"feOffset6252\"/>\r\n                <feComposite\r\n                        in=\"SourceGraphic\"\r\n                        in2=\"offset\"\r\n                        operator=\"over\"\r\n                        result=\"composite2\"\r\n                        id=\"feComposite6254\"/>\r\n            </filter>\r\n            <filter\r\n                    style=\"color-interpolation-filters:sRGB;\"\r\n                    id=\"filter6245\">\r\n                <feFlood\r\n                        flood-opacity=\"0.5\"\r\n                        flood-color=\"black\"\r\n                        result=\"flood\"\r\n                        id=\"feFlood6246\"/>\r\n                <feComposite\r\n                        in=\"flood\"\r\n                        in2=\"SourceGraphic\"\r\n                        operator=\"in\"\r\n                        result=\"composite1\"\r\n                        id=\"feComposite6248\"/>\r\n                <feGaussianBlur\r\n                        in=\"composite1\"\r\n                        stdDeviation=\"3.5\"\r\n                        result=\"blur\"\r\n                        id=\"feGaussianBlur6250\"/>\r\n                <feOffset\r\n                        dx=\"2\"\r\n                        dy=\"-2\"\r\n                        result=\"offset\"\r\n                        id=\"feOffset6252\"/>\r\n                <feComposite\r\n                        in=\"SourceGraphic\"\r\n                        in2=\"offset\"\r\n                        operator=\"over\"\r\n                        result=\"composite2\"\r\n                        id=\"feComposite6254\"/>\r\n            </filter>\r\n        </defs>\r\n\r\n        <style>\r\n            /* These styles have been added seperately as a fix for firefox and IE */\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-white-key {\r\n                filter: url('#filter6244');\r\n            }\r\n\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-black-key {\r\n                filter: url('#filter6244');\r\n            }\r\n\r\n            #{{id}}.sisiliano-border {\r\n                filter: url(\"#filter6245\");\r\n            }\r\n\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-key-pressed,\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-white-key:hover,\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-black-key:hover,\r\n            #{{id}}.sisiliano .sisiliano-piano .sisiliano-piano-key-inactive:hover {\r\n                fill: {{color}};\r\n                stroke: {{color}};\r\n            }\r\n        </style>\r\n        <g style=\"display:inline\">\r\n            <text\r\n                    x=\"{{keyBoard.border.x}}\"\r\n                    y=\"{{keyBoard.border.y}}\"\r\n                    aria-live=\"assertive\"\r\n                    class=\"sisiliano-piano-active-area-status\">\r\n                Piano is active from G to C\r\n            </text>\r\n            <rect\r\n                    class=\"sisiliano-border\"\r\n                    height=\"{{keyBoard.border.height}}\"\r\n                    width=\"{{keyBoard.border.width}}\"\r\n                    x=\"{{keyBoard.border.x}}\"\r\n                    y=\"{{keyBoard.border.y}}\"/>\r\n            {{#each keyBoard.whiteKeys}}\r\n            <rect\r\n                    index=\"{{index}}\"\r\n                    class=\"sisiliano-piano-key sisiliano-piano-white-key\"\r\n                    height=\"{{height}}\"\r\n                    width=\"{{width}}\"\r\n                    x=\"{{x}}\"\r\n                    y=\"{{y}}\"/>\r\n            {{/each}}\r\n            {{#each keyBoard.blackKeys}}\r\n            <rect\r\n                    index=\"{{index}}\"\r\n                    class=\"sisiliano-piano-key sisiliano-piano-black-key\"\r\n                    height=\"{{height}}\"\r\n                    width=\"{{width}}\"\r\n                    x=\"{{x}}\"\r\n                    y=\"{{y}}\"/>\r\n            {{/each}}\r\n        </g>\r\n\r\n        <!--<g style=\"display:inline\">\r\n          <rect\r\n            class=\"sisiliano-piano-key sisiliano-piano-disabledArea\"\r\n            height=\"{{disabledArea.left.height}}\"\r\n            width=\"{{disabledArea.left.width}}\"\r\n            x=\"{{disabledArea.left.x}}\"\r\n            y=\"{{disabledArea.left.y}}\" />\r\n          <rect\r\n            class=\"sisiliano-piano-key sisiliano-piano-disabledArea\"\r\n            height=\"{{disabledArea.right.height}}\"\r\n            width=\"{{disabledArea.right.width}}\"\r\n            x=\"{{disabledArea.right.x}}\"\r\n            y=\"{{disabledArea.right.y}}\" />\r\n        </g>-->\r\n    </svg>\r\n</div>\r\n"};
(function (fluid) {
    "use strict";

    fluid.registerNamespace("sisiliano");

    sisiliano.templates = htmlTempl.templates;



    fluid.registerNamespace("sisiliano.util");
    sisiliano.util.templateCache = {};
    sisiliano.util.getTemplate = function (callback, url) {
        var template = sisiliano.util.templateCache[url];
        if (!template) {
            var source = htmlTempl.templates[url];
            template = Handlebars.compile(source);
            sisiliano.util.templateCache[url] = template;
            callback(template);
        } else {
            callback(template);
        }
    };

    sisiliano.util.addClass = function(elm, className) {
        sisiliano.util.removeClass(elm, className);
        var oldClass = $(elm).attr("class");
        var newClass = oldClass + " " + className;
        $(elm).attr("class", newClass);
    };

    sisiliano.util.removeClass = function(elm, className) {
        var oldClass = $(elm).attr("class");
        var newClass = oldClass.replace(new RegExp(" " + className, "g"), "").replace(new RegExp(className, "g"), "");
        $(elm).attr("class", newClass);
    };

    sisiliano.util.getAngle = function(center, point) {
        var angle = Math.atan(Math.abs((point.x - center.x) / (point.y - center.y))) / (2 * Math.PI);
        if (center.x > point.x) {
            if (center.y > point.y) {
                angle = 0.5 - angle;
            }
        } else {
            if (center.y < point.y) {
                angle = 0.5 - angle;
            }

            angle += 0.5;
        }

        return angle;
    };

    sisiliano.util.isInsideTheCircle = function(center, radius, point) {
        var distanceFromTheCenter = Math.sqrt(Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2));
        return distanceFromTheCenter <= radius;
    };

    fluid.defaults("sisiliano.util.ariaDescription", {
        gradeNames: "fluid.component",
        ariaDescription: "",
        listeners: {
            onCreate: {
                func: "sisiliano.util.ariaDescription.onCreate",
                args: ["{that}"]
            }
        }
    });

    sisiliano.util.ariaDescription.onCreate = function (that) {
        var descriptionsPane = $("#sisiliano-component-guide-descriptions");
        if (descriptionsPane.length === 0) {
            descriptionsPane = $("<div id='sisiliano-component-guide-descriptions' style='visibility: hidden'></div>");
            $("body").append(descriptionsPane);
        }

        var descriptionElementIdOfTheComponent = (that.typeName.replace(/\./g, "-") + "-guide-description").toLowerCase();
        var descriptionElementOfTheComponent = $("#" + descriptionElementIdOfTheComponent);
        if (descriptionElementOfTheComponent.length === 0) {
            descriptionElementOfTheComponent = $("<div id='" + descriptionElementIdOfTheComponent + "'>" + that.options.ariaDescription + "</div>");
            descriptionsPane.append(descriptionElementOfTheComponent);
        }

        that.container.attr("aria-describedby", descriptionElementIdOfTheComponent);
    };
})(fluid);

(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.knob", {
        gradeNames: ["sisiliano.slider"],
        model: {
            radius: 130
        },
        ariaDescription: "Use up and down keys to increase and decrease the value. If you are using the mouse, Drag around the center to adjust the value",
        selectors: {
            controller: ".sisiliano",
            svg: "svg",
            valueLabel: ".sisiliano-knob-value-text",
            valueCircle: ".sisiliano-knob-value-circle",
            knobBackgroundCircle: ".sisiliano-knob-background-circle",
            borderCircle: "sisiliano-knob-circle sisiliano-knob-border-circle",
            circles: ".sisiliano-knob-circle"
        },
        listeners: {
            onCreate: {
                func: "sisiliano.knob.onCreate",
                args: ["{that}"]
            },
            onValueChange: {
                func: "sisiliano.knob.onValueChange",
                args: ["{arguments}.0", "{arguments}.1", "{arguments}.2", "{arguments}.3"]
            },
            onColorChange: {
                func: "sisiliano.knob.onColorChange",
                args: ["{that}", "{that}.model.color"]
            },
            onStatusChange: {
                func: "sisiliano.knob.onStatusChange",
                args: ["{that}", "{that}.model.status.isActive"]
            }
        },
        modelListeners: {
            radius: {
                func: "sisiliano.knob.onRadiusChange",
                args: ["{that}", "{that}.model.radius"]
            }
        }
    });

    sisiliano.knob.onRadiusChange = function (that, radius) {
        that.locate("knobBackgroundCircle").attr("r", radius);
        var circumference = 2 * radius * Math.PI;
        that.applier.change("circumference", circumference);
        that.locate("circles").attr("stroke-dasharray", circumference);
    };

    sisiliano.knob.onStatusChange = function (that, isActive) {
        var className = "sisiliano-knob" + (isActive ? " sisiliano-active" : "");
        d3.select(that.container.get(0)).select(".sisiliano-knob").attr("class", className);
    };

    sisiliano.knob.onValueChange = function (that, obviousValue) {
        var valueRange = that.model.size;
        var offset = ((that.model.circumference / valueRange) * (valueRange - obviousValue)) + "px";
        that.locate("valueCircle").attr("stroke-dashoffset", offset);
    };

    sisiliano.knob.onColorChange = function (that, newColor) {
        that.locate("valueCircle").css("stroke", newColor);
        that.locate("knobBackgroundCircle").css("stroke", newColor);
        that.locate("valueCircle").css("fill", newColor);
        that.locate("knobBackgroundCircle").css("fill", newColor);
        that.locate("valueLabel").css("fill", newColor);
    };

    sisiliano.knob.onCreate = function (that) {
        sisiliano.util.getTemplate(function (template) {
            var html = template(that.model);
            that.container.html(html);
            sisiliano.knob.onRadiusChange(that, that.model.radius);
            that.events.onReady.fire();
            sisiliano.knob.addListeners(that);
        }, "src/controllers/knob/knob.html");
    };

    sisiliano.knob.addListeners = function (that) {
        var mouseMoveHandler = function () {
            var position = d3.mouse(that.container.find("svg").eq(0).get(0));
            var center = {x: 150, y: 150};
            var clickedPosition = {x: position[0], y: position[1]};
            if (that.model.status.isActive) {
                sisiliano.knob.setValueByAngle(that, center, clickedPosition);
                d3.event.preventDefault();
            }
        };

        document.addEventListener("mousemove", function (evt) {
            var svgElm = that.locate("svg");
            if (svgElm && svgElm.length > 0) {
                var svgPosition = svgElm.position();
                var center = {x: svgPosition.left + (svgElm.width() / 2), y: svgPosition.top + (svgElm.height() / 2)};
                var clickedPosition = {x: evt.pageX, y: evt.pageY};
                if (that.model.status.isActive) {
                    sisiliano.knob.setValueByAngle(that, center, clickedPosition);

                    return false;
                }
            }
        });
        document.addEventListener("mouseup", sisiliano.knob.setKnobActiveStatus.bind(this, that, false));

        d3.select(that.container.get(0))
            .on("touchmove", mouseMoveHandler)
            .on("mousemove", mouseMoveHandler);
    };

    sisiliano.knob.setKnobActiveStatus = function (that, status) {
        that.applier.change("status.isActive", status);
    };

    sisiliano.knob.setValueByAngle = function (that, center, clickedPosition) {
        var value = sisiliano.util.getAngle(center, clickedPosition) * that.model.size;
        if (that.model.value !== value) {
            that.applier.change("value", value + that.model.min);
        }
    };
})(fluid);
(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.linearSlider", {
        gradeNames: ["sisiliano.slider"],
        defaultViewBox: [0 ,0, 500, 50],
        ariaDescription: "Linear slider, the value can be adjusted by arrow keys. If you are using the mouse, drag along the slider",
        model: {
            padding: {
                top: 2,
                bottom: 2,
                left: 2,
                right: 2
            },
            color: "green",
            orientation: "vertical", // vertical or horizontal
            title: "linearSlider Controller",
            description: ""
        },
        selectors: {
            controller: ".sisiliano",
            svg: "svg",
            valueLabel: ".sisiliano-linear-slider-value-text",
            valueLabelRect: ".sisiliano-linear-slider-value-label",
            valueRect: ".sisiliano-linear-slider-value-rect",
            backgroundRect: ".sisiliano-linear-slider-background-rect",
            rects: ".sisiliano-linear-slider-rect",
            valueCircle: ".sisiliano-linear-slider-value-circle",
            valueCircleHover: ".sisiliano-linear-slider-value-circle-hover"
        },
        listeners: {
            onCreate: {
                func: "sisiliano.linearSlider.onCreate",
                args: ["{that}"]
            },
            onValueChange: {
                func: "sisiliano.linearSlider.onValueChange",
                args: ["{arguments}.0", "{arguments}.1"]
            },
            onColorChange: {
                func: "sisiliano.linearSlider.onColorChange",
                args: ["{that}", "{that}.model.color"]
            },
            onStatusChange: {
                func: "sisiliano.knob.onStatusChange",
                args: ["{that}", "{that}.model.status.isActive"]
            }
        },
        modelListeners: {
        }
    });

    sisiliano.knob.onStatusChange = function (that, isActive) {
        that.locate("valueCircleHover").css("display", isActive ? "block" : "none");
    };

    sisiliano.linearSlider.onValueChange = function (that, obviousValue) {
        var valueRange = that.model.size;
        var maxWidth = parseInt(that.locate("backgroundRect").attr("width"), null);
        var leftPadding = parseInt(that.locate("backgroundRect").attr("x"), null);
        var newWidth = maxWidth * (obviousValue / valueRange);
        that.locate("valueRect").attr("width", newWidth);
        that.locate("valueCircle").attr("cx", newWidth + leftPadding);
        that.locate("valueLabelRect").attr("x", newWidth + leftPadding - 25);
        that.locate("valueLabel").attr("x", newWidth + 3 + leftPadding - 25);
    };

    sisiliano.linearSlider.onColorChange = function (that, newColor) {
        that.locate("rects").attr("fill", newColor);
        that.locate("valueLabel").attr("fill", "white");
        that.locate("valueCircle").attr("fill", newColor);
    };

    sisiliano.linearSlider.onCreate = function (that) {
        sisiliano.util.getTemplate(function (template) {
            var html = template(that.model);
            that.container.html(html);
            that.events.onReady.fire();
            sisiliano.linearSlider.addListeners(that);
        }, "src/controllers/linear-slider/linear-slider.html");
    };

    sisiliano.linearSlider.setValueByPosition = function (that, clickedPosition) {
        var maxWidth = parseInt(that.locate("backgroundRect").attr("width"), null);
        var leftPadding = parseInt(that.locate("valueRect").attr("x"), null);
        var value = ((clickedPosition.x - leftPadding) / maxWidth) * that.model.size;
        if (that.model.value !== value) {
            that.applier.change("value", value + that.model.min);
        }
    };

    sisiliano.linearSlider.addListeners = function (that) {
        var mouseMoveHandler = function () {
            var position = d3.mouse(that.container.find("svg").eq(0).get(0));
            var clickedPosition = {x: position[0], y: position[1]};
            if (that.model.status.isActive) {
                sisiliano.linearSlider.setValueByPosition(that, clickedPosition);
                d3.event.preventDefault();
            }
        };

        d3.select(that.container.get(0))
            .on("touchmove", mouseMoveHandler)
            .on("mousemove", mouseMoveHandler);
    };
})(fluid);
(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.piano", {
        gradeNames: ["fluid.viewComponent"],
        model: {
            title: "Piano Controller",
            description: "The keys are accessible by mouse and the keyboad as well. Only the active area of the piano is accessible by the keyboard. If you want to move the active area, use left and right keys.",
            color: "#4CAF50",
            keyBoard: {
                keys: [],
                length: 36,
                start: 0,
                whiteKey: {
                    width: 40,
                    height: 150
                },
                blackKey: {
                    width: 27,
                    height: 100
                },
                padding: {
                    top: 20,
                    bottom: 20,
                    left: 20,
                    right: 20
                },
                border: {
                    x: 0,
                    y: 0,
                    width: 600,
                    height: 170
                },
                borderPadding: {
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10
                }
            },
            viewBox: {
                width: 600,
                height: 170
            },
            activeArea: {
                start: 0,
                end: 10
            }
        },
        events: {
            onChange: null,
            onKeyPress: null,
            onKeyRelease: null
        },
        selectors: {
            root: ".sisiliano",
            keyBoard: ".sisiliano-piano-key-board",
            whiteKeys: ".sisiliano-piano-white-key",
            blackKeys: ".sisiliano-piano-black-key",
            keys: ".sisiliano-piano-key",
            activeAreaStatus: ".sisiliano-piano-active-area-status"
        },
        listeners: {
            onCreate: {
                func: "sisiliano.piano.onCreate",
                args: ["{that}", "{that}.dom.keyBoard"]
            }
        },
        modelListeners: {
            "viewBox": {
                func: "sisiliano.piano.onChange",
                args: ["{that}", "{change}"]
            },
            "activeArea.end": {
                func: "sisiliano.piano.onChangeActiveArea",
                args: ["{that}", "{that}.model.keyBoard.keys", "{that}.model.activeArea"]
            },
            "keyBoard.keys": {
                func: "sisiliano.piano.onKeysChange",
                args: ["{that}", "{that}.model.keyBoard.keys"]
            }
        }
    });

    sisiliano.piano.onChange = function () {
    };

    sisiliano.piano.onChangeActiveArea = function (that, keys, activeArea) {
        var allocatedComputerKeysForThePiano = [81, 65, 87, 83, 69, 68, 82, 70, 84, 71, 89, 72,
            85, 74, 73, 75, 79, 76, 80, 186, 219, 222, 221];

        var whiteKeys = sisiliano.piano.getWhiteKeys(keys);

        if (whiteKeys.length > 0) {
            var activeStartKey = whiteKeys[activeArea.start];
            var activeEndKey = whiteKeys[Math.min(activeArea.end, that.model.keyBoard.length - 1)];
            var activeStartIndex = activeStartKey.index;
            var activeEndIndex = activeEndKey.index;
            var activeAreaStatusMessage = "The piano is active from " + sisiliano.piano.getMusicNote(activeStartKey) + " to " + sisiliano.piano.getMusicNote(activeEndKey);
            that.locate("activeAreaStatus").text(activeAreaStatusMessage);

            if (activeStartIndex > 0) {
                var previousKey = keys[activeStartIndex - 1];
                if (previousKey.color === "BLACK") {
                    activeStartIndex--;
                }
            }

            if (activeEndIndex < keys.length - 1) {
                var nextKey = keys[activeEndIndex + 1];
                if (nextKey.color === "BLACK") {
                    activeEndIndex++;
                }
            }

            var allocatedKeyIndex = 0;
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                key.isActive = i >= activeStartIndex && i <= activeEndIndex;

                if (key.isActive && allocatedKeyIndex === 0 && key.color === "WHITE") {
                    allocatedKeyIndex++;
                }

                if (allocatedKeyIndex > 1 && key.color === "WHITE" && keys[i - 1].color === "WHITE") {
                    allocatedKeyIndex++;
                }

                if (key.isActive) {
                    key.keyCode = allocatedComputerKeysForThePiano[allocatedKeyIndex];
                    allocatedKeyIndex++;
                } else {
                    key.keyCode = null;
                }
            }

        }

        //TODO fix
        //that.applier.change("keyBoard.keys", keys);
        sisiliano.piano.onKeysChange(that, keys);
        sisiliano.piano.clearPressedNodes(that);
    };

    sisiliano.piano.onKeysChange = function (that, keys) {
        d3.select(that.container.get(0)).selectAll(".sisiliano-piano-key").each(function () {
            var key = sisiliano.piano.getElementKey(d3.select(this), keys);
            sisiliano.piano.updateKey(that, key, d3.select(this));
        });
    };

    sisiliano.piano.getElementKey = function (element, keys) {
        return keys[element.attr("index")];
    };

    sisiliano.piano.onCreate = function (that) {
        sisiliano.piano.generateKeyboard(that);
        sisiliano.piano.refresh(that);
        sisiliano.piano.appendListeners(that);
    };

    sisiliano.piano.refresh = function (that) {
        sisiliano.util.getTemplate(function (template) {
            that.model.id = "fluid-sisiliano-id-" + that.id;
            that.model.keyBoard.whiteKeys = sisiliano.piano.getWhiteKeys(that.model.keyBoard.keys);
            that.model.keyBoard.blackKeys = sisiliano.piano.getBlackKeys(that.model.keyBoard.keys);
            var html = template(that.model);
            that.container.html(html);

            sisiliano.piano.onChangeActiveArea(that, that.model.keyBoard.keys, that.model.activeArea);
        }, "src/controllers/piano/piano.html");
    };

    sisiliano.piano.moveTabBy = function (that, increaseBy) {
        if (increaseBy) {
            var newActiveArea = {
                start: that.model.activeArea.start + increaseBy,
                end: that.model.activeArea.end + increaseBy
            };
            var whiteKeys = sisiliano.piano.getWhiteKeys(that.model.keyBoard.keys);
            var isValid = newActiveArea.start >= 0 && newActiveArea.start < whiteKeys.length &&
                newActiveArea.end >= 0 && newActiveArea.end < whiteKeys.length &&
                newActiveArea.start < newActiveArea.end;
            if (isValid) {
                that.applier.change("activeArea", newActiveArea);
            }
        }
    };

    sisiliano.piano.clearPressedNodes = function (that) {
        for (var i = 0; i < that.model.keyBoard.keys.length; i++) {
            var key = that.model.keyBoard.keys[i];
            key.isPressed = false;
            sisiliano.piano.updateKey(that, key);
            sisiliano.piano.releaseKey(that, key);
        }
    };

    sisiliano.piano.appendListeners = function (that) {
        var mouseDown = false;

        d3.select(document).on("mouseup", function () {
            mouseDown = false;
        });

        var keyPressHandler = function () {
            mouseDown = true;
            var clickedIndex = d3.select(this).attr("index");
            var clickedKey = that.model.keyBoard.keys[clickedIndex];
            if (mouseDown && !clickedKey.isPressed) {
                clickedKey.isPressed = true;
                sisiliano.piano.updateKey(that, clickedKey);
                sisiliano.piano.playKey(that, clickedKey);
            }
        };

        var keyOverHandler = function () {
            var clickedIndex = d3.select(this).attr("index");
            var clickedKey = that.model.keyBoard.keys[clickedIndex];
            if (mouseDown && !clickedKey.isPressed) {
                clickedKey.isPressed = true;
                sisiliano.piano.updateKey(that, clickedKey);
                sisiliano.piano.playKey(that, clickedKey);
            }

            d3.event.preventDefault();
        };

        var keyUpHandler = function () {
            mouseDown = false;
            var clickedIndex = d3.select(this).attr("index");
            var clickedKey = that.model.keyBoard.keys[clickedIndex];

            clickedKey.isPressed = false;
            sisiliano.piano.updateKey(that, clickedKey);
            sisiliano.piano.releaseKey(that, clickedKey);
        };

        var keyMoveOutHndler = function () {
            var clickedIndex = d3.select(this).attr("index");
            var clickedKey = that.model.keyBoard.keys[clickedIndex];

            clickedKey.isPressed = false;
            sisiliano.piano.updateKey(that, clickedKey);
            sisiliano.piano.releaseKey(that, clickedKey);

            d3.event.preventDefault();
        };

        d3.select(that.container.get(0)).selectAll(".sisiliano-piano-key")
            .on("mousedown", keyPressHandler)
            .on("touchstart", keyPressHandler)
            .on("mouseover", keyOverHandler)
            .on("touchmove", keyOverHandler)
            .on("mouseup", keyUpHandler)
            .on("touchend", keyUpHandler)
            .on("touchcancel", keyMoveOutHndler)
            .on("mouseleave", keyMoveOutHndler);

        d3.select(that.container.get(0)).on("keydown", function () {
            var keyCode = d3.event.keyCode;
            var mappedPianoKey = sisiliano.piano.getKeyByComputerKeyCode(keyCode, that.model.keyBoard.keys);
            if (mappedPianoKey && !mappedPianoKey.isPressed) {
                mappedPianoKey.isPressed = true;
                sisiliano.piano.updateKey(that, mappedPianoKey);
                sisiliano.piano.playKey(that, mappedPianoKey);
            } else {
            }

            //Handel the arrow click
            switch (keyCode) {
                case 37:
                    sisiliano.piano.moveTabBy(that, -1);
                    d3.event.preventDefault();
                    break;
                case 39:
                    sisiliano.piano.moveTabBy(that, 1);
                    d3.event.preventDefault();
                    break;
            }
        });

        d3.select(that.container.get(0)).on("keyup", function () {
            var keyCode = d3.event.keyCode;
            var mappedPianoKey = sisiliano.piano.getKeyByComputerKeyCode(keyCode, that.model.keyBoard.keys);
            if (mappedPianoKey) {
                mappedPianoKey.isPressed = false;
                sisiliano.piano.updateKey(that, mappedPianoKey);
                sisiliano.piano.releaseKey(that, mappedPianoKey);

                d3.event.preventDefault();
            }
        });
    };

    sisiliano.piano.playKey = function (that, key) {
        that.events.onKeyPress.fire(key.index, sisiliano.piano.getFreequency(key.octave, key.octaveIndex));
    };

    sisiliano.piano.releaseKey = function (that, key) {
        that.events.onKeyRelease.fire(key.index);
    };

    sisiliano.piano.updateKey = function (that, key, element) {
        if (!element) {
            element = that.container.find(".sisiliano-piano-key[index='" + key.index + "']");
        }

        var className = key.className;
        className += key.isActive ? " sisiliano-piano-key-active" : " sisiliano-piano-key-inactive";
        className += key.isPressed ? " sisiliano-piano-key-pressed" : "";

        element.attr("class", className);
    };

    sisiliano.piano.getKeyByComputerKeyCode = function (computerKeyCode, keys) {
        var matchingKeys = keys.filter(function (key) {
            return key.keyCode === computerKeyCode;
        });

        if (matchingKeys.length === 0) {
            return null;
        } else {
            return matchingKeys[0];
        }
    };

    sisiliano.piano.getKeysByColor = function (keys, color) {
        return keys.filter(function (key) {
            return key.color === color;
        });
    };

    sisiliano.piano.getFreequency = function (octave, octaveIndex) {
        var frequencyMap = [
            261.626,
            277.183,
            293.665,
            311.127,
            329.628,
            349.228,
            369.994,
            391.995,
            415.305,
            440,
            466.164,
            493.883
        ];

        return Math.pow(2, octave) * frequencyMap[octaveIndex];
    };

    sisiliano.piano.OCTAVE = {
        0: {color: "WHITE", note: "c"},
        1: {color: "BLACK", note: "c#"},
        2: {color: "WHITE", note: "d"},
        3: {color: "BLACK", note: "d#"},
        4: {color: "WHITE", note: "e"},
        5: {color: "WHITE", note: "f"},
        6: {color: "BLACK", note: "f#"},
        7: {color: "WHITE", note: "g"},
        8: {color: "BLACK", note: "g#"},
        9: {color: "WHITE", note: "a"},
        10: {color: "BLACK", note: "a#"},
        11: {color: "WHITE", note: "b"}
    };

    sisiliano.piano.getPianoKey = function (key) {
        return sisiliano.piano.OCTAVE[key.octaveIndex];
    };


    sisiliano.piano.getMusicNote = function (key) {
        var pianoKey = sisiliano.piano.getPianoKey(key);

        return pianoKey.note + " in octave " + (key.octave + 1);
    };

    sisiliano.piano.getWhiteKeys = function (keys) {
        return sisiliano.piano.getKeysByColor(keys, "WHITE");
    };

    sisiliano.piano.getBlackKeys = function (keys) {
        return sisiliano.piano.getKeysByColor(keys, "BLACK");
    };

    sisiliano.piano.generateKeyboard = function (that) {
        that.model.keyBoard.blackKey.width = (((that.model.keyBoard.whiteKey.width - 1) / 3) * 2) + 1;
        that.model.keyBoard.blackKey.height = (that.model.keyBoard.whiteKey.height / 3) * 2;
        that.model.keyBoard.keys = [];

        var keyCount = {
            whiteKeys: 0,
            blackKeys: 0
        };
        var index = 0;
        for (var x = that.model.keyBoard.start; x < that.model.keyBoard.length + that.model.keyBoard.start; x++, index++) {
            var octaveIndex = x % 12;
            var key;
            if (sisiliano.piano.OCTAVE[octaveIndex].color === "WHITE") {
                key = {
                    color: "WHITE",
                    x: that.model.keyBoard.padding.left + (keyCount.whiteKeys * that.model.keyBoard.whiteKey.width),
                    y: that.model.keyBoard.padding.top,
                    width: that.model.keyBoard.whiteKey.width - 1,
                    height: that.model.keyBoard.whiteKey.height,
                    index: index,
                    octave: Math.floor(x / 12),
                    octaveIndex: octaveIndex,
                    className: "sisiliano-piano-key sisiliano-piano-white-key"
                };

                keyCount.whiteKeys++;
            } else if (sisiliano.piano.OCTAVE[octaveIndex].color === "BLACK") {
                key = {
                    color: "BLACK",
                    x: that.model.keyBoard.padding.left + ((keyCount.whiteKeys - 1) * that.model.keyBoard.whiteKey.width) + ((that.model.keyBoard.whiteKey.width / 3) * 2),
                    y: that.model.keyBoard.padding.top,
                    width: that.model.keyBoard.blackKey.width,
                    height: that.model.keyBoard.blackKey.height,
                    index: index,
                    octave: Math.floor(x / 12),
                    octaveIndex: octaveIndex,
                    className: "sisiliano-piano-key sisiliano-piano-black-key"
                };

                keyCount.blackKeys++;
            }

            that.model.keyBoard.keys.push(key);
        }

        //Adjust the viewBox to fit with the entire div
        that.model.viewBox.width = (keyCount.whiteKeys * that.model.keyBoard.whiteKey.width) +
            that.model.keyBoard.padding.left + that.model.keyBoard.padding.right;
        that.model.viewBox.height = that.model.keyBoard.whiteKey.height +
            that.model.keyBoard.padding.top + that.model.keyBoard.padding.bottom;

        //Adjust the border position and layout
        that.model.keyBoard.border.width = (keyCount.whiteKeys * that.model.keyBoard.whiteKey.width) +
            that.model.keyBoard.borderPadding.left + that.model.keyBoard.borderPadding.right;
        that.model.keyBoard.border.height = that.model.keyBoard.whiteKey.height +
            that.model.keyBoard.borderPadding.top + that.model.keyBoard.borderPadding.bottom;
        that.model.keyBoard.border.x = that.model.keyBoard.keys[0].x - that.model.keyBoard.borderPadding.left;
        that.model.keyBoard.border.y = that.model.keyBoard.keys[0].y - that.model.keyBoard.borderPadding.top;

        that.applier.change("", that.model);
    };
})(fluid);
(function (fluid) {
    "use strict";

    fluid.defaults("sisiliano.slider", {
        gradeNames: ["sisiliano.util.ariaDescription", "fluid.viewComponent"],
        model: {
            min: 0,
            max: 100,
            color: "#009688",
            value: null,
            size: 100,
            tickValue: 1,
            status: {
                isActive: false
            },
            formatValue: function (value) {
                return Math.round(value * 100) / 100.0;
            },
            title: "Abstract Slider Controller"
        },
        ariaDescription: "",
        selectors: {
            controller: ".sisiliano",
            svg: "svg",
            valueLabel: ".sisiliano-slider-value-text"
        },
        events: {
            onCreate: null,
            onReady: null,
            onChange: null,
            onColorChange: null,
            onValueChange: null,
            onStatusChange: null
        },
        listeners: {
            onCreate: [
                {
                    func: "sisiliano.slider.validateInputs",
                    args: ["{that}"]
                },
                {
                    func: "sisiliano.slider.onInit",
                    args: ["{that}"]
                },
                {
                    func: "sisiliano.slider.onTitleChange",
                    args: ["{that}", "{that}.model.title"]
                },
                {
                    func: "sisiliano.slider.onDescriptionChange",
                    args: ["{that}", "{that}.model.description"]
                }
            ],
            onReady: [
                {
                    func: "{that}.events.onColorChange.fire",
                    args: ["{that}", "{that}.model.color"]
                },
                {
                    func: "sisiliano.slider.onMinValueChange",
                    args: ["{that}", "{that}.model.min"]
                },
                {
                    func: "sisiliano.slider.onMaxValueChange",
                    args: ["{that}", "{that}.model.max"]
                }
            ]
        },
        modelListeners: {
            "value": {
                func: "sisiliano.slider.onValueChange",
                args: ["{that}", "{that}.model.value"]
            },
            "formatValue": {
                func: "sisiliano.slider.onValueChange",
                args: ["{that}", "{that}.model.value"]
            },
            "color": {
                func: "{that}.events.onColorChange.fire",
                args: ["{that}", "{that}.model.color"]
            },
            "min": {
                func: "sisiliano.slider.onMinValueChange",
                args: ["{that}", "{that}.model.min"]
            },
            "max": {
                func: "sisiliano.slider.onMaxValueChange",
                args: ["{that}", "{that}.model.max"]
            },
            "status.isActive": {
                func: "sisiliano.slider.onStatusChange",
                args: ["{that}", "{that}.model.status.isActive"]
            },
            "title": {
                func: "sisiliano.slider.onTitleChange",
                args: ["{that}", "{that}.model.title"]
            },
            "description": {
                func: "sisiliano.slider.onDescriptionChange",
                args: ["{that}", "{that}.model.description"]
            }
        }
    });

    sisiliano.slider.onTitleChange = function () {
        //that.container.attr("aria-label", title);
    };

    sisiliano.slider.onStatusChange = function (that) {
        that.events.onStatusChange.fire();
    };

    sisiliano.slider.onDescriptionChange = function () {
        //that.container.attr("aria-describedby", description);
    };

    sisiliano.slider.onInit = function (that) {
        that.container.attr("tabindex", 0);
        that.container.addClass("sisiliano");
        that.container.attr("role", "slider");

        sisiliano.slider.addListeners(that);
    };

    sisiliano.slider.onMinValueChange = function (that, min) {
        that.container.attr("aria-valuemin", min);
        that.applier.change("size", sisiliano.slider.getSize(that));
        sisiliano.slider.onValueChange(that, that.model.value);
    };

    sisiliano.slider.onMaxValueChange = function (that, max) {
        that.container.attr("aria-valuemax", max);
        that.applier.change("size", sisiliano.slider.getSize(that));
        sisiliano.slider.onValueChange(that, that.model.value);
    };

    sisiliano.slider.onValueChange = function (that, newValue) {
        if (typeof newValue !== "number") {
            sisiliano.slider.updateTheValueInUI(that, that.model.min);
        } if (newValue < that.model.min) {
            newValue = that.model.min;
            that.applier.change("value", newValue);
        } else if (newValue > that.model.max) {
            newValue = that.model.max;
            that.applier.change("value", newValue);
        } else {
            sisiliano.slider.updateTheValueInUI(that, newValue);
        }
    };

    sisiliano.slider.updateTheValueInUI = function (that, newValue) {
        var formatedValue = newValue;
        if (that.model.formatValue && typeof that.model.formatValue === "function") {
            formatedValue = that.model.formatValue(newValue);
        }

        //Update the aria-valuenow
        that.container.attr("aria-valuenow", formatedValue);

        //Update the value in the UI
        that.locate("valueLabel").text(formatedValue);
        that.events.onValueChange.fire(that, sisiliano.slider.getObviousValue(that, that.model.value));
    };

    sisiliano.slider.addListeners = function (that) {
        var keyDownHandler = function () {
            var currentValue = sisiliano.slider.getValue(that);
            if (d3.event.keyCode === 38 || d3.event.keyCode === 39) {
                that.applier.change("value", currentValue + that.model.tickValue);
                d3.event.preventDefault();
            } else if (d3.event.keyCode === 37 || d3.event.keyCode === 40) {
                that.applier.change("value", currentValue - that.model.tickValue);
                d3.event.preventDefault();
            }
        };

        d3.select(that.container.get(0))
            .on("keydown", keyDownHandler)
            .on("mousedown", sisiliano.slider.setSliderActiveStatus.bind(this, that, true))
            .on("touchstart", sisiliano.slider.setSliderActiveStatus.bind(this, that, true))
            .on("mouseup", sisiliano.slider.setSliderActiveStatus.bind(this, that, false))
            .on("touchend", sisiliano.slider.setSliderActiveStatus.bind(this, that, false));
    };

    sisiliano.slider.setSliderActiveStatus = function (that, status) {
        that.applier.change("status.isActive", status);
    };

    sisiliano.slider.getValue = function (that) {
        if (typeof that.model.value === "number") {
            return that.model.value;
        } else {
            return that.model.min;
        }
    };

    sisiliano.slider.validateInputs = function (that) {
        //TODO modified according to the standards of infusion
        if (that.model.min >= that.model.max) {
            throw new Error("Min should be less than max");
        }
    };

    sisiliano.slider.getSize = function (that) {
        return Math.abs(that.model.max - that.model.min);
    };

    sisiliano.slider.getValue = function (that) {
        if (typeof that.model.value === "number") {
            return that.model.value;
        } else {
            return that.model.min;
        }
    };

    sisiliano.slider.getObviousValue = function (that, value) {
        return value - that.model.min;
    };
})(fluid);