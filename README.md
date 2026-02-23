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


## Project Setup

# Clone the repository
```
git clone <your-repo-url>
cd dynamic-filter-builder

```

# Install dependencies

pnpm install 

# Run development server
pnpm dev

# App will run at
```
http://localhost:5173
```


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
``` 
│src/
├── components/
|   ├── DynamicFilter/
│   ├── FilterBuilder/
│   ├── ValueInputComponents/
│   ├── ValueRenderer/
│   └── Table/
├── data/
├── store/
├── utils/


```
## DynamicFilter
This is the parent component that composes the FilterBuilder and Table components.

# Responsibilities:

-Generates employee data on mount (using useEffect)

-Stores the data in Redux (employeeSlice)

-Uses a selector to retrieve filtered data based on active rules

-Passes the filtered data to the Table component for rendering

## FilterBuilder
The core component responsible for building filter rules.

# Responsibilities:

-Allows users to create, update, and delete filter rules

-Manages rule state in Redux (filterSlice)

-Dynamically renders UI based on the Field Registry Pattern

-Uses type definitions to ensure rule consistency

-Displays appropriate operators and value inputs based on field type

## Table
Displays employee data received from DynamicFilter.

# Features:

-Renders filtered data

-Supports column-based sorting

-Allows ascending and descending order per column

## ValueInputComponents

Provides input components based on field type.

# Examples:

Text input

Number input

Date picker

Select / Multi-select

Range input

This is implemented using a type-to-component mapping.

## ValueRenderer

Responsible for selecting and rendering the correct input component.

# Flow:

Field → Field Type → Component Map → Render Input

This keeps the UI dynamic and scalable.

## data

Handles data generation using Faker.js.

# Features:

Generates employee data in JSON format

Supports configurable number of rows

Exported utility function for data creation

## Store

Contains Redux state management.

employeeSlice

Stores original employee dataset

filterSlice

Stores filter rules created by the user

Filtering is performed using a memoized selector, ensuring efficient recalculation only when data or rules change.

## Improvements
# Initial
-Adding harder validation check for input component's 
-Debounce redux state update when  value is entered on text and number input
-Better UI styling,accessibility and responsiveness.
-Adding (OR) logic support when filtering(The above component uses (AND))






