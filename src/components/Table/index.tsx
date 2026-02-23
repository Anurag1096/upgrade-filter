// components/EmployeeTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
  Box,
  TableSortLabel,
} from "@mui/material";
import { useState, useMemo } from "react";
import type { Employee } from "../../utils/types/employType";

type Order = "asc" | "desc";

interface Props {
  data: Employee[];
}
// This Tabel's task is to recieve the data and render it 
// it wont handle the calling of the data form redux store 
// all that work will be handled by the parent container which calls it 

//------------
// In future we can go one level more deep and add another component which will only render
// the sorted data 
export default function TableRendering({ data }: Props) {
  const [orderBy, setOrderBy] = useState<keyof Employee | "city">("id");
  const [order, setOrder] = useState<Order>("asc");
  const TableRowData = [
    { id: "id", label: "ID" },
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    {id:'role',label:'Role'},
    { id: "department", label: "Department" },
    { id: "salary", label: "Salary" },
    { id: "city", label: "City" },
    {id:'state',label:'State'},
    {id:'country',label:'Country'},
    { id: "projects", label: "Projects" },
    {id:'lastReview', label:'Last Review'},
    { id: "performanceRating", label: "Rating" },
    { id: "isActive", label: "Status" },
  ];
  const handleSort = (property: keyof Employee | "city") => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      let aValue: any;
      let bValue: any;

      if (orderBy === "city") {
        aValue = a.address.city;
        bValue = b.address.city;
      } else {
        aValue = a[orderBy];
        bValue = b[orderBy];
      }

      // Boolean handling
      if (typeof aValue === "boolean") {
        return order === "asc"
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      }

      // String handling
      if (typeof aValue === "string") {
        return order === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      // Number handling
      return order === "asc" ? aValue - bValue : bValue - aValue;
    });
  }, [data, order, orderBy]);

  if(!data || data.length === 0) return (<div><span>No data</span></div>)

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
      <Table  stickyHeader size="small">
        <TableHead>
          <TableRow>
            {TableRowData.map((column) => (
              <TableCell key={column.id}>
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : "asc"}
                  onClick={() =>
                    handleSort(column.id as keyof Employee | "city")
                  }
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell>Skills</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedData.map((emp) => (
            <TableRow key={emp.id} hover>
              <TableCell>{emp.id}</TableCell>
              <TableCell>
            <Typography fontWeight={500}>{emp.name}</Typography>
              </TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>${emp.salary.toLocaleString()}</TableCell>
              <TableCell>{emp.address.city}</TableCell>
              <TableCell>{emp.address.state}</TableCell>
              <TableCell>{emp.address.country}</TableCell>
              <TableCell>{emp.projects}</TableCell>
              <TableCell>{emp.lastReview}</TableCell>
              <TableCell>{emp.performanceRating}</TableCell>
              <TableCell>
                <Chip
                  label={emp.isActive ? "Active" : "Inactive"}
                  color={emp.isActive ? "success" : "default"}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Box display="flex" gap={0.5} flexWrap="wrap">
                  {emp.skills.map((skill, index) => (
                    <Chip key={index} label={skill} size="small" />
                  ))}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
