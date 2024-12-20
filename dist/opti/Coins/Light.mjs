var s = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var C = (a, e, c) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[e] = c, o = (a, e) => {
  for (var c in e || (e = {}))
    r.call(e, c) && C(a, c, e[c]);
  if (V)
    for (var c of V(e))
      Z.call(e, c) && C(a, c, e[c]);
  return a;
};
var i = (a, e) => {
  var c = {};
  for (var t in a)
    r.call(a, t) && e.indexOf(t) < 0 && (c[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      e.indexOf(t) < 0 && Z.call(a, t) && (c[t] = a[t]);
  return c;
};
import p, { forwardRef as M } from "react";
import f from "../../lib/OptiBase.mjs";
const v = M((t, c) => {
  var m = t, { children: a } = m, e = i(m, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: c }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M224.56,103.81C213.43,97.75,198.47,93.39,182,91.34V84c0-12.12-9.58-23.1-27-30.93C139.16,45.93,118.2,42,96,42S52.84,45.93,37,53.07C19.58,60.9,10,71.88,10,84v40c0,12.12,9.58,23.1,27,30.93,10.49,4.72,23.21,8,37,9.73V172c0,12.12,9.58,23.1,27,30.93C116.84,210.07,137.8,214,160,214s43.16-3.93,59-11.07c17.39-7.83,27-18.81,27-30.93V132C246,121.35,238.39,111.34,224.56,103.81Zm-5.74,10.54C228.61,119.68,234,126,234,132c0,14.19-30.39,30-74,30a166.9,166.9,0,0,1-21.21-1.34A110.79,110.79,0,0,0,155,154.93c17.39-7.83,27-18.81,27-30.93V103.43C196.4,105.36,209.3,109.16,218.82,114.35ZM108.16,153.58c-3.92.27-8,.42-12.16.42-5.3,0-10.4-.24-15.28-.67a2.22,2.22,0,0,0-.37,0c-3.58-.33-7-.77-10.35-1.3V124.12A178,178,0,0,0,96,126a178,178,0,0,0,26-1.88V152c-4.34.69-8.91,1.22-13.69,1.56ZM170,105.89V124c0,9.54-13.75,19.8-36,25.51V121.85a115,115,0,0,0,21-6.92A66.2,66.2,0,0,0,170,105.89ZM96,54c43.61,0,74,15.81,74,30s-30.39,30-74,30S22,98.19,22,84,52.39,54,96,54ZM22,124V105.89a66.2,66.2,0,0,0,15,9,115,115,0,0,0,21,6.92v27.66C35.75,143.8,22,133.54,22,124Zm64,48v-6.28c3.3.18,6.63.28,10,.28q5.91,0,11.66-.37A123.17,123.17,0,0,0,122,169.84v27.67C99.75,191.8,86,181.54,86,172Zm48,28V172.1a177.84,177.84,0,0,0,26,1.9,178,178,0,0,0,26-1.88V200a170,170,0,0,1-52,0Zm64-2.49V169.85a115,115,0,0,0,21-6.92,66.2,66.2,0,0,0,15-9V172C234,181.54,220.25,191.8,198,197.51Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
