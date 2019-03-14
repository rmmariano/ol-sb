import { expect } from "chai"

// import "../src/ol3-sidebar.css"
import { Sidebar } from "../src/index"

import Map from 'ol/Map'
import View from 'ol/View'

import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'


describe('main', function() {

    describe('index', function() {
        it('should not raise an exception', function() {

            var map = new Map({
                target: 'map',
                layers: [
                    new TileLayer({
                        source: new XYZ({
                            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        })
                    })
                ],
                view: new View({
                    center: ol.proj.transform([7, 51.2], 'EPSG:4326', 'EPSG:3857'),
                    zoom: 4
                })
            })
    
            var sidebar = new Sidebar({ element: 'ol-sb-sidebar', position: 'left' })
    
            map.addControl(sidebar)

            expect(1).to.equal(1)
        })
    })
})
