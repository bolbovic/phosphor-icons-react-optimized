var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((o, e) => {
  var H = o, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ d.createElement(f, V({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M228,56H160L133.33,36a20.12,20.12,0,0,0-12-4H76A20,20,0,0,0,56,52V72H36A20,20,0,0,0,16,92V204a20,20,0,0,0,20,20H188.89A19.13,19.13,0,0,0,208,204.89V184h20.89A19.13,19.13,0,0,0,248,164.89V76A20,20,0,0,0,228,56ZM184,200H40V96H80l28.8,21.6A12,12,0,0,0,116,120h68Zm40-40H208V116a20,20,0,0,0-20-20H120L93.33,76a20.12,20.12,0,0,0-12-4H80V56h40l28.8,21.6A12,12,0,0,0,156,80h68Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
