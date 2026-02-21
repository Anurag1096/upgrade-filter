export const fieldRegistry = {
  name: {
    label: "name",
    type: "text",
  },
  age: {
    label: "age",
    type: "number",
  },
  createdAt: {
    label: "createdAt",
    type: "date",
  },
  amount: { label: "Amount", type: "currency" },
  status: {
    label: "Status",
    type: "singleSelect",
    options: [
        { label: "Open", value: "open" },
    { label: "Closed", value: "closed" },
    { label: "Pending", value: "pending" }
        ],
  },
  tags: { label: "Tags", type: "multiSelect", options: ["A", "B", "C"] },
  isActive: { label: "Is Active", type: "boolean" },
} as const;

export const operatorTypeMap = {
  text: ["equals", "contains", "startsWith", "endsWith", "doesNotContain"],
  number: ["equals", "greaterThan", "lessThan", "gte", "lte"],
  date: ["between"],
  currency: ["between"],
  singleSelect: ["is", "isNot"],
  multiSelect: ["in", "notIn"],
  boolean: ["is"],
} as const;
