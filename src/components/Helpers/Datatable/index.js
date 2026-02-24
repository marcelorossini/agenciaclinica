"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/router";

import { Container, Table, Thead, Tbody, Th, Td, Tr, Empty } from "./style";

const Datatable = ({ columns = [], data = [], noDataComponent, ...rest }) => {
  const router = useRouter();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleRowClick = (id = "") => {
    router.push(`${router.pathname}/${id || "novo"}`);
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    const col = columns.find((c) => c.name === sortConfig.key);
    if (!col?.selector) return data;
    return [...data].sort((a, b) => {
      const aVal = col.selector(a);
      const bVal = col.selector(b);
      const aComp = aVal == null ? "" : String(aVal);
      const bComp = bVal == null ? "" : String(bVal);
      const cmp = aComp.localeCompare(bComp, undefined, { numeric: true });
      return sortConfig.direction === "asc" ? cmp : -cmp;
    });
  }, [data, columns, sortConfig]);

  const handleSort = (col) => {
    if (!col.sortable) return;
    setSortConfig((prev) => ({
      key: col.name,
      direction: prev.key === col.name && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  if (data.length === 0) {
    const emptyContent =
      noDataComponent ?? "Nenhum registro, clique aqui para adicionar";
    return (
      <Empty
        onClick={() => handleRowClick()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleRowClick()}
      >
        {emptyContent}
      </Empty>
    );
  }

  return (
    <Container {...rest}>
      <Table>
        <Thead>
          <Tr>
            {columns.map((col) => (
              <Th
                key={col.name}
                $sortable={col.sortable}
                onClick={() => handleSort(col)}
                onKeyDown={(e) => col.sortable && (e.key === "Enter" || e.key === " ") && handleSort(col)}
                tabIndex={col.sortable ? 0 : undefined}
                role={col.sortable ? "button" : undefined}
              >
                {col.name}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((row, rowIndex) => (
            <Tr
              key={row.id ?? rowIndex}
              onClick={() => handleRowClick(row.id)}
              onKeyDown={(e) => e.key === "Enter" && handleRowClick(row.id)}
              tabIndex={0}
              role="button"
            >
              {columns.map((col) => (
                <Td key={col.name}>
                  {typeof col.selector === "function" ? col.selector(row) : row[col.selector]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Datatable;
