import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTZINzJBMTYsMTYsMCwwLDAsNTYsMzJWNzcuMzNhMTYuMTIsMTYuMTIsMCwwLDAsMy4yLDkuNkw4MCwxMTQuNjdWMjI0YTE2LDE2LDAsMCwwLDE2LDE2aDY0YTE2LDE2LDAsMCwwLDE2LTE2VjExNC42N2wyMC44LTI3Ljc0YTE2LjEyLDE2LjEyLDAsMCwwLDMuMi05LjZWMzJBMTYsMTYsMCwwLDAsMTg0LDE2Wk03MiwzMkgxODRWNTZINzJWMzJabTkxLjIsNzMuMDdhMTYuMTIsMTYuMTIsMCwwLDAtMy4yLDkuNlYyMjRIOTZWMTE0LjY3YTE2LjEyLDE2LjEyLDAsMCwwLTMuMi05LjZMNzIsNzcuMzNWNzJIMTg0djUuMzNaTTEzNiwxMjB2MzJhOCw4LDAsMCwxLTE2LDBWMTIwYTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjBINzJBMTIsMTIsMCwwLDAsNjAsMzJWNzcuMzNhMTIuMDUsMTIuMDUsMCwwLDAsMi40LDcuMmwyMC44LDI3Ljc0YTQsNCwwLDAsMSwuOCwyLjRWMjI0YTEyLDEyLDAsMCwwLDEyLDEyaDY0YTEyLDEyLDAsMCwwLDEyLTEyVjExNC42N2E0LDQsMCwwLDEsLjgtMi40bDIwLjgtMjcuNzRhMTIuMDUsMTIuMDUsMCwwLDAsMi40LTcuMlYzMkExMiwxMiwwLDAsMCwxODQsMjBaTTcyLDI4SDE4NGE0LDQsMCwwLDEsNCw0VjYwSDY4VjMyQTQsNCwwLDAsMSw3MiwyOFpNMTg3LjIsNzkuNzNsLTIwLjgsMjcuNzRhMTIuMDUsMTIuMDUsMCwwLDAtMi40LDcuMlYyMjRhNCw0LDAsMCwxLTQsNEg5NmE0LDQsMCwwLDEtNC00VjExNC42N2ExMi4wNSwxMi4wNSwwLDAsMC0yLjQtNy4yTDY4LjgsNzkuNzNhNCw0LDAsMCwxLS44LTIuNFY2OEgxODh2OS4zM0E0LDQsMCwwLDEsMTg3LjIsNzkuNzNaTTEzMiwxMjB2MzJhNCw0LDAsMCwxLTgsMFYxMjBhNCw0LDAsMCwxLDgsMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMThINzJBMTQsMTQsMCwwLDAsNTgsMzJWNzcuMzNhMTQsMTQsMCwwLDAsMi44LDguNGwyMC44LDI3LjczYTIsMiwwLDAsMSwuNCwxLjIxVjIyNGExNCwxNCwwLDAsMCwxNCwxNGg2NGExNCwxNCwwLDAsMCwxNC0xNFYxMTQuNjdhMiwyLDAsMCwxLC40LTEuMmwyMC44LTI3Ljc0YTE0LDE0LDAsMCwwLDIuOC04LjRWMzJBMTQsMTQsMCwwLDAsMTg0LDE4Wk03MiwzMEgxODRhMiwyLDAsMCwxLDIsMlY1OEg3MFYzMkEyLDIsMCwwLDEsNzIsMzBaTTE4NS42LDc4LjUzbC0yMC44LDI3Ljc0YTE0LDE0LDAsMCwwLTIuOCw4LjRWMjI0YTIsMiwwLDAsMS0yLDJIOTZhMiwyLDAsMCwxLTItMlYxMTQuNjdhMTQsMTQsMCwwLDAtMi44LTguNEw3MC40LDc4LjU0YTIsMiwwLDAsMS0uNC0xLjIxVjcwSDE4NnY3LjMzQTIsMiwwLDAsMSwxODUuNiw3OC41M1pNMTM0LDEyMHYzMmE2LDYsMCwwLDEtMTIsMFYxMjBhNiw2LDAsMCwxLDEyLDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTJINzJBMjAsMjAsMCwwLDAsNTIsMzJWNzcuMzNhMjAuMTIsMjAuMTIsMCwwLDAsNCwxMkw3NiwxMTZWMjI0YTIwLDIwLDAsMCwwLDIwLDIwaDY0YTIwLDIwLDAsMCwwLDIwLTIwVjExNmwyMC0yNi42N2EyMC4xMiwyMC4xMiwwLDAsMCw0LTEyVjMyQTIwLDIwLDAsMCwwLDE4NCwxMlptLTQsMjRWNTJINzZWMzZabS0yMCw2Ni42N2EyMC4xMiwyMC4xMiwwLDAsMC00LDEyVjIyMEgxMDBWMTE0LjY3YTIwLjEyLDIwLjEyLDAsMCwwLTQtMTJMNzYsNzZIMTgwWk0xNDAsMTIwdjMyYTEyLDEyLDAsMCwxLTI0LDBWMTIwYTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTZINzJBMTYsMTYsMCwwLDAsNTYsMzJWNzcuMzNhMTYuMTIsMTYuMTIsMCwwLDAsMy4yLDkuNkw4MCwxMTQuNjdWMjI0YTE2LDE2LDAsMCwwLDE2LDE2aDY0YTE2LDE2LDAsMCwwLDE2LTE2VjExNC42N2wyMC44LTI3Ljc0YTE2LjEyLDE2LjEyLDAsMCwwLDMuMi05LjZWMzJBMTYsMTYsMCwwLDAsMTg0LDE2Wk0xMzYsMTUyYTgsOCwwLDAsMS0xNiwwVjEyMGE4LDgsMCwwLDEsMTYsMFpNNzIsNTZWMzJIMTg0VjU2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNjRWNzcuMzNhOCw4LDAsMCwxLTEuNiw0LjhsLTIwLjgsMjcuNzRhOCw4LDAsMCwwLTEuNiw0LjhWMjI0YTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLTgtOFYxMTQuNjdhOCw4LDAsMCwwLTEuNi00LjhMNjUuNiw4Mi4xM2E4LDgsMCwwLDEtMS42LTQuOFY2NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xODQsMTZINzJBMTYsMTYsMCwwLDAsNTYsMzJWNzcuMzNhMTYuMTIsMTYuMTIsMCwwLDAsMy4yLDkuNkw4MCwxMTQuNjdWMjI0YTE2LDE2LDAsMCwwLDE2LDE2aDY0YTE2LDE2LDAsMCwwLDE2LTE2VjExNC42N2wyMC44LTI3Ljc0YTE2LjEyLDE2LjEyLDAsMCwwLDMuMi05LjZWMzJBMTYsMTYsMCwwLDAsMTg0LDE2Wk03MiwzMkgxODRWNTZINzJWMzJabTkxLjIsNzMuMDdhMTYuMTIsMTYuMTIsMCwwLDAtMy4yLDkuNlYyMjRIOTZWMTE0LjY3YTE2LjEyLDE2LjEyLDAsMCwwLTMuMi05LjZMNzIsNzcuMzNWNzJIMTg0djUuMzNaTTEzNiwxMjB2MzJhOCw4LDAsMCwxLTE2LDBWMTIwYTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as Flashlight };