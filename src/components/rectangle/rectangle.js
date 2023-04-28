import * as React from "react"
import { useEffect } from "react";
import FPSStats from "react-fps-stats";
import useWindowSize from "../../utils/useWindowSize"
import "../../components/styles/main.css"
import "../../components/styles/icons.css"
import "../../components/styles/modules.css"
import "../../components/styles/mixins.css"
import "../../components/styles/media_1920.css"
import "../../components/styles/media_1440.css"
import "../../components/styles/media_1024.css"
import "../../components/styles/media_768.css"
import "../../components/styles/media_375.css"
import { height } from "@mui/system";

const Rectangle = () => {
  const [widthScreen] = useWindowSize();
  let widthSize, padding;
  let ROWS = 100;
  let COLS = 280;
  var NUM_PARTICLES = ( ROWS * COLS ),
  THICKNESS = Math.pow( 80, 2 ),
  SPACING = 6,
  MARGIN = 0,
  COLOR = 220,
  DRAG = 0.95,
  EASE = 0.25,
  container, particle, canvas, mouse, list, ctx, tog, man, dx, dy, mx, my,
  d, t, f, a, b, i, n, w, h, p, s, r, c;
  particle = {
    vx: 0, vy: 0, x: 0, y: 0,
  };

  function init() {
    let hasWindow = typeof window !== 'undefined';
    let widthScreen = hasWindow ? window.innerWidth : null;
    padding = window ? window.getComputedStyle(document.getElementById("hero"), null).getPropertyValue('padding-left').slice(0,-2) : null;
    widthSize = document && document.getElementById("hero") ?
    document.getElementById("hero").clientWidth - 2 * padding : null;
    container = document.getElementById('black-container');
    let heightSize = document.getElementById("black-container").clientHeight;
    canvas = document.createElement('canvas');
    ctx = canvas.getContext( '2d' );
    man = false;
    tog = true;
    list = [];
    w = canvas.width = widthSize ? widthSize : COLS * SPACING + MARGIN * 2;
    h = canvas.height = heightSize;
    // if (widthScreen && widthScreen >= 1920) {
    //   h = canvas.height = 480;
    // } else if (widthScreen && widthScreen >= 1440 && widthScreen < 1920) {
    //   h = canvas.height = 360;
    // } else if (widthScreen && widthScreen >= 1024 && widthScreen < 1440) {
    //   h = canvas.height = 256;
    // } else if (widthScreen && widthScreen >= 768 && widthScreen < 1024) {
    //   h = canvas.height = 420;
    // } else if (widthScreen && widthScreen >= 373 && widthScreen < 768) {
    //   h = canvas.height = 240;
    // } else if (widthScreen && widthScreen < 373) {
    //   h = canvas.height = 220;
    // }
    
    //container.style.marginLeft = Math.round( w * -0.5 ) + 'px';
    //container.style.marginTop = Math.round( h * -0.5 ) + 'px';
    for ( i = 0; i < NUM_PARTICLES; i++ ) {
      p = Object.create( particle );
      p.x = p.ox = MARGIN + SPACING * ( i % COLS );
      p.y = p.oy = MARGIN + SPACING * Math.floor( i / COLS );
      list[i] = p;
    }
    container.addEventListener( 'mousemove', function(e) {
      let bounds = container.getBoundingClientRect();
      mx = e.clientX - bounds.left;
      my = e.clientY - bounds.top;
      man = true;
    });
    container.appendChild(canvas);
  }

  function step() {
    if ( tog = !tog ) {
      if ( !man ) {
        t = +new Date() * 0.001;
        mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
        my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
      }
      for ( i = 0; i < NUM_PARTICLES; i++ ) { 
        p = list[i];
        d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
        f = -THICKNESS / d;
        if ( d < THICKNESS ) {
          t = Math.atan2( dy, dx );
          p.vx += f * Math.cos(t);
          p.vy += f * Math.sin(t);
        }
        p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
        p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;
      }
    } else {
      b = ( a = ctx.createImageData( w, h ) ).data;
      for ( i = 0; i < NUM_PARTICLES; i++ ) {
        p = list[i];
        b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = COLOR;
        b[n+3] = 255;
      }
      ctx.putImageData( a, 0, 0 );
    }
    
    requestAnimationFrame( step );
  }
  
  useEffect(() => {
    init(); 
    step();
  }, [])

  return (
    <div className="black-container" id="black-container"></div>
  )
}

export default Rectangle