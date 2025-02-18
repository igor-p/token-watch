module.exports = {
  extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  rules: {
    "react/jsx-curly-brace-presence": ["warn", { props: "never" }],
  },
}
