
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenTopoMap_0": {
            "type": "raster",
            "tiles": ["https://tile.opentopomap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "GS_1": {
            "type": "geojson",
            "data": json_GS_1
        }
                    ,
        "RouteESouth_2": {
            "type": "geojson",
            "data": json_RouteESouth_2
        }
                    ,
        "RouteE_3": {
            "type": "geojson",
            "data": json_RouteE_3
        }
                    ,
        "CBRR_4": {
            "type": "geojson",
            "data": json_CBRR_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenTopoMap_0_0",
            "type": "raster",
            "source": "OpenTopoMap_0"
        },
        {
            "id": "lyr_GS_1_0",
            "type": "line",
            "source": "GS_1",
            "layout": {},
            "paint": {'line-width': 6.785714285714285, 'line-opacity': 0.25098039215686274, 'line-color': '#ff4901'}
        }
,
        {
            "id": "lyr_RouteESouth_2_0",
            "type": "line",
            "source": "RouteESouth_2",
            "layout": {},
            "paint": {'line-width': 6.785714285714285, 'line-opacity': 0.30980392156862746, 'line-color': '#05b200'}
        }
,
        {
            "id": "lyr_RouteE_3_0",
            "type": "line",
            "source": "RouteE_3",
            "layout": {},
            "paint": {'line-width': 6.785714285714285, 'line-opacity': 0.25098039215686274, 'line-color': '#ff01f3'}
        }
,
        {
            "id": "lyr_CBRR_4_0",
            "type": "line",
            "source": "CBRR_4",
            "layout": {},
            "paint": {'line-width': 6.785714285714285, 'line-opacity': 0.25098039215686274, 'line-color': '#015eff'}
        }
],
}