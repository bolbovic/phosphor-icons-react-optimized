var v = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? v(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, m = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && r(a, e, l[e]);
  if (V)
    for (var e of V(l))
      A.call(l, e) && r(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      l.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var o = t, { children: a } = o, l = p(o, ["children"]);
  return /* @__PURE__ */ d.createElement(f, m({ ref: e }, l), a, /* @__PURE__ */ d.createElement("path", { d: "M237.37,125.27,164,88.58V48a36,36,0,0,0-72,0V88.58L18.63,125.27A12,12,0,0,0,12,136v32a12,12,0,0,0,14.35,11.77L92,166.64V179L79.51,191.51A12,12,0,0,0,76,200v32a12,12,0,0,0,16.46,11.14L128,228.92l35.54,14.22A11.91,11.91,0,0,0,168,244a12,12,0,0,0,12-12V200a12,12,0,0,0-3.51-8.49L164,179V166.64l65.65,13.13A12,12,0,0,0,244,168V136A12,12,0,0,0,237.37,125.27ZM220,153.36l-65.65-13.13A12,12,0,0,0,140,152v32a12,12,0,0,0,3.51,8.49L156,205v9.31l-23.54-9.42a12,12,0,0,0-8.92,0L100,214.28V205l12.49-12.48A12,12,0,0,0,116,184V152a12,12,0,0,0-14.35-11.77L36,153.36v-9.94l73.37-36.69A12,12,0,0,0,116,96V48a12,12,0,0,1,24,0V96a12,12,0,0,0,6.63,10.73L220,143.42Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
