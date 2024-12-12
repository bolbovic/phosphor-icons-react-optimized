var l = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, V = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && r(a, e, m[e]);
  if (v)
    for (var e of v(m))
      Z.call(m, e) && r(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && v)
    for (var t of v(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var o = t, { children: a } = o, m = p(o, ["children"]);
  return /* @__PURE__ */ d.createElement(f, V({ ref: e }, m), a, /* @__PURE__ */ d.createElement("path", { d: "M240,204h-4V88a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12v36H116V40a12,12,0,0,0-12-12H32A12,12,0,0,0,20,40V204H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM164,100h48V204H164Zm-24,48v56H116V148ZM44,52H92V204H44ZM80,76v8a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Zm0,48v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Zm0,48v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Zm96,8v-8a12,12,0,0,1,24,0v8a12,12,0,0,1-24,0Zm0-48v-8a12,12,0,0,1,24,0v8a12,12,0,0,1-24,0Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
