require = (function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == 'function' && require
        if (!u && a) return a(o, !0)
        if (i) return i(o, !0)
        var f = new Error("Cannot find module '" + o + "'")
        throw ((f.code = 'MODULE_NOT_FOUND'), f)
      }
      var l = (n[o] = { exports: {} })
      t[o][0].call(
        l.exports,
        function (e) {
          var n = t[o][1][e]
          return s(n ? n : e)
        },
        l,
        l.exports,
        e,
        t,
        n,
        r,
      )
    }
    return n[o].exports
  }
  var i = typeof require == 'function' && require
  for (var o = 0; o < r.length; o++) s(r[o])
  return s
})(
  {
    1: [
      function (require, module, exports) {
        module.exports = {
          form: {
            pattern: [
              "<path d='M249,0.001h239c6.628,0,12,5.373,12,12v476.001c0,6.627-5.373,12-12,12H249'/> <path opacity='0.9' fill='{{color}}' d='M500,488.002c0,6.627-5.373,12-12,12H12c-6.627,0-12-5.373-12-12V12.001 c0-6.627,5.373-12,12-12h476c6.628,0,12,5.373,12,12V488.002z'/>",
              "<path d='M250,0.001c138.071,0,250,111.929,250,250S388.071,500.002,250,500.002'/> <circle opacity='0.9' fill='{{color}}' cx='250' cy='250' r='250'/>",
              "<polygon points='500,249.252 424.336,-0.742 250,-0.745 250,499.254 424.334,499.252 '/> <polyline opacity='0.9' fill='{{color}}' points='424.336,0.006 500,250 424.334,500 75.667,500.003 0,250 75.666,0 '/>",
              "<path d='M249.569,46.756c4.945,0,9.846,0.195,14.704,0.559l1.268,4.112l-16.874,0.006v-4.667 C248.968,46.764,249.268,46.756,249.569,46.756z M249.569,46.756c4.945,0,9.846,0.195,14.704,0.559L249.571-0.4l-0.904,2.936v44.23 C248.968,46.764,249.268,46.756,249.569,46.756z M443.4,191.882l8.162,32.751C449.646,213.389,446.896,202.451,443.4,191.882z M403.812,498.91l-21.736-70.547c-11.174,9.972-23.371,18.704-36.405,26L403.812,498.91z M451.842,225.76l47.296-36.237h-56.327 l0.588,2.359c3.496,10.569,6.246,21.507,8.162,32.751L451.842,225.76z M345.252,454.043l0.418,0.32 c13.034-7.296,25.231-16.028,36.405-26l-0.139-0.449L345.252,454.043z M454.804,263.139c0-13.143-1.113-26.01-3.242-38.506 l-8.162-32.751c-26.401-79.834-95.906-138.354-179.127-144.567l1.268,4.112l-16.874,0.006v428.075 c0.301,0.001,0.601,0.012,0.902,0.012c34.726,0,67.429-9.105,96.101-25.156l-0.418-0.32l36.685-26.129l0.139,0.449 C426.555,388.672,454.804,329.388,454.804,263.139z'/> <path opacity='0.9' fill='{{color}}' d='M46.703,230.158c-1.56,10.752-2.368,21.767-2.368,32.98 c0,119.504,91.886,216.382,205.234,216.382c113.348,0,205.235-96.878,205.235-216.382c0-119.505-91.887-216.383-205.235-216.383 c-89.034,0-164.826,59.773-193.245,143.334 M58.515,189.522H0l48.967,37.578 M117.201,427.916L95.327,498.91l58.56-44.867 M345.252,454.043l58.56,44.867l-21.875-70.996 M451.842,225.76l47.296-36.237h-56.327 M265.54,51.427L249.571-0.4l-15.972,51.838'/>",
              "<polygon points='395.833,94.045 371.388,-0.745 254,-0.745 254,167.023 '/> <polygon points='395.834,94.046 440.459,267.079 500.336,94.045 395.833,94.045 395.834,94.046 '/> <polygon points='440.991,269.144 395.834,94.046 254,167.023 254,499.255 500.336,499.255 '/> <polyline opacity='0.9' fill='{{color}}' points='395.833,94.39 440.991,269.488 500.336,499.601 -0.336,499.601 59.542,267.424 104.166,94.391 128.612,-0.4 371.388,-0.4 395.833,94.39 500.336,94.39 440.459,267.424 395.834,94.391 59.541,267.424 104.166,94.391 -0.336,94.391 59.541,267.424 '/>",
              "<polygon points='459.667,0.357 248.667,0.357 248.667,499.645 351.667,499.645 '/> <polygon points='404.123,257.145 386.695,337.711 458.4,403.877 500,345.617 '/> <path opacity='0.9' fill='{{color}}' d='M40.333,0h419.334l-108,499.287H148.333L40.333,0z M95.878,256.786L0,345.26l41.6,58.261 l71.705-66.168 M386.695,337.354l71.705,66.167L500,345.26l-95.877-88.473'/>",
              "<polygon points='403.597,403.818 403.597,96.184 403.598,96.184 403.598,0.357 251.548,0.357 251.548,403.818 '/> <rect x='403.598' y='96.184' width='95.689' height='307.635'/> <polygon points='251.548,403.818 251.548,499.645 403.598,499.645 403.598,403.818 403.597,403.818 '/> <path opacity='0.9' fill='{{color}}' d='M96.402,0h307.195v499.287H96.402V0z M96.401,95.826H0.713v307.635h95.689 M403.597,403.461 H96.402 M403.597,403.461h95.69V95.826h-95.69'/> <line opacity='0.92' fill='{{color}}' x1='96.401' y1='95.826' x2='403.597' y2='95.826'/>",
              "<polygon points='373.684,334.188 380.425,325.173 380.424,325.173 '/> <rect x='398.798' y='269.916' width='0.001' height='61.367'/> <polygon points='315.94,411.411 363.755,347.464 308.459,347.464 363.755,347.464 380.424,325.171 378.989,320.755 365.592,279.521 378.989,320.755 380.424,325.171 380.424,325.173 417.172,276.024 344.588,211.578 417.172,276.024 417.174,276.026 464.758,212.389 250,125.4 250,363.503 '/> <path d='M464.758,212.389l0.007,0.002C486.574,189.889,500,159.213,500,125.4c0-69.035-55.964-125-125-125 c-69.035,0-125,55.965-125,125l214.759,86.986L464.758,212.389z'/> <polygon points='380.424,325.171 363.755,347.464 363.758,347.464 373.684,334.188 380.424,325.173 '/> <polygon points='464.759,212.387 250,125.4 464.758,212.389 '/> <polygon points='363.758,347.464 373.684,334.188 363.758,347.464 '/> <polygon points='250,363.503 250,499.601 315.941,411.412 315.94,411.411 '/> <polygon points='363.758,347.464 315.941,411.412 437.031,499.39 387.667,347.464 363.758,347.464 '/> <rect x='299.925' y='379.437' transform='matrix(0.5988 -0.8009 0.8009 0.5988 -167.5459 424.3959)' width='79.847' height='0.001'/> <polygon points='373.684,334.188 363.758,347.464 387.667,347.464 380.425,325.173 '/> <polygon points='417.174,276.026 380.425,325.173 387.667,347.464 497.635,347.464 '/> <path opacity='0.9' fill='{{color}}' d='M35.236,211.99C13.425,189.488,0,158.812,0,125C0,55.965,55.965,0,125,0 c69.036,0,125,55.965,125,125 M464.765,211.99C486.574,189.488,500,158.812,500,125C500,55.965,444.036,0,375,0 c-69.035,0-125,55.965-125,125 M250,125L35.241,211.985 M35.241,211.985L250,499.2l214.759-287.215L250,125 M136.243,347.063h55.298 M82.826,275.625L2.365,347.063h133.878 M82.826,275.625l72.586-64.447 M119.574,324.772l14.834-45.652 M119.574,324.772 L62.969,498.988l121.09-87.977 M184.059,411.012L250,363.103 M250,363.103l65.94,47.908 M315.94,411.011l121.091,87.978 l-56.607-174.218 M378.989,320.354l1.435,4.416 M365.592,279.12l13.397,41.234 M417.172,275.623l-72.584-64.445 M363.758,347.063 h133.877l-80.463-71.44 M308.459,347.063h55.299'/>",
              "<path d='M441.188,249.619l59.312,59.303L309.768,499.62l-59.312-59.301 M250.084,58.375l59.42-59.43l191.035,191.067l-59.42,59.431 L250.368,440.232'/> <path opacity='0.9' fill='{{color}}' d='M-0.75,188.86L190.4-1.985l310.678,310.183L309.93,499.042L-0.75,188.86z M58.877,248.393 l-59.541,59.446l191.422,191.118l59.543-59.447 M441.449,248.665L250.301,439.51 M441.449,248.665l59.545-59.447L309.57-1.9 l-59.543,59.448'/>",
              "<path d='M278.854,60.527c0-34.01,27.572-61.582,61.582-61.582c34.012,0,61.583,27.572,61.583,61.582H278.854z'/> <path d='M250,60.527h188v376H250 M500,165.881h-62v165.293h62V165.881z M377.243,436.527h-64v62.488h64V436.527z M250,60.527v376'/> <path opacity='0.9' fill='{{color}}' d='M438,436.527H62v-376h376V436.527z M62,168.894H0v165.294h62V168.894z M500,165.88h-62 v165.294h62V165.88z M186.757,436.527h-64v62.488h64V436.527z M377.243,436.527h-64v62.488h64V436.527z M222.519,60.527 c0-34.01-27.571-61.582-61.583-61.582c-34.01,0-61.582,27.572-61.582,61.582H222.519z M402.019,60.527 c0-34.01-27.571-61.582-61.583-61.582c-34.01,0-61.582,27.572-61.582,61.582H402.019z'/> </svg>",
            ],
            colors: [
              '#ba1b1b',
              '#843812',
              '#ff9800',
              '#f7c31c',
              '#a5d800',
              '#44a31c',
              '#00a576',
              '#6ecca6',
              '#00b3ba',
              '#3171f5',
              '#6649f2',
              '#5f12cc',
              '#a041b7',
              '#f96262',
              '#e91e63',
              '#7c0555',
              '#cccccc',
            ],
          },
          eye: {
            pattern: [
              "<ellipse cx='346.533' cy='199.666' rx='78.435' ry='37.591'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='151.467' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='{{color}}' d='M179.937,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M179.937,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='151.467' cy='190.873' r='18.223'/> <ellipse opacity='0.9' fill='#FFFFFF' cx='346.533' cy='199.667' rx='78.435' ry='37.591'/> <path opacity='0.9' fill='{{color}}' d='M375.002,164.631c6.362,6.899,10.249,16.117,10.249,26.242 c0,21.383-17.335,38.719-38.719,38.719c-21.383,0-38.719-17.335-38.719-38.719c0-10.126,3.889-19.345,10.252-26.244 M375.002,164.631c-29.398-5.515-56.937-0.001-56.937-0.001'/> <circle opacity='0.9' cx='346.533' cy='190.873' r='18.223'/>",
              "<path d='M250,169.854h176c6.627,0,12,5.307,12,11.851v36.688c0,6.545-5.373,11.851-12,11.851H250'/> <path opacity='0.9' fill='#39393A' d='M438,218.243c0,6.627-5.373,12-12,12H74c-6.627,0-12-5.373-12-12V181.09 c0-6.627,5.373-12,12-12h352c6.627,0,12,5.373,12,12V218.243z M411.179,185.875c0-2.68-4.463-4.853-9.97-4.853H98.792 c-5.506,0-9.97,2.173-9.97,4.853v29.111c0,2.68,4.463,4.852,9.97,4.852h302.417c5.506,0,9.97-2.172,9.97-4.852V185.875z'/> <path opacity='0.9' fill='{{color}}' d='M414.251,207.24c0,7.332-5.438,13.275-12.147,13.275H97.898 c-6.709,0-12.147-5.943-12.147-13.275v-13.611c0-7.332,5.438-13.275,12.147-13.275h304.205c6.709,0,12.147,5.943,12.147,13.275 V207.24z'/>",
              "<polygon opacity='0.9' fill='#FFFFFF' points='207.661,227.591 120.666,241.09 72.668,193.59 87.667,145.095 207.661,193.59 '/> <path fill='{{color}}' d='M129.625,162.031c-10.918,4.783-18.568,15.73-18.568,28.504c0,17.171,13.799,31.091,30.821,31.091 s30.821-13.92,30.821-31.091c0-4.283-0.866-8.36-2.42-12.072L129.625,162.031z'/> <polygon points='290.168,229.148 377.164,242.647 425.161,195.148 410.162,146.653 290.168,195.148 '/> <polygon opacity='0.9' fill='#FFFFFF' points='290.168,229.148 377.164,242.648 425.161,195.148 410.162,146.653 290.168,195.148 '/> <path opacity='0.9' fill='{{color}}' d='M368.204,163.589c10.918,4.783,18.568,15.73,18.568,28.504 c0,17.171-13.799,31.091-30.821,31.091s-30.821-13.92-30.821-31.091c0-4.283,0.866-8.36,2.42-12.072L368.204,163.589z'/> <circle cx='141.877' cy='191.829' r='12.45'/> <circle cx='355.952' cy='191.829' r='11.95'/>",
              "<circle stroke='#000000' stroke-width='7' stroke-miterlimit='10' cx='351.833' cy='191.828' r='59'/> <circle opacity='0.9' fill='{{color}}' stroke='#000000' stroke-width='7' stroke-miterlimit='10' cx='148.167' cy='191.829' r='59'/> <circle opacity='0.9' fill='{{color}}' stroke='#000000' stroke-width='7' stroke-miterlimit='10' cx='351.833' cy='191.829' r='59'/> <path fill='none' stroke='#000000' stroke-width='7' stroke-miterlimit='10' d='M207.167,193.093c0-13.072,19.456-23.65,43.5-23.65'/> <path fill='none' stroke='#000000' stroke-width='7' stroke-miterlimit='10' d='M292.833,193.093c0-13.072-19.456-23.65-43.5-23.65'/> <path opacity='0.6' fill='#FFFFFF' d='M334.624,230.769l-0.457-0.415c6.918,6.256,24.835-2.302,40.06-19.138l12.06,10.907 C371.062,238.958,347.955,242.823,334.624,230.769z M389.709,169.855l-0.456-0.413c6.918,6.256,0.197,24.94-15.026,41.773 l12.06,10.907C401.509,205.288,403.042,181.911,389.709,169.855z'/> <path opacity='0.6' fill='#FFFFFF' d='M128.624,234.17l-0.457-0.415c6.918,6.256,24.835-2.302,40.06-19.138l12.06,10.907 C165.062,242.359,141.955,246.225,128.624,234.17z M183.709,173.257l-0.456-0.413c6.918,6.256,0.197,24.94-15.026,41.773 l12.06,10.907C195.509,208.69,197.042,185.312,183.709,173.257z'/>",
              "<path opacity='0.9' fill='{{color}}' stroke='#3F403F' stroke-width='8' stroke-miterlimit='10' d='M210.958,136.919 c4.761,4.611,4.882,12.208,0.271,16.968l-96.007,99.119c-4.611,4.762-12.208,4.881-16.968,0.271l-6.751-6.541 c-4.76-4.611-4.881-12.208-0.271-16.969l96.007-99.118c4.611-4.76,12.208-4.881,16.968-0.271L210.958,136.919z M150.855,168.216 l23.99,23.238 M151.608,215.443l37.562,36.385c4.76,4.609,12.357,4.488,16.968-0.271l6.539-6.752 c4.611-4.76,4.49-12.357-0.271-16.968l-37.562-36.383 M127.617,192.204l23.992,23.24 M150.855,168.216L113.29,131.83 c-4.761-4.611-12.357-4.49-16.969,0.27l-6.539,6.751c-4.61,4.76-4.49,12.357,0.271,16.968l37.564,36.384'/> <path stroke='#3F403F' stroke-width='8' stroke-miterlimit='10' d='M416.497,136.919c4.76,4.611,4.881,12.208,0.27,16.968 l-96.007,99.119c-4.611,4.762-12.208,4.881-16.968,0.271l-6.752-6.541c-4.759-4.611-4.881-12.208-0.27-16.969l96.007-99.118 c4.611-4.76,12.208-4.881,16.968-0.271L416.497,136.919z M356.394,168.216l23.99,23.238 M357.147,215.443l37.562,36.385 c4.76,4.609,12.357,4.488,16.968-0.271l6.539-6.752c4.611-4.76,4.489-12.357-0.271-16.968l-37.562-36.383 M333.155,192.204 l23.992,23.24 M356.394,168.216l-37.565-36.386c-4.761-4.611-12.357-4.49-16.969,0.27l-6.539,6.751 c-4.61,4.76-4.49,12.357,0.27,16.968l37.564,36.384'/> <path opacity='0.9' fill='{{color}}' stroke='#3F403F' stroke-width='8' stroke-miterlimit='10' d='M416.498,136.919 c4.76,4.611,4.881,12.208,0.27,16.968l-96.007,99.119c-4.611,4.762-12.208,4.881-16.969,0.271l-6.751-6.541 c-4.76-4.611-4.882-12.208-0.271-16.969l96.007-99.118c4.611-4.76,12.208-4.881,16.968-0.271L416.498,136.919z M356.395,168.216 l23.99,23.238 M357.147,215.443l37.562,36.385c4.76,4.609,12.357,4.488,16.968-0.271l6.539-6.752 c4.611-4.76,4.49-12.357-0.27-16.968l-37.562-36.383 M333.156,192.204l23.992,23.24 M356.395,168.216l-37.565-36.386 c-4.761-4.611-12.357-4.49-16.969,0.27l-6.539,6.751c-4.61,4.76-4.49,12.357,0.271,16.968l37.564,36.384'/>",
              "<circle stroke='#000000' stroke-width='20' stroke-miterlimit='10' cx='345.558' cy='225.065' r='52.497'/> <path stroke='#000000' stroke-width='20' stroke-miterlimit='10' d='M248.667,90.42c28.993,0,52.497,23.504,52.497,52.497 s-23.504,52.497-52.497,52.497'/> <circle opacity='0.9' fill='{{color}}' stroke='#3F403F' stroke-width='20' stroke-miterlimit='10' cx='154.442' cy='225.065' r='52.497'/> <circle opacity='0.9' fill='{{color}}' stroke='#3F403F' stroke-width='20' stroke-miterlimit='10' cx='345.558' cy='225.065' r='52.497'/> <circle opacity='0.9' fill='{{color}}' stroke='#3F403F' stroke-width='20' stroke-miterlimit='10' cx='250' cy='142.917' r='52.497'/> <path opacity='0.6' fill='#FFFFFF' d='M342.239,256.314l-0.311-0.229c4.696,3.447,15.449-3.234,24.043-14.942l8.186,6.009 C365.563,258.859,351.287,262.957,342.239,256.314z M373.335,213.957l-0.311-0.227c4.695,3.446,1.541,15.708-7.053,27.414 l8.186,6.009C382.75,235.447,382.384,220.599,373.335,213.957z'/> <path opacity='0.6' fill='#FFFFFF' d='M242.131,175.742l-0.311-0.229c4.696,3.447,15.449-3.234,24.043-14.942l8.186,6.009 C265.455,178.287,251.179,182.384,242.131,175.742z M273.227,133.384l-0.311-0.227c4.695,3.446,1.541,15.708-7.053,27.414 l8.186,6.009C282.642,154.874,282.275,140.026,273.227,133.384z'/> <path opacity='0.6' fill='#FFFFFF' d='M147.905,256.314l-0.311-0.229c4.696,3.447,15.449-3.234,24.043-14.942l8.186,6.009 C171.229,258.859,156.953,262.957,147.905,256.314z M179.001,213.957l-0.311-0.227c4.695,3.446,1.541,15.708-7.053,27.414 l8.186,6.009C188.416,235.447,188.05,220.599,179.001,213.957z'/>",
              "<path fill='#FFFFFF' d='M230.234,228.894c0,6.167-5.372,11.166-12,11.166H70.298c-6.627,0-12-4.999-12-11.166v-67.169 c0-6.167,5.373-11.166,12-11.166h147.937c6.628,0,12,5,12,11.166V228.894z'/> <path fill='{{color}}' d='M166.816,150.557c11.501,7.416,19.116,20.34,19.116,35.043c0,23.012-18.655,41.667-41.667,41.667 s-41.667-18.655-41.667-41.667c0-14.701,7.614-27.624,19.113-35.041'/> <circle cx='144.266' cy='185.341' r='19.782'/> <circle stroke='#000000' stroke-width='20' stroke-miterlimit='10' cx='374.213' cy='195.306' r='52.497'/> <circle opacity='0.9' fill='{{color}}' stroke='#3F403F' stroke-width='20' stroke-miterlimit='10' cx='374.213' cy='195.306' r='52.497'/> <path opacity='0.6' fill='#FFFFFF' d='M370.895,226.555l-0.311-0.229c4.696,3.447,15.449-3.234,24.043-14.942l8.186,6.009 C394.219,229.1,379.942,233.198,370.895,226.555z M401.99,184.198l-0.311-0.227c4.695,3.446,1.541,15.708-7.053,27.414l8.186,6.009 C411.405,205.688,411.039,190.84,401.99,184.198z'/> <circle stroke='#000000' stroke-width='12' stroke-miterlimit='10' cx='417.302' cy='129.455' r='27.497'/> <circle opacity='0.9' fill='{{color}}' stroke='#3F403F' stroke-width='12' stroke-miterlimit='10' cx='417.302' cy='129.455' r='27.497'/> <path opacity='0.6' fill='#FFFFFF' d='M413.514,145.458l-0.162-0.119c2.459,1.806,8.092-1.694,12.594-7.827l4.287,3.147 C425.73,146.792,418.253,148.938,413.514,145.458z M429.802,123.272l-0.163-0.119c2.459,1.805,0.807,8.228-3.693,14.359l4.287,3.147 C434.732,134.528,434.541,126.751,429.802,123.272z'/>",
              "<path opacity='0.4' fill='{{color}}' d='M249.998,101.382c57.105,0,103.402,37.882,103.402,84.604 c0,46.729-46.297,84.611-103.402,84.611V101.382z'/> <path d='M250,135.049c31.451-0.947,67.292,11.331,103.402,51.059v-0.078c-36.288,39.412-72.068,51.725-103.4,50.913'/> <path opacity='0.9' fill='#FFFFFF' d='M353.4,186.107c-104.521-114.993-206.804,0-206.804,0v-0.078c0,0,101.253,114.639,206.804,0'/> <path d='M249.999,138.059c14.813-0.311,31.778,2.339,49.126,11.111l0.608,1.041c0.866,3.831,1.33,7.74,1.33,11.583 c0,27.575-22.86,49.932-51.064,49.932'/> <path opacity='0.9' fill='{{color}}' d='M299.125,149.17c-50.715-25.646-98.16,1.038-98.16,1.038h-0.33 c-1.07,3.71-1.701,7.584-1.701,11.586c0,27.575,22.864,49.932,51.065,49.932c28.204,0,51.064-22.356,51.064-49.932 c0-3.844-0.464-7.752-1.33-11.583'/> <ellipse opacity='0.9' cx='249.998' cy='173.708' rx='24.033' ry='23.5'/> <path opacity='0.35' fill='{{color}}' d='M353.4,185.986c0,46.728-46.297,84.61-103.402,84.61c-57.108,0-103.401-37.882-103.401-84.61 c0-46.723,46.293-84.604,103.401-84.604C307.104,101.382,353.4,139.264,353.4,185.986z M353.4,186.107 c-104.521-114.993-206.804,0-206.804,0v-0.078c0,0,101.253,114.639,206.804,0'/>",
              "<path d='M280.059,214.93c109.37,63.166,155.049-59.287,155.049-59.287l0.021,0.063c0,0-107.01-64.393-155.047,59.287'/> <path opacity='0.9' fill='#FFFFFF' d='M219.921,214.992C171.883,91.313,64.872,155.708,64.872,155.708l0.021-0.066 c0,0,45.679,122.453,155.047,59.288'/> <path fill='{{color}}' d='M179.994,156.857l0.32,16.168l23.872,17.143l-26.974,9.942l-7.544,29.698l-17.28-24.711l-28.533,1.217 l16.293-25.216l-10.093-28.951l27.351,9.133l12.814-10.986 M179.994,156.857c-5.443-4.187-9.773-6.562-9.773-6.562'/> <path d='M172.762,180.55c0,6.216-4.635,11.258-10.358,11.258c-5.722,0-10.355-5.042-10.355-11.258 c0-6.218,4.634-11.263,10.355-11.263C168.127,169.287,172.762,174.332,172.762,180.55z'/> <path opacity='0.9' fill='#FFFFFF' d='M280.059,214.93c109.37,63.166,155.049-59.287,155.049-59.287l0.021,0.063 c0,0-107.01-64.393-155.047,59.287'/> <path opacity='0.9' fill='{{color}}' d='M329.779,150.295l12.817,10.982l27.347-9.129L359.852,181.1l16.295,25.216l-28.535-1.218 l-17.283,24.712l-7.541-29.7l-26.974-9.94l23.872-17.143l0.32-16.168 M329.779,150.295c0,0-4.333,2.377-9.773,6.563'/> <ellipse cx='335.98' cy='180.551' rx='10.357' ry='11.258'/>",
              "<path stroke='#000000' stroke-width='20' stroke-miterlimit='10' d='M281.235,192.849c-5.945,28.376,12.24,56.201,40.617,62.146 s56.201-12.24,62.145-40.618c5.945-28.377-12.239-56.201-40.617-62.146L281.235,192.849z'/> <path opacity='0.9' fill='{{color}}' stroke='#3F403F' stroke-width='20' stroke-miterlimit='10' d='M218.442,192.849 c5.945,28.376-12.24,56.2-40.617,62.146c-28.377,5.944-56.201-12.24-62.145-40.618c-5.945-28.377,12.239-56.201,40.617-62.146 L218.442,192.849z'/> <path opacity='0.6' fill='#FFFFFF' d='M166.089,237.354l-0.35-0.16c5.303,2.411,14.457-6.333,20.467-19.555l9.246,4.204 C189.44,235.062,176.308,242,166.089,237.354z M187.839,189.52l-0.351-0.158c5.304,2.41,4.729,15.058-1.282,28.277l9.246,4.204 C201.46,208.623,198.058,194.165,187.839,189.52z'/> <path opacity='0.9' fill='{{color}}' stroke='#3F403F' stroke-width='20' stroke-miterlimit='10' d='M281.558,193 c-5.945,28.376,12.24,56.2,40.617,62.146c28.377,5.945,56.201-12.24,62.145-40.618c5.945-28.377-12.239-56.201-40.617-62.146 L281.558,193z'/> <path opacity='0.6' fill='#FFFFFF' d='M331.966,237.034l-0.35-0.16c5.303,2.411,14.457-6.333,20.467-19.555l9.246,4.204 C355.317,234.742,342.185,241.681,331.966,237.034z M353.716,189.201l-0.351-0.158c5.304,2.41,4.729,15.058-1.282,28.277 l9.246,4.204C367.337,208.303,363.935,193.846,353.716,189.201z'/>",
            ],
            colors: [
              '#ba1b1b',
              '#843812',
              '#ff9800',
              '#f7c31c',
              '#a5d800',
              '#44a31c',
              '#00a576',
              '#6ecca6',
              '#00b3ba',
              '#3171f5',
              '#6649f2',
              '#5f12cc',
              '#a041b7',
              '#f96262',
              '#e91e63',
              '#7c0555',
              '#cccccc',
            ],
          },
          mouth: {
            pattern: [
              "<path d='M250,321.83c91.232,0,165.19,16.808,165.19,37.543c0,20.736-73.958,37.542-165.19,37.542'/> <path d='M249.781,333.095c-0.028,0-0.056,0-0.084,0v52.557c0.028,0,0.056,0,0.084,0c63.812,0,115.542-11.764,115.542-26.278 S313.593,333.095,249.781,333.095z'/> <ellipse opacity='0.9' fill='{{color}}' cx='250' cy='359.374' rx='115.626' ry='26.278'/> <path opacity='0.9' fill='#3A3A3A' d='M415.19,359.374c0,20.736-73.958,37.542-165.19,37.542c-91.232,0-165.19-16.806-165.19-37.542 c0-20.736,73.958-37.543,165.19-37.543C341.232,321.83,415.19,338.638,415.19,359.374z M250,333.095 c-63.859,0-115.626,11.765-115.626,26.279S186.142,385.651,250,385.651c63.858,0,115.626-11.764,115.626-26.278 S313.859,333.095,250,333.095z'/>",
              "<polygon points='335.734,359.106 258.354,359.106 250,359.106 250,392.198 255.943,392.198 358.094,392.198 434.646,308.599'/> <path opacity='0.9' fill='{{color}}' d='M258.354,359.106h-94.087l-98.912-50.508l76.553,83.6h114.035h-11.884h114.035l76.553-83.6 l-98.913,50.508h-94.087'/> <polygon fill='#FFFFFF' points='212.743,326.548 221.668,392.198 157.668,392.198 165.25,326.579'/>",
              "<path opacity='0.9' d='M250,413.096v-60.18c96.819,0,175.161-27.938,175.161-62.463v2.282 C425.161,359.263,346.818,413.096,250,413.096z'/> <path opacity='0.9' fill='{{color}}' d='M74.839,292.735v-2.282c0,34.525,78.343,62.463,175.161,62.463v60.18 C153.182,413.096,74.839,359.263,74.839,292.735z M425.161,292.735v-2.282c0,34.525-78.342,62.463-175.161,62.463v60.18 C346.818,413.096,425.161,359.263,425.161,292.735z'/> <polygon fill='#FFFFFF' points='163.741,349.91 146.356,425.22 128.424,341.749 '/> <polygon fill='#D1D3D4' points='336.258,349.91 353.643,425.22 371.574,341.749 '/>",
              "<path d='M250.667,324.736h74.399c6.627,0,12,5.373,12,12v11.65c0,6.627-5.373,12-12,12h-74.399'/> <path opacity='0.9' fill='#3A3A3A' d='M337.066,348.386c0,6.627-5.373,12-12,12H176.267c-6.627,0-12-5.373-12-12v-11.65 c0-6.627,5.373-12,12-12h148.799c6.627,0,12,5.373,12,12V348.386z'/> <path opacity='0.9' d='M250.667,342.562h74.544c-10.443,78.104-39.872,134.381-74.544,134.381'/> <path opacity='0.9' fill='{{color}}' d='M325.21,342.562c-10.443,78.104-39.872,134.381-74.544,134.381 s-64.101-56.277-74.544-134.381H325.21z'/> <line opacity='0.9' fill='{{color}}' stroke='#000000' stroke-width='10' stroke-miterlimit='10' x1='250.667' y1='342.562' x2='250.667' y2='409.752'/>",
              "<path d='M250,334.753h130.682c4.476,0,8.104,4.019,8.104,8.976v65.394c0,4.957-3.628,8.976-8.104,8.976H250'/> <path opacity='0.9' fill='{{color}}' d='M388.785,409.123c0,4.957-3.627,8.976-8.103,8.976H119.32c-4.476,0-8.104-4.019-8.104-8.976 v-65.394c0-4.957,3.628-8.976,8.104-8.976h261.362c4.476,0,8.103,4.019,8.103,8.976V409.123z'/> <path fill='#E6E7E8' d='M302.356,340.164v32.997c0,6.627-5.373,12-12,12h-22.498c-6.627,0-12-5.373-12-12v-32.997H302.356z'/> <path fill='#FFFFFF' d='M244.141,340.164v32.997c0,6.627-5.373,12-12,12h-22.498c-6.627,0-12-5.373-12-12v-32.997H244.141z'/>",
              "<path d='M250,307.594c30.413,0,55.069,24.655,55.069,55.068c0,30.414-24.656,55.069-55.069,55.069'/> <circle opacity='0.9' fill='{{color}}' cx='250' cy='362.662' r='55.069'/>",
              "<path d='M250,315.552h89.035c6.861,0,12.424,5.562,12.424,12.424v96.902c0,6.861-5.562,12.424-12.424,12.424H250'/> <path opacity='0.9' fill='#3A3A3A' d='M351.459,424.877c0,6.861-5.562,12.423-12.424,12.423h-178.07 c-6.861,0-12.424-5.562-12.424-12.423v-96.902c0-6.861,5.562-12.424,12.424-12.424h178.07c6.861,0,12.424,5.562,12.424,12.424 V424.877z M242.062,337.343c0-6.861-4.073-12.424-9.099-12.424h-6.821c-5.025,0-9.1,5.562-9.1,12.424v78.165 c0,6.861,4.074,12.423,9.1,12.423h6.821c5.025,0,9.099-5.562,9.099-12.423V337.343z M201.168,337.343 c0-6.861-4.073-12.424-9.098-12.424h-6.823c-5.024,0-9.098,5.562-9.098,12.424v78.165c0,6.861,4.073,12.423,9.098,12.423h6.823 c5.024,0,9.098-5.562,9.098-12.423V337.343z M283.302,337.343c0-6.861-4.073-12.424-9.099-12.424h-6.822 c-5.024,0-9.099,5.562-9.099,12.424v78.165c0,6.861,4.074,12.423,9.099,12.423h6.822c5.025,0,9.099-5.562,9.099-12.423V337.343z M323.852,337.343c0-6.861-4.074-12.424-9.099-12.424h-6.823c-5.023,0-9.098,5.562-9.098,12.424v78.165 c0,6.861,4.074,12.423,9.098,12.423h6.823c5.024,0,9.099-5.562,9.099-12.423V337.343z'/> <path opacity='0.9' fill='{{color}}' d='M201.169,415.508c0,6.861-4.073,12.423-9.098,12.423h-6.823 c-5.025,0-9.099-5.562-9.099-12.423v-78.165c0-6.861,4.073-12.424,9.099-12.424h6.823c5.024,0,9.098,5.562,9.098,12.424V415.508z'/> <path opacity='0.9' fill='{{color}}' d='M242.236,415.508c0,6.861-4.102,12.423-9.16,12.423h-6.872c-5.06,0-9.161-5.562-9.161-12.423 v-78.165c0-6.861,4.102-12.424,9.161-12.424h6.872c5.059,0,9.16,5.562,9.16,12.424V415.508z'/> <path opacity='0.9' fill='{{color}}' d='M283.304,415.508c0,6.861-4.073,12.423-9.099,12.423h-6.822 c-5.025,0-9.099-5.562-9.099-12.423v-78.165c0-6.861,4.073-12.424,9.099-12.424h6.822c5.025,0,9.099,5.562,9.099,12.424V415.508z'/> <path opacity='0.9' fill='{{color}}' d='M323.852,415.509c0,6.861-4.103,12.423-9.16,12.423h-6.871c-5.059,0-9.16-5.562-9.16-12.423 v-78.165c0-6.861,4.102-12.424,9.16-12.424h6.871c5.058,0,9.16,5.562,9.16,12.424V415.509z'/>",
              "<path opacity='0.9' d='M250.001,307.402v60.18c96.818,0,175.16,27.938,175.16,62.463v-2.282 C425.161,361.236,346.819,307.402,250.001,307.402z'/> <path opacity='0.9' fill='{{color}}' d='M250.001,307.402v60.18c-96.818,0-175.161,27.938-175.161,62.463v-2.282 C74.84,361.236,153.183,307.402,250.001,307.402z M250.001,307.402v60.18c96.818,0,175.16,27.938,175.16,62.463v-2.282 C425.161,361.236,346.819,307.402,250.001,307.402z'/> <polygon fill='#FFFFFF' points='163.741,370.588 146.356,295.279 128.425,378.75 '/> <polygon fill='#D1D3D4' points='336.259,370.588 353.644,295.279 371.575,378.75 '/>",
              "<polyline opacity='0.9' points='249.872,338.488 321.515,338.48 393.166,373.461 321.521,408.459 249.871,408.467 '/> <path opacity='0.9' fill='#3A3A3A' d='M178.347,338.492l143.299-0.016l71.651,34.981l-71.645,34.998l-143.3,0.016l-71.65-34.98 L178.347,338.492z M346.955,366.901c0-5.006-3.196-9.064-7.138-9.064H160.183c-3.941,0-7.138,4.058-7.138,9.064v13.146 c0,5.006,3.196,9.064,7.138,9.064h179.635c3.941,0,7.138-4.058,7.138-9.064V366.901z'/> <path opacity='0.9' fill='{{color}}' d='M346.826,380.046c0,5.006-3.195,9.064-7.138,9.064H160.055c-3.942,0-7.138-4.058-7.138-9.064 v-13.146c0-5.006,3.195-9.064,7.138-9.064h179.634c3.942,0,7.138,4.058,7.138,9.064V380.046z'/>",
              "<polyline points='250,290.21 275.511,341.9 332.554,350.189 291.277,390.424 301.021,447.237 250,420.414 '/> <path opacity='0.9' fill='#3A3A3A' d='M250,290.21l25.511,51.69l57.043,8.289l-41.276,40.235l9.743,56.813L250,420.414 l-51.021,26.824l9.743-56.813l-41.276-40.235l57.044-8.289L250,290.21z M231.598,354.144l-41.151,5.979l29.776,29.025l-7.028,40.984 L250,410.783l36.806,19.35l-7.028-40.984l29.776-29.025l-41.15-5.979L250,316.855L231.598,354.144z'/> <polygon opacity='0.9' fill='{{color}}' points='250,316.835 268.403,354.124 309.554,360.103 279.777,389.128 286.806,430.113 250,410.763 213.194,430.113 220.223,389.128 190.446,360.103 231.598,354.124 '/>",
            ],
            colors: [
              '#ba1b1b',
              '#843812',
              '#ff9800',
              '#f7c31c',
              '#a5d800',
              '#44a31c',
              '#00a576',
              '#6ecca6',
              '#00b3ba',
              '#3171f5',
              '#6649f2',
              '#5f12cc',
              '#a041b7',
              '#f96262',
              '#e91e63',
              '#7c0555',
              '#cccccc',
            ],
          },
        }
      },
      {},
    ],
    svg_avatar: [
      function (require, module, exports) {
        var avatar_lib = require('./avatar_lib.json')

        function generate_avatar(avatar) {
          var svg = ''
          for (var part in avatar) {
            svg += avatar_lib[part].pattern[avatar[part].pattern]
            svg = svg.replace(
              /{{color}}/g,
              avatar_lib[part].colors[avatar[part].colors],
            )
          }
          return svg
        }

        function random() {
          var avatar_rand = {}
          for (var part in avatar_lib) {
            avatar_rand[part] = {}
            avatar_rand[part].pattern = Math.floor(
              Math.random() * (avatar_lib[part].pattern.length - 1),
            )
            avatar_rand[part].colors = Math.floor(
              Math.random() * (avatar_lib[part].colors.length - 1),
            )
          }
          // avatar_rand.eye.colors = avatar_rand.mouth.colors
          return avatar_rand
        }

        function change_avatar(avatar, part, change, direction) {
          if (direction == 'next') {
            if (change == 'color') {
              for (var p in avatar_lib) {
                if (p == part) {
                  if (avatar[p].colors + 1 < avatar_lib[p].colors.length) {
                    avatar[p].colors += 1
                  } else {
                    avatar[p].colors = 0
                  }
                }
              }
              return avatar
            } else if (change == 'pattern') {
              for (var p in avatar_lib) {
                if (p == part) {
                  if (avatar[p].pattern + 1 < avatar_lib[p].pattern.length) {
                    avatar[p].pattern += 1
                  } else {
                    avatar[p].pattern = 0
                  }
                }
              }
              return avatar
            }
          } else if (direction == 'previous') {
            if (change == 'color') {
              for (var p in avatar_lib) {
                if (p == part) {
                  if (avatar[p].colors == 0) {
                    avatar[p].colors = avatar_lib[p].colors.length - 1
                  } else {
                    avatar[p].colors -= 1
                  }
                }
              }
              return avatar
            } else if (change == 'pattern') {
              for (var p in avatar_lib) {
                if (p == part) {
                  if (avatar[p].pattern == 0) {
                    avatar[p].pattern = avatar_lib[p].pattern.length - 1
                  } else {
                    avatar[p].pattern -= 1
                  }
                }
              }
              return avatar
            }
          }
          return { error: true, msg: 'Something goes wrong' }
        }

        function parse_avatar(avatar) {
          let avatar_parsed
          if (typeof avatar == 'string') {
            avatar_parsed = JSON.parse(avatar)
          } else {
            avatar_parsed = avatar
          }
          return avatar_parsed
        }

        function avatar_to_string(avatar) {
          let avatar_parsed = JSON.stringify(avatar)
          return avatar_parsed
        }

        function is_valid_avatar(avatar) {
          for (var part in avatar_lib) {
            if (avatar[part] != undefined) {
              if (
                avatar[part].pattern == undefined ||
                avatar[part].colors == undefined
              )
                return false
            } else {
              return false
            }
          }
          return true
        }

        function is_valid_part(part) {
          for (var p in avatar_lib) {
            if (part == p) return true
          }
          return false
        }

        function is_valid_direction(direction) {
          if (direction == 'next' || direction == 'previous') {
            return true
          } else {
            return false
          }
        }

        function is_valid_change(change) {
          if (change == 'color' || change == 'pattern') {
            return true
          } else {
            return false
          }
        }

        module.exports = {
          lib_json: function () {
            return avatar_lib
          },

          stringify_avatar: function (avatar_json) {
            if (!is_valid_avatar(avatar_json))
              return { error: true, msg: 'unvalid avatar' }

            return avatar_to_string(avatar_json)
          },

          render_svg: function (avatar) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return generate_avatar(avatar_parsed)
          },

          random_avatar: function () {
            return random()
          },

          render_random_svg: function () {
            return generate_avatar(random())
          },

          modify_avatar: function (avatar, part, change, direction) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_change(change))
              return {
                error: true,
                msg: 'unvalid argument, for "color" or "pattern" ',
              }
            if (!is_valid_direction(direction))
              return {
                error: true,
                msg: 'unvalid argument, for direction ("next" or "previous") ',
              }
            if (!is_valid_part(part))
              return { error: true, msg: 'unvalid part' }
            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return change_avatar(avatar_parsed, part, change, direction)
          },

          modify_avatar_svg: function (avatar, part, color, direction) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_part(part))
              return { error: true, msg: 'unvalid part' }
            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return generate_avatar(
              change_avatar(avatar_parsed, part, color, direction),
            )
          },

          next_pattern_avatar: function (avatar, part) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_part(part))
              return { error: true, msg: 'unvalid part' }
            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return change_avatar(avatar_parsed, part, 'pattern', 'next')
          },
          next_pattern_svg: function (avatar, part) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_part(part))
              return { error: true, msg: 'unvalid part' }
            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return generate_avatar(
              change_avatar(avatar_parsed, part, 'pattern', 'next'),
            )
          },
          next_color_avatar: function (avatar, part) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_part(part))
              return { error: true, msg: 'unvalid part' }
            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return change_avatar(avatar_parsed, part, 'color', 'next')
          },
          next_color_svg: function (avatar, part) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_part(part))
              return { error: true, msg: 'unvalid part' }
            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return generate_avatar(
              change_avatar(avatar_parsed, part, 'color', 'next'),
            )
          },

          previous_pattern_avatar: function (avatar, part) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_part(part))
              return { error: true, msg: 'unvalid part' }
            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return change_avatar(avatar_parsed, part, 'pattern', 'previous')
          },
          previous_pattern_svg: function (avatar, part) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_part(part))
              return { error: true, msg: 'unvalid part' }
            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return generate_avatar(
              change_avatar(avatar_parsed, part, 'pattern', 'previous'),
            )
          },

          previous_color_avatar: function (avatar, part) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_part(part))
              return { error: true, msg: 'unvalid part' }
            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return change_avatar(avatar_parsed, part, 'color', 'previous')
          },
          previous_color_svg: function (avatar, part) {
            let avatar_parsed = parse_avatar(avatar)

            if (!is_valid_part(part))
              return { error: true, msg: 'unvalid part' }
            if (!is_valid_avatar(avatar_parsed))
              return { error: true, msg: 'unvalid avatar' }

            return generate_avatar(
              change_avatar(avatar_parsed, part, 'color', 'previous'),
            )
          },
        }
      },
      { './avatar_lib.json': 1 },
    ],
  },
  {},
  [],
)
