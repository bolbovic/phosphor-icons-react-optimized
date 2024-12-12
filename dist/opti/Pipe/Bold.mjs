var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    v.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && r(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var h in a)
    v.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && H.call(a, h) && (e[h] = a[h]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((h, e) => {
  var o = h, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ d.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M232,100H216V60h16a12,12,0,0,0,0-24H212a20,20,0,0,0-16-8H172a20,20,0,0,0-16,8H144A108.12,108.12,0,0,0,36,144v12a20,20,0,0,0-8,16v24a20,20,0,0,0,8,16v20a12,12,0,0,0,24,0V216h40v16a12,12,0,0,0,24,0V212a20,20,0,0,0,8-16V172a20,20,0,0,0-8-16V144a20,20,0,0,1,20-20h12a20,20,0,0,0,16,8h24a20,20,0,0,0,16-8h20a12,12,0,0,0,0-24ZM108,176v16H52V176Zm-8-32v8H60v-8a84.09,84.09,0,0,1,84-84h8v40h-8A44.05,44.05,0,0,0,100,144Zm76-92h16v56H176Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
