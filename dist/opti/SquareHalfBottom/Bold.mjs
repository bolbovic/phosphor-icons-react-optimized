var V = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (e, a, m) => a in e ? V(e, a, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[a] = m, d = (e, a) => {
  for (var m in a || (a = {}))
    p.call(a, m) && H(e, m, a[m]);
  if (o)
    for (var m of o(a))
      Z.call(a, m) && H(e, m, a[m]);
  return e;
};
var l = (e, a) => {
  var m = {};
  for (var t in e)
    p.call(e, t) && a.indexOf(t) < 0 && (m[t] = e[t]);
  if (e != null && o)
    for (var t of o(e))
      a.indexOf(t) < 0 && Z.call(e, t) && (m[t] = e[t]);
  return m;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, m) => {
  var r = t, { children: e } = r, a = l(r, ["children"]);
  return /* @__PURE__ */ v.createElement(f, d({ ref: m }, a), e, /* @__PURE__ */ v.createElement("path", { d: "M200,36H56A20,20,0,0,0,36,56V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,24v56H60V60Zm-80,80v56H100V140Zm24,0h16v56H140Zm-80,0H76v56H60Zm120,56V140h16v56Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
