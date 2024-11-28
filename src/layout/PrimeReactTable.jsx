import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function PrimeReactTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulated data fetching
    const fetchData = () => {
      const data = [
        { code: "P001", name: "Laptop", category: "Electronics", quantity: 50 },
        { code: "P002", name: "Mobile", category: "Electronics", quantity: 120 },
        { code: "P003", name: "Shampoo", category: "Beauty", quantity: 200 },
        { code: "P004", name: "Table", category: "Furniture", quantity: 15 },
        { code: "P005", name: "Chair", category: "Furniture", quantity: 30 },
      ];
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  );
}
