import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { CarForm } from '../CarForm';
import { useGetData } from '../../custom-hooks';
import { Button, 
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle} from '@mui/material';
import styles from '../../css/datatablestyles.module.css';


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90, hide: true},
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'year', headerName: 'Year', flex: 1},
    {field: 'mileage', headerName: 'Mileage', flex: 1},
]

interface gridData {
    data: {
        id?: string
    }
}  

export const DataTable = () => {

    let { carData, getData } = useGetData();
    let [ openCreate, setOpenCreate ] = useState(false);
    let [ openUpdate, setOpenUpdate ] = useState(false);
    let [ gridData, setData ] = useState<gridData>({data:{}}) 
    const [ selectionModel, setSelectionModel ] = useState<any>([]);

    let handleOpenCreate = () => {
        setOpenCreate(true);
    };

    let handleCloseCreate = () => {
        setOpenCreate(false);
    };

    let handleOpenUpdate = () => {
        if (checkSelected()){
            setOpenUpdate(true);
        } else {
            alert("You have not selected a car to update!")
        }
    };

    let handleCloseUpdate = () => {
        setOpenUpdate(false);
    };

    // check logic
    let deleteData = () => {
        if (selectionModel.length != 0){
            server_calls.delete(selectionModel);
            getData();
            setTimeout( () => {window.location.reload(); }, 1000)
        }       
    }

    let refresh = () =>{
        setTimeout( () => {window.location.reload(); }, 1000)
    }

    let checkSelected = () => {
        if (selectionModel.length === 0){
            return false;
        }
        return true;
    }
    // console.log(gridData.data.id);
    // console.log(`testing for data ${carData}`)

    return (
        <>
            <div className={styles.center}>
                <Button onClick={handleOpenCreate} sx={{mb: 3}} variant="contained" color="success">Create New Car</Button>
            </div>        
            <div style={{ height: 400, width: '100%' }}>  
                <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection={true}
                    rowsPerPageOptions={ [5] }
                    onSelectionModelChange = { (item) => {
                        console.log(item)
                        setSelectionModel(item)
                    }}
                    showCellRightBorder={true} showColumnRightBorder={true}></DataGrid>
                <div className={styles.center}>
                    <Button onClick={handleOpenUpdate} sx={{mt: 2, mr: 3}} variant="contained">Update</Button>
                    <Button sx={{mt: 2, mr: 3}} variant="contained" color="error" onClick={deleteData}>Delete</Button>
                    <Button sx={{mt: 2}} variant="contained" color="secondary" onClick={refresh}>Refresh</Button>
                </div>
            </div>

            {/* Dialog Box for creating new car */}
            <Dialog open={openCreate} onClose={handleCloseCreate} aria-labelledby="form-dialog-title-create">
                <DialogTitle id="form-dialog-title-create">Create New Car</DialogTitle>
                <DialogContent>
                    <CarForm></CarForm>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCreate} color="primary" className={styles.center}>Cancel</Button>
                    <Button onClick={handleCloseCreate} color="primary" className={styles.center}>Done</Button>
                </DialogActions>
            </Dialog>
            
            
            {/* Dialog Box for updating car */}
            
            <Dialog open={openUpdate} onClose={handleCloseUpdate} aria-labelledby="form-dialog-title-update">
            <DialogTitle id="form-dialog-title-update">Update Car with ID {selectionModel}</DialogTitle>
            <DialogContent>
                <CarForm id={selectionModel!}></CarForm>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseUpdate} color="primary" className={styles.center}>Cancel</Button>
                <Button onClick={handleCloseUpdate} color="primary" className={styles.center}>Done</Button>
            </DialogActions>
            </Dialog>
            
        </>
    )
}
