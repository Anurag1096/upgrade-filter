# Dynamic Employee Filter Builder

Built using **React + TypeScript + Redux Toolkit + fakerjs(for dataset creation)** that dynamically generates filter UI and logic using the **Field Registry Pattern**, **Selector based filtering ** and **Operator Maps**.

---

## 🚀 Features

- Dynamic filter creation
- Multiple filter rules
- Field-type based operators
- Selector-based automatic filtering
- Supports multiple data types:
---

## 🏗 Architecture Overview

The application uses a **configuration-first approach**.
### Data format
`
export type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  salary: number;
  joinDate: string;
  isActive: boolean;
  skills: string[];
  address: {
    city: string;
    state: string;
    country: string;
  };
  projects: number;
  lastReview: string;
  performanceRating: number;
};
`
### Data Flow

User Interaction
(User starts creating the rules with the help of filterbuilder component)
      ↓
Update Rules (Redux Tkl)
(Rules are saved in redux state)
      ↓
createSelector()
(The Function recieves data and rules array)
      ↓
getValidRules()
(Rules are validated before filtering is applied)
      ↓
applyFilters()
( takes the valid rules and applies it to the data)
      ↓
Filtered Employee Data
(Result is shown to the user)

### Project Components

## Folder structure
src
│
├── components/
│   └── DynamicFilter/
|   └── FilterBuilder/
│   └── Table/
|   └── ValueInputComponents/
|   └── ValueRender/
|── data/
|   └── genrateTable.ts
├── store/
│   ├── employeeSlice.ts
│   └── filterSlice.ts
|---- utils/


## 
