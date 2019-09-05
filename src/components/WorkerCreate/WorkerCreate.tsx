import React, { useEffect, useState, FormEvent } from 'react';
import { useCreateWorkerMutation } from '../../generated/graphql';
import {
    Form,
    Button,
    FormControlProps,
    FormControl,
    FormLabel,
    FormGroup,
    FormCheck
} from 'react-bootstrap';
import { string } from 'prop-types';

interface Props {
    callback: ()=> void;
}
const WorkerCreate: React.SFC<Props> = ({callback}: Props) => {
    const [postWorker] = useCreateWorkerMutation(); 
    const [name, setName] = useState<string | undefined>('');
    const [age, setAge] = useState<number | undefined>();
    const [wage, setWage] = useState<number | undefined>();
    const [active, setActive] = useState<boolean | undefined>(false);

    const createWorker= (evt: FormEvent<HTMLButtonElement | HTMLFormElement>)=> {
        evt.preventDefault();

        // const payload = {
        //     name: "new-foo", 
        //     age: 66,
        //     wage: 666.6,
        //     active: true
        // };

        const payload = {
            name: name,
            age: age | 0,
            wage: wage | 0.0, 
            active: active
        }

        console.log(payload);
    
        postWorker({
            variables: payload
        }).then(res=> {
            console.log(res);
            setName("");
            setAge(undefined);
            setWage(undefined);
            setActive(false);
            callback();
        });
    }

    // similar to ComponentDidMount and ComponentDidUpdate
    // useEffect(()=> {
    //     createWorker();
    // }, []);

 

    return (
        <div className="vb">
        <Form>
            <FormGroup controlId="formName">
                <FormLabel>Worker Name</FormLabel>
                <FormControl 
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(evt: FormEvent<FormControlProps & FormControl>) => {
                        setName(evt.currentTarget.value);
                    }}
                />
            </FormGroup>
            <FormGroup controlId="formAge">
                <FormLabel>Worker Age</FormLabel>
                <FormControl 
                    type="number"
                    placeholder="Enter age"
                    name="age"
                    className="form-control"
                    value={String(age)}
                    onChange={(evt: FormEvent<FormControlProps & FormControl>)=> {
                        setAge(parseInt(evt.currentTarget.value));
                    }}
                />
            </FormGroup>
            <FormGroup controlId="formWage">
                <FormLabel>Worker Wage</FormLabel>
                <FormControl 
                    type="number"
                    placeholder="Enter wage"
                    name="wage"
                    className="form-control"
                    value={String(wage)}
                    onChange={(evt: FormEvent<FormControlProps & FormControl>)=> {
                        setWage(parseFloat(evt.currentTarget.value));
                    }}
                />
            </FormGroup>
            <FormGroup controlId="formActive">
                <FormLabel>Worker Active</FormLabel>
                <FormControl as="select"
                value={String(active)}
                 onChange={(evt)=> {
                    console.log(evt.currentTarget.value);
                    setActive((evt.currentTarget.value.toLowerCase() === "true"? true: false));
                }}
                >
                    <option>false</option>
                    <option>true</option>
                </FormControl>
                {/* <FormCheck 
                    name="active"
                    className="form-control"
                    label="Worker Active"
                    // checked={active}
                    value={String(active)}
                    onChange={(evt: FormEvent<HTMLInputElement>)=> {
                        console.log(evt);
                        setActive((evt.currentTarget.value.toLowerCase() === "true"? true: false));
                    }}
                /> */}
            </FormGroup>
            <Button variant="primary" type="submit" onClick={createWorker}>
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default WorkerCreate;