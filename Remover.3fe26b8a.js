var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6158;e.register("6upnV",(function(t,o){var n,r,i,a;n=t.exports,r="Remover",i=()=>d,Object.defineProperty(n,r,{get:i,set:a,enumerable:!0,configurable:!0});var l=e("i0lBz"),s=e("5yiD5");class d extends l.ExternalInteractorBase{constructor(e){super(e),this.handleClickMode=e=>{const t=this.container,o=t.actualOptions;if(!o.interactivity.modes.remove||"remove"!==e)return;const n=(0,l.getRangeValue)(o.interactivity.modes.remove.quantity);t.particles.removeQuantity(n)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...t){e.remove||(e.remove=new(0,s.Remove));for(const o of t)e.remove.load(o?.remove)}reset(){}}}));
//# sourceMappingURL=Remover.3fe26b8a.js.map