
function maptoggle() {

    var element = document.getElementById("toggle");
    if (document.getElementById('world-map').style.display == 'none') {
        document.getElementById('world-map').style.display = 'block';
        document.getElementById('world-map2').style.display = 'none';
        element.classList.remove("buttonHighlight");
    }
    else {
        document.getElementById('world-map').style.display = 'none';
        document.getElementById('world-map2').style.display = 'block';
        element.classList.add("buttonHighlight");
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
            scale: {
                Captive: '#1E4471',
                PoC: '#6EBE4A'
            },
        values: { 
        IN: 'Captive',
        CN: 'Captive',
        SG: 'Captive',
        JP: 'Captive',
        US: 'Captive',
        CA: 'Captive',
        RU: 'Captive',
        AU: 'Captive',
        MX: 'Captive',
        NZ: 'Captive',
        GB: 'Captive',
        ES: 'Captive',
        PT: 'Captive',
        FR: 'Captive',
        IT: 'Captive',
        CO: 'PoC',
        PE: 'Captive',
        CL: 'PoC',
        NL: 'Captive',
        BE: 'Captive',
        DE: 'Captive',
        BR: 'Captive',
        AR: "PoC"
        },

      legend: {
        // horizontal: true,
        // title: 'Color',
        labelRender: function(v){
          return {
            Captive: 'Captive Countries',
            PoC: 'CHUC Countires(PoC)'
          }[v];
        }
      }
      
  }]
},



            markers: currentMarkers,

labels: {

  regions: {
    render: function(code){
      return(jvm.Map.maps[map].paths[code].id);
    },
    offsets: function(code){
      console.log([code.split('-')[1]]);
      return {
        'IN': [-12, -3],
        'CN': [-10, 5],
        'AU': [5, -9],
        'JP': [5, 5],
        'CA': [-28.5, 27],
        'AR': [-8.7, 0],
        'BR': [9, -12],
        'US': [-287, 27],
        'CL': [-3, 0],
        'SG': [12, 0],
        'MX': [0, 1.5],
        'NZ': [2, 0]
      }[code];
    }
  }
}
})
  });

$(function () {

    var LabelInfo = {
        'IN': "The Finance Partner for India has a financing tool with an API enabled. Please reach out to the Finance partner at 1-800-123-4567 to enable an API connection",
        'JP': "The Finance Partner for Japan has a financing tool with an API enabled. Please reach out to the Finance partner at 1-800-123-4567 to enable an API connection",
        'US': "The Finance Partner for United States has a financing tool with an API enabled. Please reach out to the Finance partner at 1-800-123-4567 to enable an API connection",
        'RU': "The Finance Partner for Russia has a financing tool with an API enabled. Please reach out to the Finance partner at 1-800-123-4567 to enable an API connection"
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
               if(typeof LabelInfo[code] === "undefined")
                {
                    Regiontip = "";
                }
               else
                {
                    Regiontip = LabelInfo[code];
                }
               label.html(
                '<b>'+label.html()+'</b></br>' + Regiontip
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
                        CO: '#1E4471',
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




            markers: currentMarkers1,

            labels: {

                regions: {
                    render: function(code){
                      return(jvm.Map.maps[map].paths[code].id);         
                },
                offsets: function(code){
//           console.log([code.split('-')[1]]);
                return {
            'IN': [616.4, 225.5],
            'CN': [672, 192],
            'AU': [760.2, 348],
            'JP': [770, 188.5],
            'CA': [150, 115],
            'AR': [253, 390],
            'BR': [294, 310],
            'US': [163, 179],
            'CL': [239.5, 385],
            'SG': [693, 281],
            'MX': [165.7, 225.5],
            'CO': [238, 275],
            'PE': [233, 308],
            'PT': [401, 180],
            'ES': [413, 179],
            'FR': [427, 159],
            'GB': [413.5, 133],
            'BE': [432, 146],
            'NL': [434, 140],
            'DE': [447, 144],
            'IT': [452.5, 174],
            'RU': [683.5, 95],
            'NZ': [855, 393]
          }[code];
        }
      }
    }

})
    
  })




