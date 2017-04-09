$(document).ready(function () {
    setupTimout();
});

var setupTimout = function () {
    window.setTimeout(switchFeatureImage, 6000);
}

var switchFeatureImage = function () {
    var features = $('#features').children();
    var currentFeatureIndex = findCurrentFeature(features);
    switchFeature(currentFeatureIndex, features);
}

var findCurrentFeature = function (features) {
    var currentFeatureIndex = -1;

    for (i = 0; i < features.length; i++) {
        var $feature = $(features[i]);
        if ($feature.is(":visible")) {
            currentFeatureIndex = i;
            break;
        }
    }

    if (currentFeatureIndex === -1) {
        currentFeatureIndex = 0;
    }

    return currentFeatureIndex;
}

var switchFeature = function (currentFeatureIndex, features) {
    var nextFeatureIndex = currentFeatureIndex + 1;
    if (nextFeatureIndex > (features.length - 1)) {
        nextFeatureIndex = 0;
    }

    $(features[currentFeatureIndex]).fadeOut(2500, function () {
        $(features[nextFeatureIndex]).fadeIn(2500);
        setupTimout();
    });
}