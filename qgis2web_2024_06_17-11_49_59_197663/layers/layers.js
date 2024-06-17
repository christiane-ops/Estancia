var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AG_ESTANCIA_23_1 = new ol.format.GeoJSON();
var features_AG_ESTANCIA_23_1 = format_AG_ESTANCIA_23_1.readFeatures(json_AG_ESTANCIA_23_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AG_ESTANCIA_23_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AG_ESTANCIA_23_1.addFeatures(features_AG_ESTANCIA_23_1);
var lyr_AG_ESTANCIA_23_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AG_ESTANCIA_23_1, 
                style: style_AG_ESTANCIA_23_1,
                popuplayertitle: "AG_ESTANCIA_23",
                interactive: true,
                    title: '<img src="styles/legend/AG_ESTANCIA_23_1.png" /> AG_ESTANCIA_23'
                });
var format_280320305000012_2 = new ol.format.GeoJSON();
var features_280320305000012_2 = format_280320305000012_2.readFeatures(json_280320305000012_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280320305000012_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280320305000012_2.addFeatures(features_280320305000012_2);
var lyr_280320305000012_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280320305000012_2, 
                style: style_280320305000012_2,
                popuplayertitle: "280320305000012",
                interactive: true,
                    title: '<img src="styles/legend/280320305000012_2.png" /> 280320305000012'
                });
var format_280300505000037_3 = new ol.format.GeoJSON();
var features_280300505000037_3 = format_280300505000037_3.readFeatures(json_280300505000037_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280300505000037_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280300505000037_3.addFeatures(features_280300505000037_3);
var lyr_280300505000037_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280300505000037_3, 
                style: style_280300505000037_3,
                popuplayertitle: "280300505000037",
                interactive: true,
                    title: '<img src="styles/legend/280300505000037_3.png" /> 280300505000037'
                });
var format_280300505000048_4 = new ol.format.GeoJSON();
var features_280300505000048_4 = format_280300505000048_4.readFeatures(json_280300505000048_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280300505000048_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280300505000048_4.addFeatures(features_280300505000048_4);
var lyr_280300505000048_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280300505000048_4, 
                style: style_280300505000048_4,
                popuplayertitle: "280300505000048",
                interactive: true,
                    title: '<img src="styles/legend/280300505000048_4.png" /> 280300505000048'
                });
var format_280300505000009_5 = new ol.format.GeoJSON();
var features_280300505000009_5 = format_280300505000009_5.readFeatures(json_280300505000009_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280300505000009_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280300505000009_5.addFeatures(features_280300505000009_5);
var lyr_280300505000009_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280300505000009_5, 
                style: style_280300505000009_5,
                popuplayertitle: "280300505000009",
                interactive: true,
                    title: '<img src="styles/legend/280300505000009_5.png" /> 280300505000009'
                });
var format_280067005000054_6 = new ol.format.GeoJSON();
var features_280067005000054_6 = format_280067005000054_6.readFeatures(json_280067005000054_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280067005000054_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280067005000054_6.addFeatures(features_280067005000054_6);
var lyr_280067005000054_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280067005000054_6, 
                style: style_280067005000054_6,
                popuplayertitle: "280067005000054",
                interactive: true,
                    title: '<img src="styles/legend/280067005000054_6.png" /> 280067005000054'
                });
var format_280067005000055_7 = new ol.format.GeoJSON();
var features_280067005000055_7 = format_280067005000055_7.readFeatures(json_280067005000055_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280067005000055_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280067005000055_7.addFeatures(features_280067005000055_7);
var lyr_280067005000055_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280067005000055_7, 
                style: style_280067005000055_7,
                popuplayertitle: "280067005000055",
                interactive: true,
                    title: '<img src="styles/legend/280067005000055_7.png" /> 280067005000055'
                });
var format_280170205000013_8 = new ol.format.GeoJSON();
var features_280170205000013_8 = format_280170205000013_8.readFeatures(json_280170205000013_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280170205000013_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280170205000013_8.addFeatures(features_280170205000013_8);
var lyr_280170205000013_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280170205000013_8, 
                style: style_280170205000013_8,
                popuplayertitle: "280170205000013",
                interactive: true,
                    title: '<img src="styles/legend/280170205000013_8.png" /> 280170205000013'
                });
