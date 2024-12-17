var A = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, r, e) => r in a ? A(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && H(a, e, r[e]);
  if (V)
    for (var e of V(r))
      Z.call(r, e) && H(a, e, r[e]);
  return a;
};
var h = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((t, e) => {
  var m = t, { children: a } = m, r = h(m, ["children"]);
  return /* @__PURE__ */ l.createElement(c, p({ ref: e }, r), a, /* @__PURE__ */ l.createElement("path", { d: "M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM56,112H200v64H56ZM168,48H152V32h16Zm-48,0V32h16V48ZM104,32V48H88V32ZM80,64h96a24,24,0,0,1,24,24v8H56V88A24,24,0,0,1,80,64Zm96,160H80a24,24,0,0,1-24-24v-8H200v8A24,24,0,0,1,176,224Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
