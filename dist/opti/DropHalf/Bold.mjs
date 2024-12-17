var V = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? V(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    A.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      Z.call(t, a) && p(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var m in e)
    A.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && Z.call(e, m) && (a[m] = e[m]);
  return a;
};
import l, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, a) => {
  var r = m, { children: e } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(h, c({ ref: a }, t), e, /* @__PURE__ */ l.createElement("path", { d: "M134.88,6.17a12,12,0,0,0-13.76,0,259,259,0,0,0-42.18,39C50.85,77.43,36,111.63,36,144a92,92,0,0,0,184,0C220,66.64,138.36,8.6,134.88,6.17ZM194.08,160H140V144h56A68,68,0,0,1,194.08,160ZM140,120V104h47a115,115,0,0,1,5.68,16Zm19.3-58.71A197.29,197.29,0,0,1,173.68,80H140V41.46A243.5,243.5,0,0,1,159.3,61.29ZM60,144c0-33.31,20-63.37,36.7-82.71A243.5,243.5,0,0,1,116,41.46V210.92A68.1,68.1,0,0,1,60,144Zm80,66.92V184h42.94A68,68,0,0,1,140,210.92Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