var format_280510905000005_9 = new ol.format.GeoJSON();
var features_280510905000005_9 = format_280510905000005_9.readFeatures(json_280510905000005_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280510905000005_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280510905000005_9.addFeatures(features_280510905000005_9);
var lyr_280510905000005_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280510905000005_9, 
                style: style_280510905000005_9,
                popuplayertitle: "280510905000005",
                interactive: true,
                    title: '<img src="styles/legend/280510905000005_9.png" /> 280510905000005'
                });
var format_280170205000046_10 = new ol.format.GeoJSON();
var features_280170205000046_10 = format_280170205000046_10.readFeatures(json_280170205000046_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280170205000046_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280170205000046_10.addFeatures(features_280170205000046_10);
var lyr_280170205000046_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280170205000046_10, 
                style: style_280170205000046_10,
                popuplayertitle: "280170205000046",
                interactive: true,
                    title: '<img src="styles/legend/280170205000046_10.png" /> 280170205000046'
                });
var format_280320305000083_11 = new ol.format.GeoJSON();
var features_280320305000083_11 = format_280320305000083_11.readFeatures(json_280320305000083_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280320305000083_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280320305000083_11.addFeatures(features_280320305000083_11);
var lyr_280320305000083_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280320305000083_11, 
                style: style_280320305000083_11,
                popuplayertitle: "280320305000083",
                interactive: true,
                    title: '<img src="styles/legend/280320305000083_11.png" /> 280320305000083'
                });
var format_280630505000034_12 = new ol.format.GeoJSON();
var features_280630505000034_12 = format_280630505000034_12.readFeatures(json_280630505000034_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280630505000034_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280630505000034_12.addFeatures(features_280630505000034_12);
var lyr_280630505000034_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280630505000034_12, 
                style: style_280630505000034_12,
                popuplayertitle: "280630505000034",
                interactive: true,
                    title: '<img src="styles/legend/280630505000034_12.png" /> 280630505000034'
                });
var format_280630505000035_13 = new ol.format.GeoJSON();
var features_280630505000035_13 = format_280630505000035_13.readFeatures(json_280630505000035_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280630505000035_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280630505000035_13.addFeatures(features_280630505000035_13);
var lyr_280630505000035_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280630505000035_13, 
                style: style_280630505000035_13,
                popuplayertitle: "280630505000035",
                interactive: true,
                    title: '<img src="styles/legend/280630505000035_13.png" /> 280630505000035'
                });
var format_280067005000034_14 = new ol.format.GeoJSON();
var features_280067005000034_14 = format_280067005000034_14.readFeatures(json_280067005000034_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280067005000034_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280067005000034_14.addFeatures(features_280067005000034_14);
var lyr_280067005000034_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280067005000034_14, 
                style: style_280067005000034_14,
                popuplayertitle: "280067005000034",
                interactive: true,
                    title: '<img src="styles/legend/280067005000034_14.png" /> 280067005000034'
                });
var format_280750105000058_15 = new ol.format.GeoJSON();
var features_280750105000058_15 = format_280750105000058_15.readFeatures(json_280750105000058_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280750105000058_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280750105000058_15.addFeatures(features_280750105000058_15);
var lyr_280750105000058_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280750105000058_15, 
                style: style_280750105000058_15,
                popuplayertitle: "280750105000058",
                interactive: true,
                    title: '<img src="styles/legend/280750105000058_15.png" /> 280750105000058'
                });
var format_280750105000059_16 = new ol.format.GeoJSON();
var features_280750105000059_16 = format_280750105000059_16.readFeatures(json_280750105000059_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280750105000059_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280750105000059_16.addFeatures(features_280750105000059_16);
var lyr_280750105000059_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280750105000059_16, 
                style: style_280750105000059_16,
                popuplayertitle: "280750105000059",
                interactive: true,
                    title: '<img src="styles/legend/280750105000059_16.png" /> 280750105000059'
                });
var format_280760005000026_17 = new ol.format.GeoJSON();
var features_280760005000026_17 = format_280760005000026_17.readFeatures(json_280760005000026_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280760005000026_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280760005000026_17.addFeatures(features_280760005000026_17);
var lyr_280760005000026_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280760005000026_17, 
                style: style_280760005000026_17,
                popuplayertitle: "280760005000026",
                interactive: true,
                    title: '<img src="styles/legend/280760005000026_17.png" /> 280760005000026'
                });
