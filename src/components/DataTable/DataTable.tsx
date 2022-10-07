import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90, hide: true},
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'year', headerName: 'Year', flex: 1},
    {field: 'mileage', headerName: 'Mileage', flex: 1},
]

// placeholder data for rows
const rows: GridRowsProp = [
    { id: 1, name: "Toyota Sienna", year: 2019, mileage: 80000},
    { id: 2, name: "Honda Civic", year: 2016, mileage: 50000},
]

interface gridData {
    data: {
        id?: string
    }
}  

export const DataTable = () => {

    // let { carData, getData } = useGetData();
    // let [gridData, setData ] = useState<gridData>({data:{}}) 

    // console.log(gridData.data.id);
    // console.log(`testing for data ${carData}`)

    return (
        <div style={{ height: 400, width: '100%' }}>  
            
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection={true}
                showCellRightBorder={true} showColumnRightBorder={true}></DataGrid>
        </div>
    )
}
