module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "references-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "ci",
        "build",
        "revert",
      ],
    ],
  },
};
