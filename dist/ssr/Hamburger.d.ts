import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OC4wNywxMDRIMjA3LjkzYTE2LDE2LDAsMCwwLDE1LjcyLTE5LjM4QzIxNi4yMiw0OS41LDE3NiwyNCwxMjgsMjRTMzkuNzgsNDkuNSwzMi4zNSw4NC42MkExNiwxNiwwLDAsMCw0OC4wNywxMDRaTTEyOCw0MGMzOS44MiwwLDc0LjIxLDIwLjYxLDc5LjkzLDQ4SDQ4LjA3TDQ4LDg3LjkzQzUzLjc5LDYwLjYxLDg4LjE4LDQwLDEyOCw0MFpNMjI5LjI2LDE1Mi40OGwtNDEuMTMsMTVMMTUxLDE1Mi41N2E4LDgsMCwwLDAtNS45NCwwbC0zNywxNC44MUw3MSwxNTIuNTdhOCw4LDAsMCwwLTUuNy0uMDlsLTQ0LDE2YTgsOCwwLDAsMCw1LjQ3LDE1TDQwLDE3OC42OVYxODRhNDAsNDAsMCwwLDAsNDAsNDBoOTZhNDAsNDAsMCwwLDAsNDAtNDB2LTkuNjdsMTguNzMtNi44MWE4LDgsMCwxLDAtNS40Ny0xNVpNMjAwLDE4NGEyNCwyNCwwLDAsMS0yNCwyNEg4MGEyNCwyNCwwLDAsMS0yNC0yNFYxNzIuODhsMTEuODctNC4zMkwxMDUsMTgzLjQzYTgsOCwwLDAsMCw1Ljk0LDBsMzctMTQuODEsMzcsMTQuODFhOCw4LDAsMCwwLDUuNy4wOWw5LjI3LTMuMzdaTTE2LDEyOGE4LDgsMCwwLDEsOC04SDIzMmE4LDgsMCwwLDEsMCwxNkgyNEE4LDgsMCwwLDEsMTYsMTI4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OC4wNywxMDBIMjA3LjkzYTEyLDEyLDAsMCwwLDExLjgtMTQuNTVjLTMuMzktMTYtMTQuNTYtMzAuNjgtMzEuNDYtNDEuMjNTMTUwLjExLDI4LDEyOCwyOCw4NC40OSwzMy43Niw2Ny43Myw0NC4yMiwzOS42Niw2OS40MSwzNi4yNyw4NS40NUExMiwxMiwwLDAsMCw0OC4wNywxMDBabS00LTEyLjg5QzUwLjI2LDU4LDg2LjMzLDM2LDEyOCwzNnM3Ny43NCwyMiw4My45MSw1MS4xMWE0LDQsMCwwLDEtLjgyLDMuMzksNCw0LDAsMCwxLTMuMTYsMS41SDQ4LjA3YTQsNCwwLDAsMS0zLjE2LTEuNUE0LDQsMCwwLDEsNDQuMDksODcuMTFabTE4Ni41NCw2OS4xMy00Mi41NiwxNS40OC0zOC41OC0xNS40M2E0LDQsMCwwLDAtMywwTDEwOCwxNzEuNjlsLTM4LjUxLTE1LjRhNCw0LDAsMCwwLTIuODYsMGwtNDQsMTZBNCw0LDAsMCwwLDI0LDE4MGE0LjA4LDQuMDgsMCwwLDAsMS4zNy0uMjRMNDQsMTczdjExYTM2LDM2LDAsMCwwLDM2LDM2aDk2YTM2LDM2LDAsMCwwLDM2LTM2VjE3MS41M2wyMS4zNy03Ljc3YTQsNCwwLDAsMC0yLjc0LTcuNTJaTTIwNCwxODRhMjgsMjgsMCwwLDEtMjgsMjhIODBhMjgsMjgsMCwwLDEtMjgtMjhWMTcwLjA3bDE1LjkzLTUuNzksMzguNTgsMTUuNDNhNCw0LDAsMCwwLDMsMEwxNDgsMTY0LjMxbDM4LjUxLDE1LjRhNCw0LDAsMCwwLDIuODYsMEwyMDQsMTc0LjQ0Wk0yMCwxMjhhNCw0LDAsMCwxLDQtNEgyMzJhNCw0LDAsMCwxLDAsOEgyNEE0LDQsMCwwLDEsMjAsMTI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OC4wNywxMDJIMjA3LjkzYTE0LDE0LDAsMCwwLDEzLjc2LTE3QzIxNC40NSw1MC44MywxNzUuMDUsMjYsMTI4LDI2UzQxLjU1LDUwLjgzLDM0LjMxLDg1YTE0LDE0LDAsMCwwLDEzLjc2LDE3Wm0tMi0xNC40OEM1Miw1OS4yOSw4Ny4yNSwzOCwxMjgsMzhTMjA0LDU5LjI5LDIxMCw4Ny41MmEyLDIsMCwwLDEtMiwyLjQ4SDQ4LjA3YTIsMiwwLDAsMS0yLTIuNDhaTTIzMCwxNTQuMzYsMTg4LjEsMTY5LjU4bC0zNy44Ny0xNS4xNWE2LDYsMCwwLDAtNC40NiwwTDEwOCwxNjkuNTQsNzAuMjMsMTU0LjQzYTYsNiwwLDAsMC00LjI4LS4wN2wtNDQsMTZBNiw2LDAsMCwwLDI0LDE4MmE2LjExLDYuMTEsMCwwLDAsMi4wNS0uMzZsMTYtNS44VjE4NGEzOCwzOCwwLDAsMCwzOCwzOGg5NmEzOCwzOCwwLDAsMCwzOC0zOFYxNzIuOTNsMjAuMDUtNy4yOWE2LDYsMCwwLDAtNC4xLTExLjI4Wk0yMDIsMTg0YTI2LDI2LDAsMCwxLTI2LDI2SDgwYTI2LDI2LDAsMCwxLTI2LTI2VjE3MS40OGwxMy45LTUuMDYsMzcuODcsMTUuMTVhNiw2LDAsMCwwLDQuNDYsMEwxNDgsMTY2LjQ2bDM3Ljc3LDE1LjExYTYsNiwwLDAsMCw0LjI4LjA3TDIwMiwxNzcuMjlaTTE4LDEyOGE2LDYsMCwwLDEsNi02SDIzMmE2LDYsMCwwLDEsMCwxMkgyNEE2LDYsMCwwLDEsMTgsMTI4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuOSwxNTIuNzJsLTM5LjcsMTQuNDQtMzUuNzQtMTQuM2ExMiwxMiwwLDAsMC04LjkyLDBMMTA4LDE2Ny4wOCw3Mi40NiwxNTIuODZhMTIsMTIsMCwwLDAtOC41Ni0uMTRsLTQ0LDE2YTEyLDEyLDAsMCwwLDguMiwyMi41Nmw4LjEyLTIuOTVBNDQuMDYsNDQuMDYsMCwwLDAsODAsMjI4aDk2YTQ0LjA1LDQ0LjA1LDAsMCwwLDQ0LTQ0di0yLjg3bDE2LjEtNS44NWExMiwxMiwwLDAsMC04LjItMjIuNTZaTTE3NiwyMDRIODBhMjAsMjAsMCwwLDEtMjAtMjB2LTQuMzJsNy44LTIuODQsMzUuNzQsMTQuM2ExMiwxMiwwLDAsMCw4LjkyLDBMMTQ4LDE3Ni45MmwzNS41NCwxNC4yMmExMiwxMiwwLDAsMCw4LjU2LjE0bDIuODktMS4wNkEyMCwyMCwwLDAsMSwxNzYsMjA0Wk0xMiwxMjhhMTIsMTIsMCwwLDEsMTItMTJIMjMyYTEyLDEyLDAsMCwxLDAsMjRIMjRBMTIsMTIsMCwwLDEsMTIsMTI4Wm0zNi4yLTI0SDIwNy44YTIwLjM2LDIwLjM2LDAsMCwwLDE2LjM4LTguMjksMTkuNTksMTkuNTksMCwwLDAsMi44OC0xNy42NUMyMTYuMTIsNDMuODgsMTc1LjM5LDIwLDEyOCwyMFMzOS44OSw0My44NywyOC45NCw3OC4wNUExOS41NiwxOS41NiwwLDAsMCwzMS44Miw5NS43LDIwLjMyLDIwLjMyLDAsMCwwLDQ4LjIsMTA0Wk0xMjgsNDRjMzMuNywwLDYzLjYxLDE0Ljg1LDc0LDM2SDU0QzY0LjQsNTguODUsOTQuMzEsNDQsMTI4LDQ0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNS41OCw5OC4wNmExNiwxNiwwLDAsMS0zLjIzLTEzLjQ0QzM5Ljc4LDQ5LjUsODAsMjQsMTI4LDI0czg4LjIyLDI1LjUsOTUuNjUsNjAuNjJBMTYsMTYsMCwwLDEsMjA3LjkzLDEwNEg0OC4wN0ExNiwxNiwwLDAsMSwzNS41OCw5OC4wNlptMTkzLjY4LDU0LjQyLTQxLjEzLDE1TDE1MSwxNTIuNTdhOCw4LDAsMCwwLTUuOTQsMGwtMzcsMTQuODFMNzEsMTUyLjU3YTgsOCwwLDAsMC01LjctLjA5bC00NCwxNmE4LDgsMCwwLDAsNS40NywxNUw0MCwxNzguNjlWMTg0YTQwLDQwLDAsMCwwLDQwLDQwaDk2YTQwLDQwLDAsMCwwLDQwLTQwdi05LjY3bDE4LjczLTYuODFhOCw4LDAsMSwwLTUuNDctMTVaTTI0LDEzNkgyMzJhOCw4LDAsMCwwLDAtMTZIMjRhOCw4LDAsMCwwLDAsMTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsMTc2bDIwLTcuMjdWMTg0YTMyLDMyLDAsMCwxLTMyLDMySDgwYTMyLDMyLDAsMCwxLTMyLTMyVjE2Ny4yN0w2OCwxNjBsNDAsMTYsNDAtMTZabTI3LjgyLTg5LjcyQzIwOS4zMiw1NS41NSwxNzIuNDgsMzIsMTI4LDMyUzQ2LjY4LDU1LjU1LDQwLjE4LDg2LjI4QTgsOCwwLDAsMCw0OC4wNyw5NkgyMDcuOTNBOCw4LDAsMCwwLDIxNS44Miw4Ni4yOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik00OC4wNywxMDRIMjA3LjkzYTE2LDE2LDAsMCwwLDE1LjcyLTE5LjM4QzIxNi4yMiw0OS41LDE3NiwyNCwxMjgsMjRTMzkuNzgsNDkuNSwzMi4zNSw4NC42MkExNiwxNiwwLDAsMCw0OC4wNywxMDRaTTEyOCw0MGMzOS44MiwwLDc0LjIxLDIwLjYxLDc5LjkzLDQ4SDQ4LjA3TDQ4LDg3LjkzQzUzLjc5LDYwLjYxLDg4LjE4LDQwLDEyOCw0MFpNMjI5LjI2LDE1Mi40OGwtNDEuMTMsMTVMMTUxLDE1Mi41N2E4LDgsMCwwLDAtNS45NCwwbC0zNywxNC44MUw3MSwxNTIuNTdhOCw4LDAsMCwwLTUuNy0uMDlsLTQ0LDE2YTgsOCwwLDAsMCw1LjQ3LDE1TDQwLDE3OC42OVYxODRhNDAsNDAsMCwwLDAsNDAsNDBoOTZhNDAsNDAsMCwwLDAsNDAtNDB2LTkuNjdsMTguNzMtNi44MWE4LDgsMCwxLDAtNS40Ny0xNVpNMjAwLDE4NGEyNCwyNCwwLDAsMS0yNCwyNEg4MGEyNCwyNCwwLDAsMS0yNC0yNFYxNzIuODhsMTEuODctNC4zMkwxMDUsMTgzLjQzYTgsOCwwLDAsMCw1Ljk0LDBsMzctMTQuODEsMzcsMTQuODFhOCw4LDAsMCwwLDUuNy4wOWw5LjI3LTMuMzdaTTE2LDEyOGE4LDgsMCwwLDEsOC04SDIzMmE4LDgsMCwwLDEsMCwxNkgyNEE4LDgsMCwwLDEsMTYsMTI4WiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as Hamburger };