import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux'; 
import { useForm } from 'react-hook-form';
import { chooseName, chooseYear, chooseMileage } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@mui/material';
import { server_calls } from '../../api';

interface CarFormProps {
    id?: string;
    data?: {};
}

interface CarState {
    name: string;
    year: string;
    mileage: string;
}

export const CarForm = (props: CarFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<CarState>(state => state.name)
    const {register, handleSubmit} = useForm({});

    const onSubmit = (data: any, event: any) => {
        console.log(props.id)
        if(props.id!){
            console.log("TESTING")
            server_calls.update(props.id!, data);
            console.log(`Updated: ${data} ${props.id}`)
            console.log(data)
            setTimeout( () => {window.location.reload()}, 1000)
            event.target.reset();
        } else {
            dispatch(chooseName(data.name));
            dispatch(chooseYear(data.year));
            dispatch(chooseMileage(data.mileage));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Car Name &#40;Make and Model&#41;</label>
                    <Input {...register('name')} name="name" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor='year'>Year</label>
                    <Input {...register('year')} name="year" placeholder="Year" />
                </div>
                <div>
                    <label htmlFor='mileage'>Mileage</label>
                    <Input {...register('mileage')} name="mileage" placeholder="Mileage" />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
