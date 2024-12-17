var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && c(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, e) => {
  var A = m, { children: a } = A, t = s(A, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,26A102.12,102.12,0,0,0,26,128v56a22,22,0,0,0,35,17.74c12.38-9,34.06-19.74,67-19.74s54.61,10.73,67,19.73A22,22,0,0,0,230,184V128A102.12,102.12,0,0,0,128,26Zm90,102v12.5a164.29,164.29,0,0,0-44.8-20.3A165.07,165.07,0,0,0,141.69,39,90.15,90.15,0,0,1,218,128Zm-57.21-10.78a168.56,168.56,0,0,0-65.58,0c5-38.38,24.16-65.59,32.79-76.14C136.63,51.65,155.8,78.85,160.79,117.23ZM114.31,39A165.07,165.07,0,0,0,82.8,120.21,164.29,164.29,0,0,0,38,140.51V128A90.15,90.15,0,0,1,114.31,39Zm98.26,153.85A9.94,9.94,0,0,1,202,192c-13.82-10-37.88-22-74-22s-60.22,12-74,22a9.92,9.92,0,0,1-10.53.85A9.79,9.79,0,0,1,38,184V155a154,154,0,0,1,180,0v29A9.79,9.79,0,0,1,212.57,192.89Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
