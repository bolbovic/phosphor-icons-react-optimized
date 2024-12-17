var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      n.call(t, e) && H(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const h = d((m, e) => {
  var p = m, { children: a } = p, t = Z(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, V({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M232,96v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V96Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
