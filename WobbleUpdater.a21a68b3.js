function e(e,n,o,t){Object.defineProperty(e,n,{get:o,set:t,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;n.register("7V4JY",(function(o,t){e(o.exports,"WobbleUpdater",(()=>d));var a=n("i0lBz"),s=n("ceJJN"),l=n("kFnkx");const i=2*Math.PI;class d{constructor(e){this.container=e}init(e){const n=e.options.wobble;e.wobble=n?.enable?{angle:(0,a.getRandom)()*i,angleSpeed:(0,a.getRangeValue)(n.speed.angle)/360,moveSpeed:(0,a.getRangeValue)(n.speed.move)/10}:{angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=(0,a.getRangeValue)(n?.distance??0)*this.container.retina.pixelRatio}isEnabled(e){return!e.destroyed&&!e.spawning&&!!e.options.wobble?.enable}loadOptions(e,...n){e.wobble||(e.wobble=new(0,s.Wobble));for(const o of n)e.wobble.load(o?.wobble)}update(e,n){this.isEnabled(e)&&(0,l.updateWobble)(e,n)}}})),n.register("ceJJN",(function(o,t){e(o.exports,"Wobble",(()=>l));var a=n("i0lBz"),s=n("69VmK");class l{constructor(){this.distance=5,this.enable=!1,this.speed=new(0,s.WobbleSpeed)}load(e){if(e&&(void 0!==e.distance&&(this.distance=(0,a.setRangeValue)(e.distance)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed))if((0,a.isNumber)(e.speed))this.speed.load({angle:e.speed});else{const n=e.speed;void 0!==n.min?this.speed.load({angle:n}):this.speed.load(e.speed)}}}})),n.register("69VmK",(function(o,t){e(o.exports,"WobbleSpeed",(()=>s));var a=n("i0lBz");class s{constructor(){this.angle=50,this.move=10}load(e){e&&(void 0!==e.angle&&(this.angle=(0,a.setRangeValue)(e.angle)),void 0!==e.move&&(this.move=(0,a.setRangeValue)(e.move)))}}})),n.register("kFnkx",(function(o,t){e(o.exports,"updateWobble",(()=>l));var a=n("i0lBz");const s=2*Math.PI;function l(e,n){const{wobble:o}=e.options,{wobble:t}=e;if(!o?.enable||!t)return;const l=t.angleSpeed*n.factor,i=t.moveSpeed*n.factor*((e.retina.wobbleDistance??0)*n.factor)/(a.millisecondsToSeconds/60),d=s,{position:b}=e;t.angle+=l,t.angle>d&&(t.angle-=d),b.x+=i*Math.cos(t.angle),b.y+=i*Math.abs(Math.sin(t.angle))}}));
//# sourceMappingURL=WobbleUpdater.a21a68b3.js.map