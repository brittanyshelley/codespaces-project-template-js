var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;e.register("64W4o",(function(t,i){var n,o,a,r;n=t.exports,o="ParallaxMover",a=()=>l,Object.defineProperty(n,o,{get:a,set:r,enumerable:!0,configurable:!0});var s=e("i0lBz");class l{init(){}isEnabled(e){return!(0,s.isSsr)()&&!e.destroyed&&e.container.actualOptions.interactivity.events.onHover.parallax.enable}move(e){const t=e.container,i=t.actualOptions.interactivity.events.onHover.parallax;if((0,s.isSsr)()||!i.enable)return;const n=i.force,o=t.interactivity.mouse.position;if(!o)return;const a=t.canvas.size,r=.5*a.width,l=.5*a.height,f=i.smooth,c=e.getRadius()/n,d=(o.x-r)*c,u=(o.y-l)*c,{offset:v}=e;v.x+=(d-v.x)/f,v.y+=(u-v.y)/f}}}));
//# sourceMappingURL=ParallaxMover.caa6798a.js.map