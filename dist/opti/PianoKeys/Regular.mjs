var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, r, e) => r in a ? l(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    h.call(r, e) && V(a, e, r[e]);
  if (m)
    for (var e of m(r))
      o.call(r, e) && V(a, e, r[e]);
  return a;
};
var v = (a, r) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var H = t, { children: a } = H, r = v(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, p({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,48h24v88H80Zm32,104a8,8,0,0,0,8-8V48h16v96a8,8,0,0,0,8,8h8v56H104V152Zm40-16V48h24v88ZM48,48H64v96a8,8,0,0,0,8,8H88v56H48ZM208,208H168V152h16a8,8,0,0,0,8-8V48h16V208Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
