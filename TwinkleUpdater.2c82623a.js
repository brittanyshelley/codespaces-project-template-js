function e(e,o,i,t){Object.defineProperty(e,o,{get:i,set:t,enumerable:!0,configurable:!0})}var o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;o.register("16ROy",(function(i,t){e(i.exports,"TwinkleUpdater",(()=>s));var n=o("i0lBz"),l=o("74AQo");class s{getColorStyles(e,o,i,t){const l=e.options.twinkle;if(!l)return{};const s=l.particles,a=s.enable&&(0,n.getRandom)()<s.frequency,r=e.options.zIndex,c=(1-e.zIndexFactor)**r.opacityRate,d=a?(0,n.getRangeValue)(s.opacity)*c:t,f=(0,n.rangeColorToHsl)(s.color),p=f?(0,n.getStyleFromHsl)(f,d):void 0,u={},w=a&&p;return u.fill=w?p:void 0,u.stroke=w?p:void 0,u}async init(){await Promise.resolve()}isEnabled(e){const o=e.options.twinkle;return!!o&&o.particles.enable}loadOptions(e,...o){e.twinkle||(e.twinkle=new(0,l.Twinkle));for(const i of o)e.twinkle.load(i?.twinkle)}async update(){await Promise.resolve()}}})),o.register("74AQo",(function(i,t){e(i.exports,"Twinkle",(()=>l));var n=o("f6ine");class l{constructor(){this.lines=new(0,n.TwinkleValues),this.particles=new(0,n.TwinkleValues)}load(e){e&&(this.lines.load(e.lines),this.particles.load(e.particles))}}})),o.register("f6ine",(function(i,t){e(i.exports,"TwinkleValues",(()=>l));var n=o("i0lBz");class l{constructor(){this.enable=!1,this.frequency=.05,this.opacity=1}load(e){e&&(void 0!==e.color&&(this.color=n.OptionsColor.create(this.color,e.color)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.frequency&&(this.frequency=e.frequency),void 0!==e.opacity&&(this.opacity=(0,n.setRangeValue)(e.opacity)))}}}));
//# sourceMappingURL=TwinkleUpdater.2c82623a.js.map