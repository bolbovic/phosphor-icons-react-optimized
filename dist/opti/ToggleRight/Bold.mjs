var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as Z } from "react";
import h from "../../lib/OptiBase.mjs";
const n = Z((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(h, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M176,52H80a76,76,0,0,0,0,152h96a76,76,0,0,0,0-152Zm0,128H80A52,52,0,0,1,80,76h96a52,52,0,0,1,0,104Zm0-92a40,40,0,1,0,40,40A40,40,0,0,0,176,88Zm0,56a16,16,0,1,1,16-16A16,16,0,0,1,176,144Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
