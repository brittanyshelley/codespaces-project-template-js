var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;e.register("jSOE3",(function(o,n){var i,l,t,r;i=o.exports,l="ColorUpdater",t=()=>s,Object.defineProperty(i,l,{get:t,set:r,enumerable:!0,configurable:!0});var a=e("i0lBz");class s{constructor(e){this.container=e}init(e){const o=(0,a.rangeColorToHsl)(e.options.color,e.id,e.options.reduceDuplicates);o&&(e.color=(0,a.getHslAnimationFromHsl)(o,e.options.color.animation,this.container.retina.reduceFactor))}isEnabled(e){const{h:o,s:n,l:i}=e.options.color.animation,{color:l}=e;return!e.destroyed&&!e.spawning&&(void 0!==l?.h.value&&o.enable||void 0!==l?.s.value&&n.enable||void 0!==l?.l.value&&i.enable)}update(e,o){(0,a.updateColor)(e.color,o)}}}));
//# sourceMappingURL=ColorUpdater.a6991842.js.map