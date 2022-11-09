var wms_layers = [];


        var lyr_StamenToner_0 = new ol.layer.Tile({
            'title': 'Stamen Toner',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'
            })
        });
var format_JuteMills_1 = new ol.format.GeoJSON();
var features_JuteMills_1 = format_JuteMills_1.readFeatures(json_JuteMills_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JuteMills_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JuteMills_1.addFeatures(features_JuteMills_1);
var lyr_JuteMills_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JuteMills_1, 
                style: style_JuteMills_1,
                interactive: true,
                title: '<img src="styles/legend/JuteMills_1.png" /> Jute Mills'
            });
var format_NewInfrastructure_2 = new ol.format.GeoJSON();
var features_NewInfrastructure_2 = format_NewInfrastructure_2.readFeatures(json_NewInfrastructure_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewInfrastructure_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewInfrastructure_2.addFeatures(features_NewInfrastructure_2);
var lyr_NewInfrastructure_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NewInfrastructure_2, 
                style: style_NewInfrastructure_2,
                interactive: true,
                title: '<img src="styles/legend/NewInfrastructure_2.png" /> New Infrastructure'
            });
var format_StudyMills_3 = new ol.format.GeoJSON();
var features_StudyMills_3 = format_StudyMills_3.readFeatures(json_StudyMills_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyMills_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyMills_3.addFeatures(features_StudyMills_3);
var lyr_StudyMills_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StudyMills_3, 
                style: style_StudyMills_3,
                interactive: true,
                title: '<img src="styles/legend/StudyMills_3.png" /> Study Mills'
            });

lyr_StamenToner_0.setVisible(true);lyr_JuteMills_1.setVisible(true);lyr_NewInfrastructure_2.setVisible(true);lyr_StudyMills_3.setVisible(true);
var layersList = [lyr_StamenToner_0,lyr_JuteMills_1,lyr_NewInfrastructure_2,lyr_StudyMills_3];
lyr_JuteMills_1.set('fieldAliases', {'Mil_ID': 'Mil_ID', 'Full Addre': 'Full Addre', 'Map Label': 'Map Label', 'Mil Corpor': 'Mil Corpor', 'IJMA_Mem': 'IJMA_Mem', 'Mill Name': 'Mill Name', 'Mill Addre': 'Mill Addre', 'Mill Distr': 'Mill Distr', 'Mill State': 'Mill State', 'Mill Zip': 'Mill Zip', 'Mil_Lat': 'Mil_Lat', 'Mil_Long': 'Mil_Long', 'Open_13': 'Open_13', 'Looms_13': 'Looms_13', 'Open_19': 'Open_19', 'Looms_19': 'Looms_19', 'Employ': 'Employ', 'GO_Nov_18': 'GO_Nov_18', 'GO_Dec_18': 'GO_Dec_18', 'GO_Jan_19': 'GO_Jan_19', 'GO_Feb_19': 'GO_Feb_19', 'GO_Mar_19': 'GO_Mar_19', 'GO_Apr_19': 'GO_Apr_19', 'GO_May_19': 'GO_May_19', 'GO_June_19': 'GO_June_19', 'GO_July_19': 'GO_July_19', 'GO_Aug_19': 'GO_Aug_19', 'GO_Sept_19': 'GO_Sept_19', 'GO_Oct_19': 'GO_Oct_19', 'GO_Nov_19': 'GO_Nov_19', 'GO_Ord_Tot': 'GO_Ord_Tot', 'Frac_Gov_T': 'Frac_Gov_T', 'Frac_Close': 'Frac_Close', 'Perc_Close': 'Perc_Close', });
lyr_NewInfrastructure_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_StudyMills_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JuteMills_1.set('fieldImages', {'Mil_ID': 'Hidden', 'Full Addre': 'TextEdit', 'Map Label': 'Hidden', 'Mil Corpor': 'TextEdit', 'IJMA_Mem': 'Hidden', 'Mill Name': 'TextEdit', 'Mill Addre': 'TextEdit', 'Mill Distr': 'TextEdit', 'Mill State': 'Hidden', 'Mill Zip': 'Hidden', 'Mil_Lat': 'Hidden', 'Mil_Long': 'Hidden', 'Open_13': 'Hidden', 'Looms_13': 'Hidden', 'Open_19': 'Hidden', 'Looms_19': 'Hidden', 'Employ': 'Hidden', 'GO_Nov_18': 'Hidden', 'GO_Dec_18': 'Hidden', 'GO_Jan_19': 'Hidden', 'GO_Feb_19': 'Hidden', 'GO_Mar_19': 'Hidden', 'GO_Apr_19': 'Hidden', 'GO_May_19': 'Hidden', 'GO_June_19': 'Hidden', 'GO_July_19': 'Hidden', 'GO_Aug_19': 'Hidden', 'GO_Sept_19': 'Hidden', 'GO_Oct_19': 'TextEdit', 'GO_Nov_19': 'Hidden', 'GO_Ord_Tot': 'Hidden', 'Frac_Gov_T': 'Hidden', 'Frac_Close': 'Hidden', 'Perc_Close': 'Hidden', });
lyr_NewInfrastructure_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_StudyMills_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_JuteMills_1.set('fieldLabels', {'Full Addre': 'inline label', 'Mil Corpor': 'inline label', 'Mill Name': 'inline label', 'Mill Addre': 'inline label', 'Mill Distr': 'inline label', 'GO_Oct_19': 'inline label', });
lyr_NewInfrastructure_2.set('fieldLabels', {'Name': 'inline label', });
lyr_StudyMills_3.set('fieldLabels', {'Name': 'inline label', });
lyr_StudyMills_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});