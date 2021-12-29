
function maptoggle() {


    if (document.getElementById('world-map').style.display == 'none') {
        document.getElementById('world-map').style.display = 'block';
        document.getElementById('world-map2').style.display = 'none';
    }
    else {
        document.getElementById('world-map').style.display = 'none';
        document.getElementById('world-map2').style.display = 'block';
    }


}

$(function () {
    var map = "world_mill";
    var allMarkers = [{ latLng: [1.3521, 103.8198], style: { fill: '#1E4471' }, name: 'Singapore', id: 'SG' },
    { latLng: [37.0902, -95.7129], name: "United States", id: 'US', style: { fill: 'transparent', stroke: 'transparent', r: 1 } }];
    var currentMarkers = allMarkers.slice();

    $('#world-map').vectorMap(
        {
            map: 'world_mill',
            container: $('#world-map'),
            normalizeFunction: 'polynomial',
            backgroundColor: 'WHITE',

            onRegionClick: function (event, code) {
                var name = (code);
                console.log(name);
                if (name == "IN" || name == "CN" || name == "SG" || name == "JP") {
                    window.open("https://www.sc.com/en/media/press-release/sc-ventures-backs-solv-in-enabling-seamless-trade-and-access-to-finance-for-small-businesses-in-post-covid-world/");
                }
                if (name == "US" || name == "CA" || name == "RU") {
                    window.open("https://varnow.com/");
                }
                if (name == "AU" || name == "MX" || name == "NZ" || name == "GB" || name == "ES" || name == "PT" || name == "FR" || name == "IT") {
                    window.open("https://www.dllgroup.com/en");
                }
                if (name == "AR" || name == "CO" || name == "PE" || name == "CL") {
                    window.open("https://www.santanderbank.com/");
                }
                if (name == "NL" || name == "BE" || name == "DE") {
                    window.open("https://info.go.yoursolutionspartner.com/cisco#section1");
                }
                if (name == "BR") {
                    window.open("https://neo.bancodll.com.br/Login?returnUrl=%2F");
                }
            },

            regionLabelStyle: {
                initial: {
                    'font-family': 'Verdana',
                    'font-size': '10',
                    'font-weight': 'bold',
                    cursor: 'default',
                    fill: 'white'
                }
            },
            markerLabelStyle: {
                initial: {
                    'font-family': 'Verdana',
                    'font-size': '10',
                    'font-weight': 'bold',
                    cursor: 'default',
                    fill: 'white'
                }
            },
            series: {
                regions: [{
                    values: {
                        IN: '#1E4471',
                        CN: '#1E4471',
                        SG: '#1E4471',
                        JP: '#1E4471',
                        US: '#1E4471',
                        CA: '#1E4471',
                        RU: '#1E4471',
                        AU: '#1E4471',
                        MX: '#1E4471',
                        NZ: '#1E4471',
                        GB: '#1E4471',
                        ES: '#1E4471',
                        PT: '#1E4471',
                        FR: '#1E4471',
                        IT: '#1E4471',
                        CO: '#6EBE4A',
                        PE: '#1E4471',
                        CL: '#6EBE4A',
                        NL: '#1E4471',
                        BE: '#1E4471',
                        DE: '#1E4471',
                        BR: '#1E4471',
                        AR: "#6EBE4A"
                    }

                }]
            },



            markers: currentMarkers,

            labels: {

                regions: {
                    render: function (code) {

                        return (jvm.Map.maps[map].paths[code].id);
                    }
                },
                markers: {
                    render: function (index) {
                        var markerStr = "";
                        markerStr += currentMarkers[index].id;
                        return (markerStr);
                    }


                }


            }

        })
});

$(function () {

    var LabelInfo = {
        "IN": "API details",
        "CN": "API details",
        "SG": "API details",
        "JP": "API details",
        "US": "API details",
        "CA": "API details",
        "RU": "API details/"
    };
    var map = "world_mill";
    var allMarkers1 = [{ latLng: [1.3521, 103.8198], style: { fill: '#1E4471' }, name: 'Singapore', id: 'SG' },
    { latLng: [37.0902, -95.7129], name: "United States", id: 'US', style: { fill: 'transparent', stroke: 'transparent', r: 1 } }];
    var currentMarkers1 = allMarkers1.slice();

    $('#world-map2').vectorMap(
        {
            map: 'world_mill',


            backgroundColor: 'WHITE',

            onRegionTipShow: function (event, label, code) {
                label.html(

                    '<b>' + label.html() + '</b></br>' + LabelInfo[code]
                );
            },

            regionLabelStyle: {
                initial: {
                    'font-family': 'Verdana',
                    'font-size': '10',
                    'font-weight': 'bold',
                    cursor: 'default',
                    position: 'relative',
                    fill: 'white'
                }
            },
            markerLabelStyle: {
                initial: {
                    'font-family': 'Verdana',
                    'font-size': '10',
                    'font-weight': 'bold',
                    cursor: 'default',
                    fill: 'white'
                }
            },
            series: {
                regions: [{
                    values: {
                        IN: '#00BCEB',
                        CN: '#1E4471',
                        SG: '#00BCEB',
                        JP: '#00BCEB',
                        US: '#00BCEB',
                        CA: '#1E4471',
                        RU: '#00BCEB',
                        AU: '#1E4471',
                        MX: '#1E4471',
                        NZ: '#1E4471',
                        GB: '#1E4471',
                        ES: '#1E4471',
                        PT: '#1E4471',
                        FR: '#1E4471',
                        IT: '#1E4471',
                        // CO: '#6EBE4A',
                        PE: '#1E4471',
                        // CL: '#6EBE4A',
                        NL: '#1E4471',
                        BE: '#1E4471',
                        DE: '#1E4471',
                        BR: '#1E4471'
                        // AR: "#6EBE4A"
                    }
                    
                }]
            },




            markers: currentMarkers1

            //    labels: {
            //     markers: {
            //         render: function(index) {
            //           var markerStr = "";
            //           markerStr += currentMarkers1[index].id;
            //           console.log(markerStr);
            //            return (markerStr);
            //         }


            //     },
            //       regions: {
            //         render: function(code){
            //             // console.log(jvm.Map.maps[map].paths[code].id)
            //             return(LabelInfo[code] && "label");
            //                 //   return(jvm.Map.maps[map].paths[code].id);

            //         }
            //       },
            //       offsets: function(code){
            //         return {
            //           'HT': [150, 70], //doesn't work??
            //           'HN': [0, 40]
            //         }[code.split('-')[1]];
            //       }

            //   }

        })

})


