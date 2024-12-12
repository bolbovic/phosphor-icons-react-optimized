var V = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var h = (e, m, a) => m in e ? V(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, Z = (e, m) => {
  for (var a in m || (m = {}))
    p.call(m, a) && h(e, a, m[a]);
  if (o)
    for (var a of o(m))
      H.call(m, a) && h(e, a, m[a]);
  return e;
};
var d = (e, m) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && o)
    for (var t of o(e))
      m.indexOf(t) < 0 && H.call(e, t) && (a[t] = e[t]);
  return a;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, a) => {
  var r = t, { children: e } = r, m = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, Z({ ref: a }, m), e, /* @__PURE__ */ l.createElement("path", { d: "M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-60,64h56v16H140Zm0,40h56v16H140Zm56-64H140V60h56ZM60,60h56V196H60Zm80,136V180h56v16Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
