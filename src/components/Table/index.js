/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
//import { Button, Table } from "@mantine/core";
import React from "react";
import "./style.css";
//
const TableComponent = ({ columns=[], rows = []}) => {
	return (
		<div style={{ height: 400, width: "40%"}}>
			<table className="table"> 
				<thead>
					<tr>
						{columns.map((column, index) => (
							<th key={index}>{column.value}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr>
							{columns.map((column, index) => {
								const value = row[column.key];
								return (
									<td key={index}>
										{typeof column.render === "function"
											? column.render(value)
											: value}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};


export default TableComponent;
