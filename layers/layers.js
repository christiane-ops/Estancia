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
var format_280067005000054_2 = new ol.format.GeoJSON();
var features_280067005000054_2 = format_280067005000054_2.readFeatures(json_280067005000054_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280067005000054_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280067005000054_2.addFeatures(features_280067005000054_2);
var lyr_280067005000054_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280067005000054_2, 
                style: style_280067005000054_2,
                popuplayertitle: "280067005000054",
                interactive: true,
                    title: '<img src="styles/legend/280067005000054_2.png" /> 280067005000054'
                });
var format_280067005000055_3 = new ol.format.GeoJSON();
var features_280067005000055_3 = format_280067005000055_3.readFeatures(json_280067005000055_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280067005000055_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280067005000055_3.addFeatures(features_280067005000055_3);
var lyr_280067005000055_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280067005000055_3, 
                style: style_280067005000055_3,
                popuplayertitle: "280067005000055",
                interactive: true,
                    title: '<img src="styles/legend/280067005000055_3.png" /> 280067005000055'
                });
var format_280170205000013_4 = new ol.format.GeoJSON();
var features_280170205000013_4 = format_280170205000013_4.readFeatures(json_280170205000013_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280170205000013_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280170205000013_4.addFeatures(features_280170205000013_4);
var lyr_280170205000013_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280170205000013_4, 
                style: style_280170205000013_4,
                popuplayertitle: "280170205000013",
                interactive: true,
                    title: '<img src="styles/legend/280170205000013_4.png" /> 280170205000013'
                });
var format_280510905000005_5 = new ol.format.GeoJSON();
var features_280510905000005_5 = format_280510905000005_5.readFeatures(json_280510905000005_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280510905000005_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280510905000005_5.addFeatures(features_280510905000005_5);
var lyr_280510905000005_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280510905000005_5, 
                style: style_280510905000005_5,
                popuplayertitle: "280510905000005",
                interactive: true,
                    title: '<img src="styles/legend/280510905000005_5.png" /> 280510905000005'
                });
var format_280170205000046_6 = new ol.format.GeoJSON();
var features_280170205000046_6 = format_280170205000046_6.readFeatures(json_280170205000046_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280170205000046_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280170205000046_6.addFeatures(features_280170205000046_6);
var lyr_280170205000046_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280170205000046_6, 
                style: style_280170205000046_6,
                popuplayertitle: "280170205000046",
                interactive: true,
                    title: '<img src="styles/legend/280170205000046_6.png" /> 280170205000046'
                });
var format_280320305000083_7 = new ol.format.GeoJSON();
var features_280320305000083_7 = format_280320305000083_7.readFeatures(json_280320305000083_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280320305000083_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280320305000083_7.addFeatures(features_280320305000083_7);
var lyr_280320305000083_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280320305000083_7, 
                style: style_280320305000083_7,
                popuplayertitle: "280320305000083",
                interactive: true,
                    title: '<img src="styles/legend/280320305000083_7.png" /> 280320305000083'
                });
var format_280630505000034_8 = new ol.format.GeoJSON();
var features_280630505000034_8 = format_280630505000034_8.readFeatures(json_280630505000034_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280630505000034_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280630505000034_8.addFeatures(features_280630505000034_8);
var lyr_280630505000034_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280630505000034_8, 
                style: style_280630505000034_8,
                popuplayertitle: "280630505000034",
                interactive: true,
                    title: '<img src="styles/legend/280630505000034_8.png" /> 280630505000034'
                });
var format_280630505000035_9 = new ol.format.GeoJSON();
var features_280630505000035_9 = format_280630505000035_9.readFeatures(json_280630505000035_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280630505000035_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280630505000035_9.addFeatures(features_280630505000035_9);
var lyr_280630505000035_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280630505000035_9, 
                style: style_280630505000035_9,
                popuplayertitle: "280630505000035",
                interactive: true,
                    title: '<img src="styles/legend/280630505000035_9.png" /> 280630505000035'
                });
var format_280067005000034_10 = new ol.format.GeoJSON();
var features_280067005000034_10 = format_280067005000034_10.readFeatures(json_280067005000034_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280067005000034_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280067005000034_10.addFeatures(features_280067005000034_10);
var lyr_280067005000034_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280067005000034_10, 
                style: style_280067005000034_10,
                popuplayertitle: "280067005000034",
                interactive: true,
                    title: '<img src="styles/legend/280067005000034_10.png" /> 280067005000034'
                });
var format_280750105000058_11 = new ol.format.GeoJSON();
var features_280750105000058_11 = format_280750105000058_11.readFeatures(json_280750105000058_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280750105000058_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280750105000058_11.addFeatures(features_280750105000058_11);
var lyr_280750105000058_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280750105000058_11, 
                style: style_280750105000058_11,
                popuplayertitle: "280750105000058",
                interactive: true,
                    title: '<img src="styles/legend/280750105000058_11.png" /> 280750105000058'
                });
var format_280750105000059_12 = new ol.format.GeoJSON();
var features_280750105000059_12 = format_280750105000059_12.readFeatures(json_280750105000059_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280750105000059_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280750105000059_12.addFeatures(features_280750105000059_12);
var lyr_280750105000059_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280750105000059_12, 
                style: style_280750105000059_12,
                popuplayertitle: "280750105000059",
                interactive: true,
                    title: '<img src="styles/legend/280750105000059_12.png" /> 280750105000059'
                });
