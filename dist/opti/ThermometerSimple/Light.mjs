var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((m, e) => {
  var o = m, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, f({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M134,154.6V88a6,6,0,0,0-12,0v66.6a30,30,0,1,0,12,0ZM128,202a18,18,0,1,1,18-18A18,18,0,0,1,128,202Zm38-67V48a38,38,0,0,0-76,0v87a62,62,0,1,0,76,0Zm-38,99a50,50,0,0,1-28.57-91A6,6,0,0,0,102,138V48a26,26,0,0,1,52,0v90a6,6,0,0,0,2.57,4.92A50,50,0,0,1,128,234Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
