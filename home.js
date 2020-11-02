const requiredBloodGroups = [
    {name : "o +ve", amount : "1 liter"},
    {name : "ab -ve", amount : "3 liter"},
    {name : "o +ve", amount : "5 liter"},
    {name : "c +ve", amount : "1 liter"}
]

const renderListData = () => {
    console.log("render list data");
    console.log(localStorage.isDonationEnabled)
    if (!JSON.parse(localStorage.isDonationEnabled)) {
        document.getElementById("request").innerHTML = "<span>The donation has been closed<span>"
    } else {
        
        let table = document.createElement("TABLE");
        table.setAttribute("id", "request");
        document.body.appendChild(table);
        let tableHeading = document.createElement("TR");
        tableHeading.setAttribute("id","request-table-heading");
        document.getElementById("request").appendChild(tableHeading);
        let tableData1 = document.createElement("TD");
        tableData1.setAttribute("id","request-table-heading-cell1")
        let tableData2 = document.createElement("TD");
        tableData2.setAttribute("id","request-table-heading-cell2")
        let tableData3 = document.createElement("TD");
        tableData3.setAttribute("id","request-table-heading-cell3")
        document.getElementById("request-table-heading").appendChild(tableData1)
        document.getElementById("request-table-heading").appendChild(tableData2)
        document.getElementById("request-table-heading").appendChild(tableData3)
        document.getElementById("request-table-heading-cell1").appendChild(document.createTextNode("Blood Group"))
        document.getElementById("request-table-heading-cell2").appendChild(document.createTextNode("Quantity"))
        document.getElementById("request-table-heading-cell3").appendChild(document.createTextNode("Donate"))
        let requestDataNodes = requiredBloodGroups.map((data,index) => {
            
            let tableDataRow = document.createElement("TR");
            tableDataRow.setAttribute("id",`tableDataRow${index }a`);
            document.getElementById("request").appendChild(tableDataRow);
            let tableDataCell1 = document.createElement("TD");
            tableDataCell1.setAttribute("id",`tableDataCell${index }a`)
            let tableDataCell2 = document.createElement("TD");
            tableDataCell2.setAttribute("id",`tableDataCell${index }b`)
            let tableDataCell3 = document.createElement("TD");
            tableDataCell3.setAttribute("id",`tableDataCell${index}c`)
            document.getElementById(`tableDataRow${index }a`).appendChild(tableDataCell1)
            document.getElementById(`tableDataRow${index }a`).appendChild(tableDataCell2)
            document.getElementById(`tableDataRow${index }a`).appendChild(tableDataCell3)
            document.getElementById(`tableDataCell${index}a`).appendChild(document.createTextNode(data.name))
            document.getElementById(`tableDataCell${index}b`).appendChild(document.createTextNode(data.amount))
            document.getElementById(`tableDataCell${index}c`).appendChild(document.createTextNode("Donate"))
        })
        console.log(requestDataNodes);
        
    }
}