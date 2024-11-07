// json2html.js
export default function json2html(data) {
    // Create the table header with the "Name", "Age", and "Gender" columns
    const header = `<thead>
      <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
    </thead>`;
  
    // Create the table body by iterating over the data array
    const bodyRows = data.map(row => {
      const name = `<td>${row.Name}</td>`;
      const age = `<td>${row.Age}</td>`;
      const gender = row.Gender ? `<td>${row.Gender}</td>` : ''; // Add gender cell if present
      return `<tr>${name}${age}${gender}</tr>`;
    }).join('');
  
    const body = `<tbody>${bodyRows}</tbody>`;
  
    // Return the full table as a string with the required data-user attribute
    return `<table data-user="aishwaryanalli2003@gmail.com">${header}${body}</table>`;
  }
  