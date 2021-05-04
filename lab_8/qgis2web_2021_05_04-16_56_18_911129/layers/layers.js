var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_Population_1 = new ol.format.GeoJSON();
var features_Population_1 = format_Population_1.readFeatures(json_Population_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Population_1.addFeatures(features_Population_1);
var lyr_Population_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Population_1, 
                style: style_Population_1,
                interactive: true,
    title: 'Population<br />\
    <img src="styles/legend/Population_1_0.png" /> 0 - 63<br />\
    <img src="styles/legend/Population_1_1.png" /> 63 - 83<br />\
    <img src="styles/legend/Population_1_2.png" /> 83 - 94<br />'
        });
var format_Income_2 = new ol.format.GeoJSON();
var features_Income_2 = format_Income_2.readFeatures(json_Income_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Income_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Income_2.addFeatures(features_Income_2);
var lyr_Income_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Income_2, 
                style: style_Income_2,
                interactive: true,
    title: 'Income<br />\
    <img src="styles/legend/Income_2_0.png" /> 0 - 89689<br />\
    <img src="styles/legend/Income_2_1.png" /> 89689 - 118151<br />\
    <img src="styles/legend/Income_2_2.png" /> 118151 - 195188<br />'
        });

lyr_CartoLight_0.setVisible(true);lyr_Population_1.setVisible(true);lyr_Income_2.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_Population_1,lyr_Income_2];
lyr_Population_1.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'total_popE': 'total_popE', 'total_popM': 'total_popM', 'white_popE': 'white_popE', 'white_popM': 'white_popM', 'incomeE': 'Estimated Income', 'incomeM': 'incomeM', 'percentage_white': 'percentage_white', 'bi_class': 'bi_class', });
lyr_Income_2.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'Name', 'total_popE': 'Estiamted Total Population', 'total_popM': 'total_popM', 'white_popE': 'white_popE', 'white_popM': 'white_popM', 'incomeE': 'Estimated Anual Household Income', 'incomeM': 'incomeM', 'percentage_white': 'Percentage of Population White', 'bi_class': 'bi_class', });
lyr_Population_1.set('fieldImages', {'GEOID': 'Hidden', 'NAME': 'Hidden', 'total_popE': 'Hidden', 'total_popM': 'Hidden', 'white_popE': 'Hidden', 'white_popM': 'Hidden', 'incomeE': 'Hidden', 'incomeM': 'Hidden', 'percentage_white': 'Hidden', 'bi_class': 'Hidden', });
lyr_Income_2.set('fieldImages', {'GEOID': 'Hidden', 'NAME': 'TextEdit', 'total_popE': 'TextEdit', 'total_popM': 'Hidden', 'white_popE': 'Hidden', 'white_popM': 'Hidden', 'incomeE': 'TextEdit', 'incomeM': 'Hidden', 'percentage_white': 'TextEdit', 'bi_class': 'Hidden', });
lyr_Population_1.set('fieldLabels', {});
lyr_Income_2.set('fieldLabels', {'NAME': 'header label', 'total_popE': 'inline label', 'incomeE': 'inline label', 'percentage_white': 'inline label', });
lyr_Income_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});