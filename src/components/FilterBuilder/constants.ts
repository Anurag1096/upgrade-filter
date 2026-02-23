export const fieldRegistry = {
  name: { label: "Name", type: "text" },
  email: { label: "Email", type: "text" },
  department: {
    label: "Department",
    type: "singleSelect",
    options: ["Engineering", "HR", "Sales", "Marketing", "Finance"],
  },
  role: {
    label: "Role",
    type: "singleSelect",
    options: [
      "Junior Developer",
      "Senior Developer",
      "Tech Lead",
      "Manager",
      "QA Engineer",
      "Product Manager",
      "Designer",
      "DevOps Engineer",
    ],
  },
  salary: { label: "Salary", type: "number" },
  isActive: { label: "Active Status", type: "boolean" },
  skills: {
    label: "Skills",
    type: "multiSelect",
    options: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Python",
      "AWS",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "PostgreSQL",
      "Java",
      "Next.js",
    ],
  },
  addressCity: { label: "City", type: "text" },
  addressState: { label: "State", type: "text" },
  addressCountry: { label: "Country", type: "text" },
  projects: { label: "Number of Projects", type: "number" },
  lastReview: { label: "Last Review Date", type: "date" },
  performanceRating: { label: "Performance Rating", type: "number" },
} as const;
// for single and range input rendering
export const operatorConfig = {
  equals: { valueMode: "single" },
  greaterThan: { valueMode: "single" },
  lessThan: { valueMode: "single" },
  gte: { valueMode: "single" },
  lte: { valueMode: "single" },

  between: { valueMode: "range" },
} as const;

export const operatorTypeMap = {
  text: ["equals", "contains", "startsWith", "endsWith", "doesNotContain"],
  number: ["equals", "greaterThan", "lessThan", "gte", "lte", "between"],
  date: ["equals", "before", "after", "between"],
  boolean: ["is"],
  singleSelect: ["is", "isNot"],
  multiSelect: ["in", "notIn"],
  currency: ["equals", "greaterThan", "lessThan", "gte", "lte", "between"],
} as const;