var group_CENFE_SETEMBRO_PNADC_OUT = new ol.layer.Group({
                                layers: [lyr_280067005000034_14,lyr_280750105000058_15,lyr_280750105000059_16,lyr_280760005000026_17,],
                                fold: "open",
                                title: "CENFE_SETEMBRO_PNADC_OUT"});
var group_CNEFE_OUTUBRO_PNADC_NOV = new ol.layer.Group({
                                layers: [lyr_280170205000046_10,lyr_280320305000083_11,lyr_280630505000034_12,lyr_280630505000035_13,],
                                fold: "open",
                                title: "CNEFE_OUTUBRO_PNADC_NOV"});
var group_CNEFE_NOVEMBRO_PNADC_DEZ = new ol.layer.Group({
                                layers: [lyr_280067005000054_6,lyr_280067005000055_7,lyr_280170205000013_8,lyr_280510905000005_9,],
                                fold: "open",
                                title: "CNEFE_NOVEMBRO_PNADC_DEZ"});
var group_CNEFE_DEZEMBRO_PNADC_JAN = new ol.layer.Group({
                                layers: [lyr_280320305000012_2,lyr_280300505000037_3,lyr_280300505000048_4,lyr_280300505000009_5,],
                                fold: "open",
                                title: "CNEFE_DEZEMBRO_PNADC_JAN"});

lyr_OSMStandard_0.setVisible(true);lyr_AG_ESTANCIA_23_1.setVisible(true);lyr_280320305000012_2.setVisible(true);lyr_280300505000037_3.setVisible(true);lyr_280300505000048_4.setVisible(true);lyr_280300505000009_5.setVisible(true);lyr_280067005000054_6.setVisible(true);lyr_280067005000055_7.setVisible(true);lyr_280170205000013_8.setVisible(true);lyr_280510905000005_9.setVisible(true);lyr_280170205000046_10.setVisible(true);lyr_280320305000083_11.setVisible(true);lyr_280630505000034_12.setVisible(true);lyr_280630505000035_13.setVisible(true);lyr_280067005000034_14.setVisible(true);lyr_280750105000058_15.setVisible(true);lyr_280750105000059_16.setVisible(true);lyr_280760005000026_17.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AG_ESTANCIA_23_1,group_CNEFE_DEZEMBRO_PNADC_JAN,group_CNEFE_NOVEMBRO_PNADC_DEZ,group_CNEFE_OUTUBRO_PNADC_NOV,group_CENFE_SETEMBRO_PNADC_OUT];
lyr_AG_ESTANCIA_23_1.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280320305000012_2.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280300505000037_3.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280300505000048_4.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280300505000009_5.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280067005000054_6.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280067005000055_7.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280170205000013_8.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280510905000005_9.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280170205000046_10.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280320305000083_11.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280630505000034_12.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280630505000035_13.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280067005000034_14.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280750105000058_15.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280750105000059_16.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME': 'NOME', });
lyr_280760005000026_17.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SITU_TIPO': 'SITU_TIPO', 'NOME': 'NOME', });
lyr_AG_ESTANCIA_23_1.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280320305000012_2.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280300505000037_3.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280300505000048_4.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280300505000009_5.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280067005000054_6.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280067005000055_7.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280170205000013_8.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280510905000005_9.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280170205000046_10.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280320305000083_11.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280630505000034_12.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280630505000035_13.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280067005000034_14.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280750105000058_15.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280750105000059_16.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME': '', });
lyr_280760005000026_17.set('fieldImages', {'COD_SETOR': '', 'SITU_TIPO': '', 'NOME': '', });
lyr_AG_ESTANCIA_23_1.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280320305000012_2.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280300505000037_3.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280300505000048_4.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280300505000009_5.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280067005000054_6.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280067005000055_7.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280170205000013_8.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280510905000005_9.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280170205000046_10.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280320305000083_11.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280630505000034_12.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280630505000035_13.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280067005000034_14.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280750105000058_15.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280750105000059_16.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME': 'inline label - always visible', });
lyr_280760005000026_17.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SITU_TIPO': 'inline label - always visible', 'NOME': 'inline label - always visible', });
lyr_280760005000026_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});