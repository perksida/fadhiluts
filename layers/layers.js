ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([103.856292, -6.217877, 126.363101, 6.465699]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KalimantanUtaraSupremacy_1 = new ol.format.GeoJSON();
var features_KalimantanUtaraSupremacy_1 = format_KalimantanUtaraSupremacy_1.readFeatures(json_KalimantanUtaraSupremacy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KalimantanUtaraSupremacy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalimantanUtaraSupremacy_1.addFeatures(features_KalimantanUtaraSupremacy_1);
var lyr_KalimantanUtaraSupremacy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KalimantanUtaraSupremacy_1, 
                style: style_KalimantanUtaraSupremacy_1,
                interactive: true,
    title: 'Kalimantan Utara Supremacy<br />\
    <img src="styles/legend/KalimantanUtaraSupremacy_1_0.png" /> 20<br />\
    <img src="styles/legend/KalimantanUtaraSupremacy_1_1.png" /> 32<br />\
    <img src="styles/legend/KalimantanUtaraSupremacy_1_2.png" /> 81<br />\
    <img src="styles/legend/KalimantanUtaraSupremacy_1_3.png" /> 109<br />\
    <img src="styles/legend/KalimantanUtaraSupremacy_1_4.png" /> 240<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KalimantanUtaraSupremacy_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KalimantanUtaraSupremacy_1];
lyr_KalimantanUtaraSupremacy_1.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', 'PROVINSI': 'PROVINSI', 'Ds_jml': 'Ds_jml', });
lyr_KalimantanUtaraSupremacy_1.set('fieldImages', {'KAB_KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'Ds_jml': 'Range', });
lyr_KalimantanUtaraSupremacy_1.set('fieldLabels', {'KAB_KOTA': 'inline label', 'PROVINSI': 'inline label', 'Ds_jml': 'inline label', });
lyr_KalimantanUtaraSupremacy_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});