var format_280760005000026_13 = new ol.format.GeoJSON();
var features_280760005000026_13 = format_280760005000026_13.readFeatures(json_280760005000026_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280760005000026_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280760005000026_13.addFeatures(features_280760005000026_13);
var lyr_280760005000026_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280760005000026_13, 
                style: style_280760005000026_13,
                popuplayertitle: "280760005000026",
                interactive: true,
                    title: '<img src="styles/legend/280760005000026_13.png" /> 280760005000026'
                });
var group_CENFE_SETEMBRO_PNADC_OUT = new ol.layer.Group({
                                layers: [lyr_280067005000034_10,lyr_280750105000058_11,lyr_280750105000059_12,lyr_280760005000026_13,],
                                fold: "open",
                                title: "CENFE_SETEMBRO_PNADC_OUT"});
var group_CNEFE_OUTUBRO_PNADC_NOV = new ol.layer.Group({
                                layers: [lyr_280170205000046_6,lyr_280320305000083_7,lyr_280630505000034_8,lyr_280630505000035_9,],
                                fold: "open",
                                title: "CNEFE_OUTUBRO_PNADC_NOV"});
var group_CNEFE_NOVEMBRO_PNADC_DEZ = new ol.layer.Group({
                                layers: [lyr_280067005000054_2,lyr_280067005000055_3,lyr_280170205000013_4,lyr_280510905000005_5,],
                                fold: "open",
                                title: "CNEFE_NOVEMBRO_PNADC_DEZ"});

lyr_OSMStandard_0.setVisible(true);lyr_AG_ESTANCIA_23_1.setVisible(true);lyr_280067005000054_2.setVisible(true);lyr_280067005000055_3.setVisible(true);lyr_280170205000013_4.setVisible(true);lyr_280510905000005_5.setVisible(true);lyr_280170205000046_6.setVisible(true);lyr_280320305000083_7.setVisible(true);lyr_280630505000034_8.setVisible(true);lyr_280630505000035_9.setVisible(true);lyr_280067005000034_10.setVisible(true);lyr_280750105000058_11.setVisible(true);lyr_280750105000059_12.setVisible(true);lyr_280760005000026_13.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AG_ESTANCIA_23_1,group_CNEFE_NOVEMBRO_PNADC_DEZ,group_CNEFE_OUTUBRO_PNADC_NOV,group_CENFE_SETEMBRO_PNADC_OUT];
lyr_AG_ESTANCIA_23_1.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280067005000054_2.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280067005000055_3.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280170205000013_4.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280510905000005_5.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280170205000046_6.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280320305000083_7.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280630505000034_8.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280630505000035_9.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280067005000034_10.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280750105000058_11.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280750105000059_12.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_280760005000026_13.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'COD_OS': 'COD_OS', 'DAT_ATUALI': 'DAT_ATUALI', 'COD_UF': 'COD_UF', 'COD_MUNICI': 'COD_MUNICI', 'COD_DISTRI': 'COD_DISTRI', 'COD_SUBDIS': 'COD_SUBDIS', 'VAL_SETOR': 'VAL_SETOR', 'IND_ALTERA': 'IND_ALTERA', 'IND_AUTORI': 'IND_AUTORI', });
lyr_AG_ESTANCIA_23_1.set('fieldImages', {'COD_SETOR': 'TextEdit', 'COD_OS': 'TextEdit', 'DAT_ATUALI': 'TextEdit', 'COD_UF': 'TextEdit', 'COD_MUNICI': 'TextEdit', 'COD_DISTRI': 'TextEdit', 'COD_SUBDIS': 'TextEdit', 'VAL_SETOR': 'TextEdit', 'IND_ALTERA': 'Range', 'IND_AUTORI': 'Range', });
lyr_280067005000054_2.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280067005000055_3.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280170205000013_4.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280510905000005_5.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280170205000046_6.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280320305000083_7.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280630505000034_8.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280630505000035_9.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280067005000034_10.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280750105000058_11.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280750105000059_12.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_280760005000026_13.set('fieldImages', {'COD_SETOR': '', 'COD_OS': '', 'DAT_ATUALI': '', 'COD_UF': '', 'COD_MUNICI': '', 'COD_DISTRI': '', 'COD_SUBDIS': '', 'VAL_SETOR': '', 'IND_ALTERA': '', 'IND_AUTORI': '', });
lyr_AG_ESTANCIA_23_1.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280067005000054_2.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280067005000055_3.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280170205000013_4.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280510905000005_5.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280170205000046_6.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280320305000083_7.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280630505000034_8.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280630505000035_9.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280067005000034_10.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280750105000058_11.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280750105000059_12.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280760005000026_13.set('fieldLabels', {'COD_SETOR': 'no label', 'COD_OS': 'no label', 'DAT_ATUALI': 'no label', 'COD_UF': 'no label', 'COD_MUNICI': 'no label', 'COD_DISTRI': 'no label', 'COD_SUBDIS': 'no label', 'VAL_SETOR': 'no label', 'IND_ALTERA': 'no label', 'IND_AUTORI': 'no label', });
lyr_280760005000026_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});